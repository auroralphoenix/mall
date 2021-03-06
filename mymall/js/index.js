// JavaScript Document
//乐购商城首页
//2021/10/26 by 罗艳
//当前页面加载完成、
$(function(){
				$('#banner').tyslide({
				boxh:465,//盒子的高度
				w:1000,//盒子的宽度
				h:400,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:20,//控制按钮高度
				radius:15,//控制按钮圆角度数
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
				isShowNum:true //是否显示数字
			});
})
//图书电子书轮播图
$(function(){
				$('#ebooks-banner').tyslide({
				boxh:223,//盒子的高度
				w:332,//盒子的宽度
				h:223,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:2,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
			});
})
/*电子书tab切换*/
var $lis = $('.ebooks .ebooks-nav > li');
$lis.mouseover(function(){
	$(this).addClass('active').siblings().removeClass('active');
	var index=$(this).index();
	var $ebooksList = $('ebooks-list');
	$ebooksList.eq(index).show().siblings('.ebooks-list').hide();
})
//新书手风琴
$('.ebooks .right-box ul > li').mouseenter(function(){
	$(this).siblings().find('.desc').hide();
	$(this).siblings().find('.ebooks-title').show();
	$(this).find('.ebooks-title').hide();
	$(this).find('.desc').show();
})
//图书电子书轮播图2
$(function(){
				$('#clothes-banner').tyslide({
				boxh:300,//盒子的高度
				w:400,//盒子的宽度
				h:400,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:2,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
			});
})
//电子书轮播图3
$(function(){
				$('#sports-banner').tyslide({
				boxh:300,//盒子的高度
				w:400,//盒子的宽度
				h:400,//图片的高度y
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:2,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
			});
})
//电子书轮播图4
$(function(){
				$('#children-banner').tyslide({
				boxh:300,//盒子的高度
				w:400,//盒子的宽度
				h:400,//图片的高度y
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:2,//控制按钮高度
				controlsColor:"#d7d7d7",//普通控制按钮的颜色
				controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
			});
})
//推广商品的切换
$('.promotion .promotion-title ul li').mouseenter(function(){
	//导航栏激活的切换
	$(this).addClass('active').siblings().removeClass('active')
	
	//内容切换
	//获取对应的索引
    var index = $(this).index();
	//移动
	$('.promotion .promotion-content .inner-box').animate({
		'left': -index*1190
	},1000)
})
//返回顶部功能
$('.backToTop').click(function(){
	$('html,body').animate({
		scrollTop:0
	},300)
})
//二维码滑出效果
$('.qr-code .ticket').hover(function(){
	//滑出
	$('.qr-code div').stop(true) .animate({
		left:'-100px'
	})
},function(){
	//收回
	$('.qr-code div').stop(true) .animate({
		left:'0'
	})
})
//顶部搜索框交互
$(document).scroll(function(){
	//获取到顶部的距离
	var topDistance = $('html,body').scrollTop();
	//判断
	if (topDistance > 500){
		//如果滚动距离高大于500，滑下来
		$('.top-search-box').slideDown(300)
	}else{
		//否则收回去
		$('.top-search-box').slideUp(300)
	}
})
//楼梯效果
$('.floor li').click(function(){
	//获取索引
	var index =$(this).index();
	//选中每一个模块到顶部的偏移
	var topOffset =$('.floorbox').eq(index).offset().top;
	//让滚动条滚到这个位置
	$('html,body').animate({
		scrollTop:topOffset-50
	})
})