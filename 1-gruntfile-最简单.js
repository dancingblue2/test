//版权 北京智能社©, 保留所有权利

//描述任务
module.exports=function (grunt){
	//1.加载插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		//任务名
		uglify: {
			//子任务名
			main: {
				src: 'js/jsonp.js',
				dest: 'jsonp2.js'
			}
		},
		cssmin: {
			main: {}
		}
	});
	
	window.onload=function ()
	{
		alert('ABC');
	};

	//3.注册默认任务
	grunt.registerTask('default', ['uglify']);
};





