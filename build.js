var fs = require("fs");
var browserify = require("browserify");
var watchify = require('watchify');

registerBrowserify("./client/src/student.js","./client/dist/bundle.js")
registerBrowserify("./client/src/student.js","./client/dist/student.js")
// registerBrowserify("./client/src/test-react-bootstrap.js","./client/dist/test-react-bootstrap.js")
// registerBrowserify("./client/src/test-tab.js","./client/dist/test-tab.js")

function registerBrowserify(src, dest){

  var b = browserify({
      entries:[src],
      cache: {},
      packageCache: {},
      plugin: [watchify]
    }).transform("babelify", {presets: ["es2015", "react"]});

  function bundleInner(){
    b.bundle().pipe(fs.createWriteStream(dest));
  }

  b.on("update",bundleInner);

  bundleInner(b,dest);
}
