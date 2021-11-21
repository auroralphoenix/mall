/*返回顶部功能*/
$(function(){
	//把顶部暴露出去
   window.gotoTop = function(options){
	  //准备结构
	var $gotoTopHtml = $('<div class="backtoTop"><img src="../../img/gototop_05.jpg" alt=""></div>');
		//写样式定位
		$gotoTopHtml.css({
			width:'30px',
			height:'50px',
			backgroundColor:'red',
			position:'fixed',
			bottom: options.bottom,
			left:'610px',
			marginLeft:'50%',
			display:'none',
		});
		/*返回顶部*/
    $(document).scroll(function(){
		//获取距离顶部的位置
	var topDistance = $('html,body').scrollTop();
		//判断
		if(topDistance > 500)
		{
		   $('.backtoTop').fadeIn();
		   }else{
			   $('.backtoTop').fadeOut();
				}
})
//返回顶部功能
$('body').on('click','.backtoTop',function(){
	$('html,body').animate({
		scrollTop:0
	},300)
	})
//追加到页面的尾部
		$('body').append($gotoTopHtml)
}
})