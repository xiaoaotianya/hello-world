<?php

header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect('localhost','root','12345678') or die('数据库连接错误'.mysql_error());
mysql_select_db('register') or die ('选择数据库错误'.mysql_error());
mysql_query('SET NAMES UTF8');

$sql ="select * from lunbo"; //SQL语句
 
$result = mysql_query($sql,$conn);

$json = "";
$data = array();

class User 
{
public $sid;
public $imgsrc;

}
while($row = mysql_fetch_array($result,MYSQL_ASSOC));
{
$user = new User();
$user->sid= $row['sid'];
$user->imgsrc= $row['imgsrc'];

/*$user->imgsrc= $row['imgsrc'];
$user->price = $row['price'];*/
$data[]=$user;
 //array_push($arr,$row['title'],$row['price'],$row['imgsrc']);
/*echo 'title:'.$row['title'].'imgsrc:'.$row['imgsrc'].'price:'.$row['price'].",";*/

};

$json = json_encode($data);//把数据转换为JSON数据.
echo "{".'"user"'.":".$json."}";
echo $json;

 mysql_close($conn);

?>