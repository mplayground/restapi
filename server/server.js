var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
// Passport configurators..
var loopbackPassport = require('loopback-component-passport');
var PassportConfigurator = loopbackPassport.PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

var bodyParser = require('body-parser');
var flash      = require('express-flash');
var frameguard = require('frameguard')

var http = require('http');
var https = require('https');
var sslConfig = require('./ssl-config');

var config = {};
try {
  config = require('../providers.json');
} catch (err) {
  console.trace(err);
  process.exit(1); // fatal
}


// SSI 적용 (HTML INCLUDE)
var ssi = require("ssi");
var path = require("path")
var fs = require("fs")
var client_path = __dirname.replace("server", "client")
var parser = new ssi(client_path, "", "");

app.use(function(req,res,next) {

  var filename   = client_path+(req.path == "/" ? "/*.html" : req.path); // 모든 html을 인클루드 하기 위한 syntax

  if(fs.existsSync(filename) && filename.indexOf(".html") > 0) {
      res.send(parser.parse(filename, fs.readFileSync(filename, {encoding: "utf8"})).contents);
  } else {
      next();
  }
});


boot(app, __dirname, function(err) {
  if (err) throw err;
  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

app.middleware('parse', bodyParser.json());
app.middleware('parse', bodyParser.urlencoded({
  extended: true
}));
app.middleware('auth', loopback.token({
  model: app.models.AccessToken
}));
app.middleware('session:before', loopback.cookieParser(app.get('cookieSecret')));
app.middleware('session', loopback.session({
  secret: 'kitty',
  saveUninitialized: true,
  resave: true
}));

passportConfigurator.init();
//Only let me be framed by people of the same origin:
//X-Frame-Options을 SAMEORIGIN으로 설정
app.use(frameguard({ action: 'sameorigin' }))
app.use(frameguard({
  action: 'allow-from',
  domain: 'https://ec2-52-79-186-85.ap-northeast-2.compute.amazonaws.com:3000'
}))

app.use(flash());

passportConfigurator.setupModels({
  userModel: app.models.Students,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
});

for (var s in config) {
  var c = config[s];
  c.session = c.session !== false;
  passportConfigurator.configureProvider(s, c);
}
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

app.get('/auth/account', ensureLoggedIn('/Students/login'), function (req, res, next) {
  res.redirect('/main.html');
});

app.get('/auth/logout', function (req, res, next) {
  res.clearCookie('access_token');
  req.logout();
  res.redirect('/main.html');
});

app.start = function(httpOnly) {
  if (httpOnly === undefined) {
    httpOnly = process.env.HTTP;
  }
  var server = null;

  if (!httpOnly) {
    var options = {
      key: sslConfig.privateKey,
      cert: sslConfig.certificate,
    };
    server = https.createServer(options, app);
  } else {
    server = http.createServer(app);
  }

  //server = http.createServer(app);

  server.listen(app.get('port'), function() {
    var baseUrl = (httpOnly ? 'http://' : 'https://') + app.get('host') + ':' + app.get('port');
    app.emit('started', baseUrl);
    console.log('LoopBack server listening @ %s%s', baseUrl, '/');
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
  return server;
};
