<?php
header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect('localhost','root','12345678') or die('数据库连接错误'.mysql_error());
mysql_select_db('register') or die ('选择数据库错误'.mysql_error());
mysql_query('SET NAMES UTF8');


if(isset($_POST['usernames']) || isset($_POST['submit'])){
		$usernames=@$_POST['usernames'];
	}else{
		exit('非法操作');
	}
	


	$quary="select * from registertest where username='$usernames'";
	$result=mysql_query($quary);



if(mysql_fetch_array($result)){
	echo true;
}else{
	echo false;
}


if(isset($_POST['submit']) && $_POST['submit']=="用户注册"){
		$userss=$_POST['regusername'];//username：表单的名称
		$passss=md5($_POST['regpassword']);
		$mobile=$_POST['mobile'];
		$query="insert registertest values(null,'$userss','$passss','$mobile')";
		mysql_query($query);
		header('location:../login.html');
	}












mysql_close($conn);

?>