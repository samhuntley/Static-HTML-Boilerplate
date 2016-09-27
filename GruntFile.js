module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		project: {
			"css": "assets/css/",
			"js": "assets/js/"
		},
		sass: {
			dev: {
				options: {
				  style: 'expanded',
				  compass: true
				},
				files: [{
					expand: true,
					cwd: 'html/<%= project.css %>sass/',
					src: ['*.scss'],
					dest: 'html/<%= project.css %>',
					ext: '.css'
				}]
			},
			build: {
				options: {
				  style: 'compressed',
				  compass: true
				},
				files: [{
					expand: true,
					cwd: 'html/<%= project.css %>sass/',
					src: ['*.scss'],
					dest: 'html/<%= project.css %>',
					ext: '.css'
				}]
			}
		},
		watch: {
			css: {
				files: '<%= project.css %>sass/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	
	});
	
	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Register Tasks
	grunt.registerTask('default',['watch']);
}