const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const calculatorOutput = document.querySelector(".text-output");


let numberA = 0;
let numberB = 0;
let selectedOperator = null;
let operatorSelected = false;
let operationFinished = false;

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


function resetOperation()
{
    selectedOperator = null;
    operatorSelected = false;
    operationFinished = true;
}


function operate(operator, a, b)
{
    // Perform operation
    switch(operator)
    {
        case "+":
            numberA = add(a, b).toFixed(2);
            numberB = 0;
            calculatorOutput.textContent = numberA;
            resetOperation();
            console.log(add(a, b))
            return numberA;
        case "-":
            numberA = subtract(a, b).toFixed(2);
            numberB = 0;
            calculatorOutput.textContent = numberA;
            resetOperation();
            console.log(subtract(a, b))
            return numberA;
        case "*":
            numberA = multiply(a, b).toFixed(2);
            numberB = 0;
            calculatorOutput.textContent = numberA;
            resetOperation();
            console.log(multiply(a, b))
            return numberA;
        case "/":
            numberA = divide(a, b).toFixed(2);
            numberB = 0;
            resetOperation();
            console.log(divide(a, b))
            if (numberA == "Infinity")
            {
                calculatorOutput.textContent = "No dividing by 0";
            }
            return null;
        default:
            console.log("Operation not returned");
            resetOperation();
            return null;
    }    
}


function getNumber(numberString)
{
    //console.log("Button pressed is: " + numberString)
    if (!operatorSelected)
    {
        if (numberA != 0 && operationFinished == false)
        {
            numberA += numberString;
        }
        else if (numberA != 0 && operationFinished == true)
        {
            numberA = numberString;
            operationFinished = false;
        }
        else
        {
            numberA = numberString
        }
        console.log("number A is: " + numberA)
        calculatorOutput.textContent = numberA;
        return numberString;
    }
    else
    {
        if (numberB != 0 && operationFinished == false)
        {
            numberB += numberString;
        }
        else if (numberB != 0 && operationFinished == true)
        {
            numberB = numberString;
            operationFinished = false;
        }
        else
        {
            numberB = numberString
        }
        console.log("number B is: " + numberB)
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
    selectedOperator = null;
    operatorSelected = false;
    operationFinished = false;
    console.log("Calculator Cleared")
}


// Sets up number buttons 0-9
function setUpNumbers()
{
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener("click", () =>
        {
            getNumber(numberButton.innerHTML);
        });
    });
}

// Sets up AC button
function setUpClear()
{
    const clearButton = document.querySelector(".clear-button");
    clearButton.addEventListener("click", clearCalculator);
}


// Sets up operation buttons (+ - * /)
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

// Sets up = button to display result of operation
function setUpEval()
{
    const evalButton = document.querySelector(".evaluate-button");
    evalButton.addEventListener("click", ()=>
    {
        operate(selectedOperator, numberA, numberB)
    });
}


// Sets up . button
function setUpDecimal()
{
    const decimalButton = document.querySelector(".decimal-button")
    decimalButton.addEventListener("click", ()=>
    {
        getNumber(decimalButton.textContent);
    });
}


// Sets up +/ button
function setUpSign()
{
    const decimalButton = document.querySelector(".decimal-button")
    decimalButton.addEventListener("click", ()=>
    {
        getNumber(decimalButton.textContent);
    });
}


// Sets up % button
function setUpPercent()
{
    const decimalButton = document.querySelector(".decimal-button")
    decimalButton.addEventListener("click", ()=>
    {
        getNumber(decimalButton.textContent);
    });
}

setUpNumbers();
setUpDecimal();
setUpClear();
setUpOperations();
setUpEval();

// TO-DO:
// Set up +/- button, % button