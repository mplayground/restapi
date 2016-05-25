var fs = require("fs");
var browserify = require("browserify");
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
