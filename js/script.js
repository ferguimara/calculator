/*----- app's state (variables) -----*/
let firstNumber = '';
let operator = '';
let secondNumber = '';
let total = [];

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
    total = [];
};

function handleOperation(evt){
    console.log(evt.target.classList);
    if (evt.target.classList.contains('calcButton') && operator === '' && firstNumber === ''){
        secondNumber += evt.target.textContent;
        total.push(secondNumber);
        $displayEl.val(total.join(""));
    }else if(evt.target.classList.contains('operator') && firstNumber === ''){
        operator = evt.target.textContent;
        total.push(operator);
        $displayEl.val(total.join(""));
    }else if(evt.target.classList.contains('calcButton')){
        firstNumber += evt.target.textContent;
        total.push(firstNumber);
        $displayEl.val(total.join(""));
        operator ='';
        firstNumber ='';
    }
}

function calculate (){
    if (secondNumber === '') {
        return;
    }else{
        total = eval(total.join(""));
        console.log(total)
        $displayEl.val(total);
    }
}
