'use strict';

module.exports = function(grunt){
	grunt.initConfig({
		'curl-dir': {
			plugins: {
				src: ['https://downloads.wordpress.org/plugin/{types,wordpress-seo,google-analytics-for-wordpress,captain-typekit,ewww-image-optimizer,kint-debugger,what-the-file,zero-spam}.zip'],
				dest: ''
			}
		},
		curl: {
			acf: {
				src: 'http://connect.advancedcustomfields.com/index.php?p=pro&a=download&k=b3JkZXJfaWQ9NDAwODd8dHlwZT1kZXZlbG9wZXJ8ZGF0ZT0yMDE0LTA5LTE4IDIwOjEyOjE2',
				dest: 'advanced-custom-fields-pro.zip'
			},
			formidable: {
				src: 'http://fp.strategy11.com/releases/formidable-1.07.11.zip?AWSAccessKeyId=AKIAJWLVRQI72AFRD5HQ&Expires=1428760253&Signature=AkNOJ8fAYYpl34kPd7S5cTgpJjM%3D',
				dest: 'formidable.zip'
			}
		},
		unzip: {
			all: {
				src: '*.zip',
				dest: ''
			}
		},
		clean :{
			zips: {
				src: '*.zip'
			},
			cruft: {
				src: ['.git','.gitignore','hello.php','akismet']
			}
		}
	});

	grunt.loadNpmTasks('grunt-curl');
	grunt.loadNpmTasks('grunt-zip');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('install', ['default']);
	grunt.registerTask('default', [
		'curl-dir:plugins',
		'curl',
		'unzip',
		'clean'
	]);
}