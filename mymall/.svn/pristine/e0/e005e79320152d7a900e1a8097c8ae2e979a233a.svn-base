///注册功能
$(function(){
	//调用验证插件
	$('#registerForm').validate({
		//验证规则
		rules: {
			//用户名的验证
		username: {
				required:true,  //非空
				rangelength:[3,6]//长度
		},
	   password: {
			required:true,//非空
			isPassword: true
		},
		//确认密码
		checkPassword: {
			required: true,
	        equalTo:"#password"//验证密码一致
		},
	//电话
			tel: {
			required: true,
		    isTel: true
			}
	},
		//提示信息
		messages: {
		//用户名提示信息
		username: {
		required: '用户名不能为空！',//非空提示
		rangelength: '长度是3~6位'
		},
			//密码的提示信息
			password: {
				required: '密码不能为空',//非空
				isPassword: '亲请输入5-10以字母开头，可带数字、“-”、“.”的字符串!'
			},
		//确认密码提示信息
			checkPassword:{
			   required:'密码不能为空', //非空提示
			    equalTo:'两密码不一致'
		  },
			///电话号码提示信息
			tel:{
			required:'电话号码不能为空',
		    isTel: '电话格式不正确，请输入正确的格式'
		}
		}
	})
	//密码的自定义验证
jQuery.validator.addMethod("isPassword",function(value,element){
		var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
		return this.optional(element)||(pwdReg.test(value));
	});
//手机号码自定义验证
jQuery.validator.addMethod("isTel",function(value,element){
	var telReg = /^[1]+[3,8,5,7]+\d{9}$/;
	return this.optional(element) || (telReg.test(value));
});
})