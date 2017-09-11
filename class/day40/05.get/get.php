<?php
	header('content-type:text/html;charset=utf-8');
	echo 'get提交的页面';
	echo '<br>';
	//通过$_GET['key']即可获取数据key是提交的时候表单元素的name属性的值
	echo 'userName: '.$_GET['userName'];
	echo '<br>';
	echo 'userSkil: '.$_GET['userSkill'];
	echo '<br>';
	//没有的会报错
	// echo $_GET['hahaha'];
	echo '<h1>'.$_GET['userName'].'欢迎您</h1>';
?>