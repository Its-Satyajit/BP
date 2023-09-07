const gulp = require("gulp");
const uglify = require("gulp-uglify");

// Define a task to minify your file
gulp.task("minify", () => {
  return gulp
    .src("./input/custom.js") // Replace 'path/to/source.js' with the path to your source file
    .pipe(uglify())
    .pipe(gulp.dest("./src/assets/js")); // Replace 'path/to/dist' with the path to the output directory
});

// Watch for changes in the source file and run the 'minify' task
gulp.task("watch", () => {
  gulp.watch("./input/custom.js", gulp.series("minify"));
});

// Default task: run 'minify' once and then start watching for changes
gulp.task("default", gulp.series("minify", "watch"));
