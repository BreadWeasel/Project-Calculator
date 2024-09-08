const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const calculatorOutput = document.querySelector(".text-output");


let numberA = 0;
let numberB = 0;
let selectedOperator = null;
let operatorSelected = false;

function add(a, b)
{
    return Number(a) + Number(b);
}


function subtract(a, b)
{
    return a - b;
}


function multiply(a, b)
{
    return a * b;
}


function divide(a, b)
{
    return a/b;
}


function operate(operator, a, b)
{
    // Perform operation
    switch(operator)
    {
        case "+":
            numberA = add(a, b);
            numberB = 0;
            calculatorOutput.textContent = numberA;
            return add(a, b);
        case "-":
            numberA = subtract(a, b);
            numberB = 0;
            calculatorOutput.textContent = numberA;
            return subtract(a, b);
        case "*":
            numberA = multiply(a, b);
            numberB = 0;
            calculatorOutput.textContent = numberA;
            return multiply(a, b);
        case "/":
            numberA = divide(a, b);
            numberB = 0;
            calculatorOutput.textContent = numberA;
            return divide(a, b);
        default:
            console.log("Operation not returned");
            return null;
    }    
}


function getNumber(numberString)
{
    console.log("Button pressed is: " + numberString)
    if (!operatorSelected)
    {
        if (numberA != 0)
        {
            numberA += numberString;
        }
        else
        {
            numberA = numberString
        }
        console.log(numberA)
        calculatorOutput.textContent = numberA;
        return numberString;
    }
    else
    {
        if (numberB != 0)
        {
            numberB += numberString;
        }
        else
        {
            numberB = numberString
        }
        console.log(numberB)
        calculatorOutput.textContent = numberB;
        return numberString;
    }
}


function getOperator(operator)
{
    if (operator != null && operator != "")
    {
        console.log("operator gotten was " + operator);
        selectedOperator = operator;
        operatorSelected = true;
    }
    
    return operator;
}


function clearCalculator()
{
    numberA = 0;
    numberB = 0;
    calculatorOutput.textContent = "0";
    operatorSelected = false;
    console.log("Calculator Cleared")
}


function setUpNumbers()
{
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener("click", () =>
        {
            getNumber(numberButton.innerHTML);
        });
    });
}


function setUpClear()
{
    const clearButton = document.querySelector(".clear-button");
    clearButton.addEventListener("click", clearCalculator);
}


function setUpOperations()
{
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", () =>
        {
            if (selectedOperator != null)
            {
                operate(selectedOperator, numberA, numberB);
            }
            getOperator(operatorButton.textContent);
        });
    });
}


function setUpEval()
{
    const evalButton = document.querySelector(".evaluate-button");
    evalButton.addEventListener("click", ()=>
    {
        operate(selectedOperator, numberA, numberB)
    });
}


setUpNumbers();
setUpClear();
setUpOperations();
setUpEval();

// TO-DO:
// Set up +/- button, % button, divide by 0 error, and decimal clamping
