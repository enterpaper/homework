<?php 
	header('content-type:text/html;charset=utf-8');
	//php中""和''的区别
	echo "双引号中的字符串<br>";
	echo '单引号中的字符串<br>';

	//php中，单双引号的区别
	//若字符串的内容跟变量名一致时
	//双引号会将变量的值放进去
	//单引号就是字符串
	//单双引号可以混用，避免拆分一对
	$person = '葫芦娃';
	echo "$person";
	echo '<br>';
	echo '$person';
	echo '<br>';
	echo "<input type='button' value='你好吗'>";
	echo '<input type="button" value="你好吗">';
?>