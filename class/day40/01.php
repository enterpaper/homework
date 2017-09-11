<?php 
	//php中告诉浏览器按照哪种文本编码解析
	header('content-type:text/html;charset=utf-8');
	//单行注释
	/*
		多行注释
	*/

	//PHP中定义变量，通通使用$开头
	$num = 1;//整形
	$str = '123';//字符串
	$bool = true;//布尔
	$float = 3.141592653589793238;//小数

	//PHP中输出使用echo关键字
	echo 'hello everyone';
	echo '<br>';
	echo $float;
	echo '<br>';
	echo 'today is a nice day';
	echo '<br>';
	echo '<input type="button" value="点我试试">'; 
?>