module.exports = function(grunt) {

   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    content : './src/_markdown/',

    'gh-pages': {
      options: {
        base: 'build',
        message: 'Automatic deploy task'
      },
      src: [
        '*.html',
        'assets/**/*',
        'CNAME'        
        ]
    },
    'assemble': {
      options: {
          plugins: [ 'assemble-markdown-data' ],
          layout: 'default.hbs',
          layoutdir: './src/_layouts/',
          partials: ['./src/_partials/**/*.hbs'],
          //data: './*.json',    
          assets: './build/assets',
          // flatten the structure so instead of having a nested page (ex. site/layouts/index.html)
          // we will have site/index.html
          flatten: true            
      },
      dist: {
          options: {
            //data: ['<%= translationsDir %>/en/**/*.json']
          },
          files: {
              './build/': ['src/*.hbs']
          }
      }
    },
    'watch': {
      handlebars: {
        files: ['src/**/*.hbs'],
        tasks: ['assemble'],
        options: {
          livereload: true
        }
      }
    }    
  }); 

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Build 
  grunt.registerTask('build', ['assemble']);
  // Only update the live site with the already built version
  grunt.registerTask('update', ['gh-pages']);
  // Build & update
  grunt.registerTask('deploy', ['assemble', 'gh-pages']);
  // don't forget thw watch task is available when developing so the build
  // automatically executes when the partials are updated
};