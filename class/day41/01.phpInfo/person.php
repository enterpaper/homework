<?php 
	header('content-type:text/html;charset=utf-8');

	//模拟用户数据
	$personArr = array(
			'jack' => array('name' => 'jack', 'age' => 18, 'skill' => '帅'),
			'rose' => array('name' => 'rose', 'age' => 16, 'skill' => '美'),
			'iceMountain' => array('name' => 'iceMountain', 'age' => 10000, 'skill' => 'hitBoat')
		);

	//通过post获取提交的数据key为name
	$key = $_POST['name'];

	//从数组中获取对应的用户数据
	print_r($personArr[$key]);

	//将获取到数据保存到变量中方便使用
	$onePerson = $personArr[$key];

	//拼接成对应的HTML内容，返回个用户
	echo '<h1>'.$onePerson['name'].'欢迎你</h1>';
	echo '<h2>真不敢相信，你这么年轻，才'.$onePerson['age'].'岁</h2>';
	echo '<h2>你居然熟练掌握了'.$onePerson['skill'].'技能</h2>';
 ?>