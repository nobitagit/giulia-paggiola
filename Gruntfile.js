module.exports = function(grunt) {

   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'gh-pages': {
      options: {
        base: '',
        message: 'Automatic deploy task'
      },
      src: [
        '*.html',
        'css/**/*',
        'i/**/*',
        'js/**/*'
        ]
    }
  }); 

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', ['gh-pages']);
};