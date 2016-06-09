var fs = require("fs");
var browserify = require("browserify");
var watchify = require('watchify');

//TODO 화면별로 하나씩 만들어줘야하나?
browserify(
  ["./client/src/student.js"]
  ).transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(fs.createWriteStream("./client/dist/bundle.js"));

browserify(
  ["./client/src/student.js"]
  ).transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(fs.createWriteStream("./client/dist/student.js"));

var b = browserify({
  entries:["./client/src/test-react-bootstrap.js"],
  cache: {},
  packageCache: {},
  plugin: [watchify]
}).transform("babelify", {presets: ["es2015", "react"]});

b.on("update",bundle);
bundle();

function bundle(){
  b.bundle().pipe(fs.createWriteStream("./client/dist/test-react-bootstrap.js"));
}
