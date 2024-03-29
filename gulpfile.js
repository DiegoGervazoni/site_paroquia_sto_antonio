const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function comprimeImagens() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function comprimeJavaScript() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

// Nova função para copiar arquivos HTML
function html() {
  return gulp
    .src("./source/*.html")
    .pipe(gulp.dest("./build"));
}

exports.sass = compilaSass;
exports.html = html; // Exporte a nova função

// Adicione a tarefa 'html' à tarefa 'build'
exports.build = gulp.series(compilaSass, comprimeJavaScript, comprimeImagens, html);

exports.default = function () {
  gulp.watch("./source/styles/*.scss", gulp.series(compilaSass));
  gulp.watch("./source/scripts/*.js", gulp.series(comprimeJavaScript));
  gulp.watch("./source/images/*", gulp.series(comprimeImagens));
  gulp.watch("*.html", gulp.series(html)); // Adicione um watcher para arquivos HTML
};