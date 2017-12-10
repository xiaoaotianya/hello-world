<?php

header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect('localhost','root','12345678') or die('数据库连接错误'.mysql_error());
mysql_select_db('register') or die ('选择数据库错误'.mysql_error());
mysql_query('SET NAMES UTF8');


if(isset($_POST['names'])){
	$names=$_POST['names'];
	$pass=md5($_POST['pass']);
	
	$logquary="select * from registertest where username='$names' and password='$pass'";
	$logresult=mysql_query($logquary);
	
}

if(mysql_fetch_array($logresult)){
	echo true;
}else{
	echo false;
}
?>