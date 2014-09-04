module.exports = function(grunt) {

	// Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			dist: {
				files: {
					src: ['ideal-image-slider.js']
				}
			}
		},

		uglify: {
			player: {
				files: {
					'ideal-image-slider.min.js': 'ideal-image-slider.js'
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			dist: {
				files: ['ideal-image-slider.js'],
				tasks: ['jshint','uglify'],
				options: {
					spawn: false,
				}
			}
		}

	});

	// Plugins
	require('load-grunt-tasks')(grunt);
	grunt.registerTask('forceOn', 'turns the --force option ON', function(){
		if ( !grunt.option( 'force' ) ) {
			grunt.config.set('forceStatus', true);
			grunt.option( 'force', true );
		}
	});
	grunt.registerTask('forceOff', 'turns the --force option OFF', function(){
		if ( grunt.config.get('forceStatus') ) {
			grunt.config.set('forceStatus', false);
			grunt.option( 'force', false );
		}
	});

	// Tasks
	grunt.registerTask('default', [
		'jshint',
		'uglify',
		'watch'
	]);

};
