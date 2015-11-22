module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.',
                    hostname: 'localhost',
                    keepalive: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['app/scripts/*.js'],
                options: {
                    debounceDelay: 250,
                    event: ['all'],
                    reload: true
                },
                tasks: ['connect']
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
       grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.registerTask('default', [
        'connect'
    ]);
};