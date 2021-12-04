// JavaScript Document
//购物车交互
$(function(){
	//定义三个变量
	var $theadInput = $('table thead input[type=checkbox]');//头部选择框
	var $bodyInput = $('table tbody input[type=checkbox]');//中间选择框
	var $allPriceInput = $('.totalPrice input[type=checkbox]');//结算选择款
	
$theadInput.change(function(){
	//获取选中状态
	var state=$(this).prop('checked');
	//表格中的选择框状态保持一致 且结算状态保持一致
	$bodyInput.prop('checked',state);
	$allPriceInput.prop('checked',state);
	//结算中的选择框状态保持一致
    })
//2.结算中的选择框也需要有相同的选择功能
$allPriceInput.change(function(){
	//获取选中状态
	var state = $(this).prop('checked');
	//表格中的选择框状态保持一致
	$bodyInput.prop('checked',state);
	$theadInput.prop('checked',state);
    })
	//表单中的选择事件反过来影响全选
	$bodyInput.change(function(){
     //顶一个标杆
	var flag = true;
	//总价
	var totalPrice = 0;
	$bodyInput.each(function(i,input){
		if (!$(input).prop('checked')){
			flag = false;
		}else{
			totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
		}
	})
	//把状态用来改变全选框
   $theadInput.prop('checked',flag)
   $allPriceInput.prop('checked',flag)
	//渲染到总价对应的位置
	$('.total').text(totalPrice.toFixed(2))
})
//数量的加减事件
//加
$('.add').on('click',function(){
	//下一个input节点
	var $nextInput = $(this).next();
	//获取输入框的值
	var oldVal = parseInt($nextInput.val());
	//自增
	oldVal++;
	//重新赋值给这个输入框
	$nextInput.val(oldVal);
	//小计
	subTotalPrice(oldVal,$(this));
})
//减少
$('.reduce').on('click',function(){
	//上一个input节点
	var $prevInput = $(this).prev();
	//获取输入框的值
	var oldVal = parseInt($prevInput.val());
	//自增
	oldVal--;
	oldVal = oldVal < 1 ? 1 : oldVal;
	//重新赋值给这个输入框
	$prevInput.val(oldVal);
	//小计
   subTotalPrice(oldVal,$(this));
})
//抽取一个小计的函数
  function subTotalPrice(val,dom){
	var subtotal = val * parseFloat( dom.closest('tr').find('.price').text());
	//把小计的结果放入dom对应的位置
    dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
}
//删除
$('.del').click(function(){
	//删除整行
	$(this).closest('tr').remove();
})
//计算总计

})