const gulp = require("gulp");
const purgecss = require("gulp-purgecss");

gulp.task("purge", () => {
  return gulp
    .src("dist/*.css")
    .pipe(
      purgecss({
        content: ["dist/*.html"],
        defaultExtractor: (content) =>
          content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [],
      })
    )
    .pipe(gulp.dest("dist/min"));
});
