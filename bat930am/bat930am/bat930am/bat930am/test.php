<?php
$qs=$_REQUEST['un'];
mysql_connect("localhost","root","");
mysql_select_db("test");
$data=mysql_query("select * from tbl_user where uname='$qs'");
print mysql_num_rows($data);
?>