<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true"); 
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Max-Age: 86400'); 

// Connecting, selecting database
$link = mysql_connect('localhost', 'direwolf_se', 'gtrbbdET')
    or die('Could not connect: ' . mysql_error());
echo 'Connected successfully<br/>';

mysql_select_db('direwolf_se') or die('Could not select database<br/>');
echo "Selected db successfully<br/>";

// Performing SQL query
$query = "REPLACE INTO 
		`CharacterSheets` SET
			`keyword` = '" .  mysql_real_escape_string($_POST['keyword']) . "',
			`state` = '" . mysql_real_escape_string($_POST['state']) . "'";

echo $query . '<br/>';
$result = mysql_query($query) or die('Query failed: ' . mysql_error());
echo "Successfully reported\n";

// Closing connection
mysql_close($link);
?>