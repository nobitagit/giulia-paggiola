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
        'CNAME',
        'css/**/*',
        'i/**/*',
        'js/**/*'
        ]
    },
    'assemble': {
      options: {
        assets: 'assets',
        layoutdir: 'docs/layouts'
        partials: ['docs/includes/**/*.hbs'],
        data: ['docs/data/**/*.{json,yml}']
      },
      site: {
        options: {
          layout: 'default.hbs'
        },
        src: ['templates/site/*.hbs'],
        dest: './'
      }
  }); 

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('deploy', ['gh-pages']);
};