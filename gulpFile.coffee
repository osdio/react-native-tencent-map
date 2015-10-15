gulp = require "gulp"


src = 'index.ios.js'
dist = './example/demo/node_modules/react-native-tencent-map'

gulp.task 'move', ()->
  gulp.src src
  .pipe gulp.dest dist


gulp.task 'dev', ()->
  gulp.watch src, ['move']