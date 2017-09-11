<?php 
	header('content-type:text/html;charset=utf-8');
	$twoArr = array(
			array('西兰花', '西葫芦', '西红柿'),
			array('牛肉', '羊肉', '鸭肉', '驴肉', '鸡肉'),
			array('白菜', '油菜', '娃娃菜'),
			array('皮皮虾', '大闸蟹', '生蚝', '龙虾')
		);
	//娃娃菜
	echo $twoArr[2][2];
	echo '<br>';

	//首先，取出索引为2的元素，这里是一个数组
	$vegetableArr = $twoArr[2];
	// echo $vegetableArr;
	echo $vegetableArr[2];

	//php中输出变量的详细内容print_r()
	//print_r()是一个php预定义的函数，传递参数的方式直接在括号中写入即可
	print_r($vegetableArr);
 ?>