<?php 
	header('content-type:text/html;charset=utf-8');
	//让PHP延迟一会儿
	//让PHP代码延迟一会，传入的是秒
	// sleep(2);
	//输出结果
	print_r($_FILES);
	echo '<br>';
	//$_FILES的值
	/*
		Array ( [upFile] => Array ( [name] => c5sol.zip [type] => application/octet-stream [tmp_name] => D:\wamp64\tmp\php5B8A.tmp [error] => 0 [size] => 104697 ) )
	*/
	// //获取上传的文件信息，关系型数组
	// $fileArr = $_FILES['upFile'];

	// // 获取 上传的文件的原本名字
	// $fileName = $fileArr['name'];
	// echo $fileName.'<br>';

	// // 获取 保存在服务器的那个位置
	// $filePath = $fileArr['tmp_name'];
	// echo $filePath.'<br>';

	// //在php中使用move_uploaded_file将文件保存
	// //参数2写的是相对的路径，相对于该php文件的位置
	// //拼接成完整路径
	// move_uploaded_file($filePath,'files/'.$fileName);
 ?>