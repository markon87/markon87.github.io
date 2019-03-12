module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      js: {
        src: ['plugins/jquery/jquery-3.1.0.js',
              'plugins/isotope/isotope.min.js',
              'plugins/fancybox/jquery.fancybox.js',
              'plugins/wow/wow.min.js',
              'plugins/bootstrap/js/bootstrap.min.js',
              'plugins/progressBar/progress-bar.min.js',
              'plugins/jquery-validate/jquery.validate.min.js',
              'plugins/img-loaded/img-loaded.min.js',
              'js/form-validate.js',
              'js/main.js'],
        dest: 'js/build.js'
      },
      css: {
        src: 'css/*.css',
        dest: 'css/build.css'
      }
    },
    cssmin: {
      css:{
        src: 'css/build.css',
        dest: 'css/build.min.css'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true,
        module: false
      }
    },
    uglify: {
        options: {
            mangle: false
        },            
        my_target: {
          files: {
            'js/build.min.js': ['js/build.js']
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-minified');
  grunt.loadNpmTasks('grunt-css');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};