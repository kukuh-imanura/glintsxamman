



// CALCULATION

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';



const inputNumbers = (number) => {

	// currentNumber = number;
	// currentNumber += number;

	if (currentNumber === '0') {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
}



const operators = document.querySelectorAll(".operator");

operators.forEach(
	(operator) => {
		operator.addEventListener("click", 
			(event) => {
				inputOperator(event.target.value);
			}
		)
	}
)



const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '';
}



const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", 
	() => {
		calculate();
		updateScreen(currentNumber);
	}
)



const calculate = () => {
	let result = '';
	switch(calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			break;
	}
	currentNumber = result;
	calculationOperator = '';
}



// DECIMAL CALCULATION

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", 
	(event) => {
		inputDecimal(event.target.value);
		updateScreen(currentNumber);
	}
)



inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return;
	}
	currentNumber += dot;
}



// CLEAR

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", 
	() => {
		clearAll();
		updateScreen(currentNumber);
	}
)



const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}



// UPDATE SCREEN

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
	calculatorScreen.value = number;
}



const numbers = document.querySelectorAll(".number");

// console.log(numbers);
 
// numbers.forEach(
// 	(number) => {
// 		console.log(number);
// 	}
// )

numbers.forEach(
	(number) => {
		number.addEventListener("click",
			(event) => {
				inputNumbers(event.target.value);
				updateScreen(currentNumber);
			}
		)
		const calculatorScreen = document.querySelector(".calculator-screen");
		// const updateScreen = (number) => {
		// 	calculatorScreen.value = number;
		// }
	}
)









