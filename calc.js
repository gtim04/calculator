//variables
var displayValue = '';
var firstNumber = '';
var secondNumber = '';
var operand = '';

//number buttons and decimal
$(".numbers").on("click", function(){
	displayValue = displayValue.concat($(this).text());
	$("#display").val(displayValue);
});

//functional buttons
$("#cancel").on("click", function(){
	displayValue = '';
	operand = '';
	firstNumber = '';
	$("#dot").prop("disabled",false);
	$("#display").val(displayValue);
});

$(".operands").on("click", function(){
	firstNumber = displayValue;
	displayValue = '';
	operand = $(this).text();
	$("#dot").prop("disabled",false);
	$("#display").val(operand);
});

$("#dot").on("click", function(){
	displayValue = displayValue.concat($(this).text());
	$(this).prop("disabled",true);
	$("#display").val(displayValue);
});

//equals-ajax&displayresults
$("#equals").on("click", function(){
	secondNumber = displayValue;
	displayValue = '';
	$("#dot").prop("disabled",false);
	$.post("process.php",
	{
		num1: firstNumber,
		num2: secondNumber,
		opera: operand
	},
	function(data){
		$("#display").val(data);
		displayValue = data;
		firstNumber = '';
		secondNumber = '';
	});

});