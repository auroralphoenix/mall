// JavaScript Document
//购物车交互
$(function(){
	//定义三个变量
	var $theadInput = $('thead input[type=checkbox]');//头部选择框
	var $tbodyInputs = $('tbody input[type=checkbox]');//中间选择框
	var $totalPriceInput = $('.totalPrice input[type=checkbox]');//计算总价的全选框
//全选
$theadInput.change(function(){
	//获取选中状态
	var checkState=$(this).prop('checked');
	//表格中的选择框状态保持一致 且结算状态保持一致
	$tbodyInputs.prop('checked',checkState);
	$totalPriceInput.prop('checked',checkState);
	allTotal();
});
///计算总价的全选	
$totalPriceInput.change(function(){
	var checkState = $(this).prop('checked');
	$theadInput.prop('checked',checkState);
	$tbodyInputs.prop('checked',checkState);
	allTotal();
})
///表格中的选择框，反过来影响；两个全选框
$tbodyInputs.change(function(){
     //顶一个标杆
	var flag = true;
	
   $tbodyInputs.each(function(index,input){
	   var checkState = $(this).prop('checked');
	   if(!checkState){
		   flag = false;
	   }
   })
	//把状态用来改变全选框
   $theadInput.prop('checked',flag);
   $totalPriceInput.prop('checked',flag);
	allTotal();
})
///加减功能
///加
$('.add').click(function(){
	var count = parseInt($(this).next().val());
	count++;
	$(this).next().val(count);
	subTotal($(this),count);///小计
	allTotal();
})
//减
$('.reduce').click(function(){
	var count = parseInt($(this).prev().val());
	count--;
	count = count < 1 ? 1:count;
	$(this).prev().val(count);
	subTotal($(this),count);///小计
	allTotal();
})
////小计加或者减的时候调用
 function subTotal(dom,count){
	 var singlePrice = parseFloat(dom.closest('tr').find('.price').text());//找到单价
	 var subTotalPrice = singlePrice * count;//小计=单价*数量
    dom.closest('tr').find('.subprice').text(subTotalPrice.toFixed(2));	 
 }
///总计
function allTotal(){
	var allPrice = 0;
	var selectedCount = 0;
	
	$('tbody input[type=checkbox]').each(function(){
		var checkState = $(this).prop('checked');
		if(checkState){
			allPrice += parseFloat($(this).closest('tr').find('.subprice').text());
			selectedCount++;
		}
		//渲染
		$('.total').text(allPrice.toFixed(2));
		$('.count').text(selectedCount);
})
}
///删除
$('.del').click(function(){
	$(this).closest('tr').remove()
	getGoodsCount();
	allTotal();
	
})
//删除选中
$('.deleteChecked').click(function(){
	$('tbody input[type=checkbox]').each(function(){
		var checkState = $(this).prop('checked');
		if (checkState){
			$(this).closest('tr').remove();
		}
	})
	getGoodsCount();
	allTotal();
})
///封装一个获取全部商品的函数
function getGoodsCount(){
		var goodsCount = $('table tbody tr').length;
		$('.goodsCount').text(goodsCount);
	}
	getGoodsCount();
	
	})