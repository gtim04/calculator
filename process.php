<?php
	require_once('arithmetic.php');
	//getting posted data from ajax & assigning variables
	$num1 = $_POST['num1'];
	$num2 = $_POST['num2'];
	$operand = $_POST['opera'];
	//declaring object
	$result = new arithmetic($num1,$num2,$operand);
	//output result
	echo $result->calculate();
?>