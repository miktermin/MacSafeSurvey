module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          protocol: 'http',
          hostname: 'localhost',
          open: true,
          base: ['.', 'app/']
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: './**/*.js',
        options: {
          event: ['all']

        }
      },
      html: {
        files: './**/*.html',
        options: {
          event: ['all']
        }
      },
      css: {
        files: './**/*.css',
        options: {
          event: ['all']
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect:server', 'watch']);
};