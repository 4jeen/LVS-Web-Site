module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
	main: {
	    expand: true,
	    cwd: 'src',
	    src: '*',
	    dest: 'dist/',
	},
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'dist/.min.js'
      }
    }
    
    
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
//  grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['copy']);
};
