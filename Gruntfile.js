module.exports = function(grunt) {

   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'gh-pages': {
      options: {
        base: '/'
      },
      src: ['**']
    }
  }); 

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', ['gh-pages']);
};