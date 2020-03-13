<?php
	class arithmetic {
		//variables
		public $num1;
		public $num2;
		public $operator;
		//contructor
		function __construct($num1, $num2, $operator) {
		    $this->num1 = $num1;
		    $this->num2 = $num2;
		    $this->operator = $operator;
 		}
 		//calculation proper
		function calculate(){
			if ($this->operator == "+"){
				return $this->sum = $this->num1+$this->num2; //getting sum
			} else if ($this->operator == "-"){
				return $this->difference = $this->num1-$this->num2; //getting difference
			} else if ($this->operator == "X") {
				return $this->product = $this->num1*$this->num2; //getting product
			} else if ($this->operator == "/") {
				return $this->quotient = $this->num1/$this->num2; //getting quotient
			}
		}
	}
?>