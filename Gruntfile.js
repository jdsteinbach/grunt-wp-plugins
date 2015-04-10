'use strict';

module.exports = function(grunt){
	grunt.initConfig({
		shell: {

		},
		curl: {

		},
		zip: {

		},
		copy: {

		},
		clean :{

		}
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-curl');
	grunt.loadNpmTasks('grunt-zip');
	grunt.loadNpmTasks('grunt-copy');
	grunt.loadNpmTasks('grunt-clean');

	grunt.registerTask('default', [
		'shell',
		'curl',
		'zip',
		'copy',
		'clean'
	]);
}