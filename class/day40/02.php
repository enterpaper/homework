<?php 
	header('content-type:text/html;charset=utf-8');

	//if...else...
	$male = 'girl';

	if($male == 'man') {
		echo '男人';
	} else {
		echo '女人';
	}

	echo '<br>';

	$day = '星期五';
	//switch case
	switch($day) {
		case '星期一':
			echo '感觉自己被床封印了';
			break;
		case '星期五':
			echo '哇塞，明天就是休息的日子了 oh-yeah';
			break;
		default:
			echo '感觉自己被掏空';
			break;
	}

	echo '<br>';
	//for循环
	for($i=0;$i<10;$i++) {
		echo '感觉自己萌萌哒<br>';
	}

	for($i=0;$i<10;$i++) {
		echo '感觉自己萌萌哒^_^'+$i;
		echo '<br>';
	}

	//php中拼接字符串的方式是.切记切记。
	for($i=0;$i<10;$i++) {
		echo '感觉自己萌萌哒^_^'.$i;
		echo '<br>';
	}

	//while循环
	$num = 0;
	while($num <= 10) {
		echo '今天晚饭吃什么呢？'.$num;
		echo '<br>';
		$num++;
	}

	//do...while循环
	$num = 0;
	do {
		echo '今天晚饭吃什么呢？'.$num;
		echo '<br>';
		if($num == 5) {
			break;
		}
		$num++;
	}while($num<=10);

	// //三元表达式
	// $food = '西兰花炒蛋';
	// $food == '西兰花炒蛋' ? echo '好好吃' : echo '超级难吃';

	//php如果报错了，错误信息的最后一般会有错误的行号
	//三元表达式
	$food = '西兰花炒蛋';
	$evaluate = ($food == '西兰花炒蛋' ? '好好吃' : '超级难吃');
	echo $evaluate;
?>