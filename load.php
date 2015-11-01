<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true"); 
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Max-Age: 86400'); 

header('Content-Type: application/json');

// Connecting, selecting database
$link = mysql_connect('localhost', 'direwolf_se', 'gtrbbdET')
    or die('Could not connect: ' . mysql_error());

mysql_select_db('direwolf_se') or die('Could not select database<br/>');

$postData = json_decode(file_get_contents("php://input"));
$keyword = mysql_real_escape_string($postData->keyword);

// Performing SQL query
$query = "SELECT `state` FROM `CharacterSheets` WHERE `keyword`='" . $keyword . "'";

$result = mysql_query($query) or die('Query failed: ' . mysql_error());

$row = mysql_fetch_assoc($result);

if($row) {
	echo $row["state"];
} else {
	echo '{"error": "No such keyword"}';
}

// Closing connection
mysql_close($link);


?>