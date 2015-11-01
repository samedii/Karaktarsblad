<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true"); 
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Max-Age: 86400'); 

// Connecting, selecting database
$link = mysql_connect('localhost', 'direwolf_se', 'gtrbbdET')
    or die('{"error": "Could not connect to database"}');


mysql_select_db('direwolf_se') or die('{"error": "Could not select database"}');

$postData = json_decode(file_get_contents("php://input"));
$keyword = mysql_real_escape_string($postData->keyword);
$state = mysql_real_escape_string($postData->state);

// Performing SQL query
$query = "REPLACE INTO 
		`CharacterSheets` SET
			`keyword` = '" .  $keyword . "',
			`state` = '" . $state . "'";

$result = mysql_query($query) or die('{"error": "Query failed"}');

echo '{}';

// Closing connection
mysql_close($link);
?>