module.exports = function (grunt) {
	var gzip = require("gzip-js");

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
		"<%= grunt.template.today('yyyy-mm-dd') %>\n" +
		"<%= pkg.homepage ? "* " + pkg.homepage + '\\n' : '' %>" +
		"* Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>;" +
		" Licensed <%= _.pluck(pkg.licenses, 'type').join(', ') %> */\n",
		"compare_size": {
			files: ["dist/jsharp.js", "dist/jsharp.min.js"],
			options: {
				compress: {
					gz: function (contents) {
						return gzip.zip(contents, {}).length;
					}
				},
				cache: "build/.sizecache.json"
			}
		},
		build: {
			all: {
				dest: "dist/jsharp.js"
			}
		},
		npmcopy: {
			all: {
				options: {
					destPrefix: "external"
				},
				files: {
					"requirejs/require.js": "requirejs/require.js",
				}
			}
		},
		jsonlint: {
			pkg: {
				src: ["package.json"]
			},

			bower: {
				src: ["bower.json"]
			}
		},
		jshint: {
			all: {
				src: [
					"src/**/*.js", "Gruntfile.js", "test/**/*.js", "build/**/*.js"
				],
				options: {
					jshintrc: true
				}
			},
			dist: {
				src: "dist/jsharp.js"
			}
		},
		jscs: {
			src: "src/**/*.js",
			gruntfile: "Gruntfile.js",

			// Right now, check only test helpers
			test: ["test/data/testrunner.js"],
			release: ["build/*.js", "!build/release-notes.js"],
			tasks: "build/tasks/*.js"
		},
		testswarm: {
			tests: []
		},
		watch: {
			files: ["<%= jshint.all.src %>"],
			tasks: "dev"
		},
		uglify: {
			all: {
				files: {
					"dist/jsharp.min.js": ["dist/jsharp.js"]
				},
				options: {
					preserveComments: false,
					beautify: {
						"ascii_only": true
					},
					banner: "<%= banner %>",
				}
			}
		}
	});

	require("load-grunt-tasks")(grunt);

	// Integrate jQuery specific tasks
	grunt.loadTasks("build/tasks");

	grunt.registerTask("lint", ["jshint", "jscs"]);

	// Short list as a high frequency watch task
	grunt.registerTask("dev", ["build:*:*", "lint"]);

	// Default grunt
	grunt.registerTask("default", ["jsonlint", "dev", "uglify", "compare_size"]);

};