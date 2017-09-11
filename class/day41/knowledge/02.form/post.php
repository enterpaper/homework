<?php 
	header('content-type:text/html;charset=utf-8');
	//获取post的数据
	//php帮我们准备好的超全局对象
	//关系型数组，取值用的是key
	//跟提交过来的key是相对的，key是表单元素的name属性
	echo $_POST['userName'];
?>