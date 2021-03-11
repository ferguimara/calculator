/*----- app's state (variables) -----*/
let firstNumber = '';
let operator = '';
let secondNumber = '';
let total = '';

/*----- cached element references -----*/
const $calcNumbersEl = $(".calcButton");
const $displayEl = $('#display');
const $clearEl = $('.clear');
const $operatorsEl = $('.operator');
const $calculatorEl = $('#calculator');
const $equalsEl = $('.equals');

/*----- event listeners -----*/
$clearEl.click(clear); //clears display
$calculatorEl.on('click', '#button', handleOperation);
$equalsEl.click(calculate);

/*----- functions -----*/
clear();

function clear(){
    $displayEl.val('0');
    firstNumber = '';
    operator = '';
    secondNumber = '';
};

function handleOperation(evt){
    //step 1: create first number
    //1.1 if evt. class === number, firstnumber += evt.target, displayEl.val(firstnumber)
    console.log(evt.target.classList);
    if (evt.target.classList.contains('calcButton') && operator === '' && secondNumber === ''){
        // console.log(firstNumber);
        firstNumber += evt.target.textContent;
        $displayEl.val(firstNumber);
    //1.2 else if evt.class === operator, operator += evt.target, displayEl.val(firstnumber,operator)
    }else if(evt.target.classList.contains('operator') && secondNumber === ''){
        // console.log(operator);
        operator = evt.target.textContent;
        $displayEl.val(firstNumber + operator);
    }else if(evt.target.classList.contains('calcButton')){
        secondNumber += evt.target.textContent;
        $displayEl.val(firstNumber + operator + secondNumber);
    }
}

function calculate (){
    //if firstNumber \\ operator\\ secondnumber === null return
    if (firstNumber === '' || operator === '' || secondNumber === '') {
        return;
    }else{
        // firstNumber = parseInt(firstNumber);
        // secondNumber = parseInt(secondNumber);
        total = eval(`${firstNumber} ${operator} ${secondNumber}`);
        console.log(total)
        $displayEl.val(total);
    }
    //else if total = (number.firstNumber, operator, number secondNumber)
}
