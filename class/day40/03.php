<?php 
	header('content-type:text/html;charset=utf-8');
	//php中的数组
	/*
		js中的数组
		var arr = [1, 2, 3, 4];
	*/
	//普通数组，数组中可以放数字，字符串，布尔等等，不限制类型的
	$foodArray = array('西兰花炒蛋', '番茄炒蛋', '大葱炒蛋', '韭菜炒蛋');
	echo $foodArray[2];

	echo '<br>';

	//关系型数组，类似于json的格式，但不是用“:”，而是使用“=>”分隔键值对
	//获取的方式通过['key']即可获取
	$person = array('name' => '小李子', 'age' => '35', 'skill' => '发福');
	echo $person['skill'];

?>