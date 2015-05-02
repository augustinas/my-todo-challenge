module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'spec/**/*.js', 'public/**/*.js']
    },
    watch: {
      files: ['app/**/*.js', 'public/**/*.js', 'spec/**/*.js'],
      tasks: ['jshint']
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('test', ['jshint', 'karma']);
  grunt.registerTask('default', ['jshint']);

};