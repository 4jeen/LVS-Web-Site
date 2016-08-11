module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'src/HTML/assets/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/HTML/assets/images/'
        }]
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      basic_css: {
        files: [{
          expand: true,
          cwd: 'src/HTML/assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/HTML/assets/css',
          ext: '.css'
        }]
      },
      color_scheme: {
        files: [{
          expand: true,
          cwd: 'src/HTML/assets/css/color_scheme',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/HTML/assets/css/color_scheme',
          ext: '.css'
        }]
      }
    },


    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options        
          removeComments: true,
          ignoreCustomComments: [ /^#include/ ],
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/HTML/index.shtml.ru.utf8': 'src/HTML/index.shtml.ru.utf8',     // 'destination': 'source'
          'dist/HTML/page-contact-3.shtml.ru.utf8': 'src/HTML/page-contact-3.shtml.ru.utf8',
          'dist/HTML/footer.inc': 'src/HTML/footer.inc',     // 'destination': 'source'
          'dist/HTML/shopcart.inc': 'src/HTML/shopcart.inc',
          'dist/HTML/slidepanel.inc': 'src/HTML/slidepanel.inc',
          'dist/HTML/slidetop.inc': 'src/HTML/slidetop.inc'
        }
      }
    },
    copy: {
      main: {
        files: [
            {expand: true,cwd: 'src/HTML/assets/fonts',src: '*',dest: 'dist/HTML/assets/fonts'},
            {expand: true,cwd: 'src/HTML',src: 'favicon.ico',dest: 'dist/HTML'}
        ]   
      }
	   	   
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Default task(s).
//  grunt.registerTask('default', ['uglify']);
    //grunt.registerTask('default', ['copy']);
    grunt.registerTask('default', ['imagemin','htmlmin','cssmin','copy']);
};
