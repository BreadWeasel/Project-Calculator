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


// Reset operation data
function resetOperation()
{
    selectedOperator = null;
    operatorSelected = false;
    operationFinished = true;
}


// Perform and display operation. Requires two numbers and an operator.
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
            if (numberA == "Infinity")
            {
                calculatorOutput.textContent = "No dividing by 0";
            }
            else
            {
                calculatorOutput.textContent = numberA;
            }
            resetOperation();
            console.log(divide(a, b))
            return numberA;
        default:
            console.log("Operation not returned");
            resetOperation();
            return null;
    }    
}


// Store and displays selected numbers and its alterations (sign change and percent buttons)
function getNumber(numberString)
{
    //console.log("Button pressed is: " + numberString)
   
    if (!operatorSelected)
    {
        if (numberString == "+/-" || numberString == "%")
        {
            if (numberString == "+/-")
            {
                numberA = String(Number(numberA) * (-1));
            }
            else if (numberString == "%")
            {
                numberA = String(Number(numberA) * (.01));
            }
        }
        else if (numberA != 0 && operationFinished == false)
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
            operationFinished = false;
        }
        console.log("number A is: " + numberA)
        calculatorOutput.textContent = numberA;
    }
    else
    {
        if (numberString == "+/-" || numberString == "%")
        {
            if (numberString == "+/-")
            {
                numberB = String(Number(numberB) * (-1));
            }
            else if (numberString == "%")
            {
                numberB = String(Number(numberB) * (.01));
            }
        }    
        else if (numberB != 0 && operationFinished == false)
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
            operationFinished = false;
        }
        console.log("number B is: " + numberB)
        calculatorOutput.textContent = numberB;
    }
}


// Selects operator for later use in operate function
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


// Resets all calculator data
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
    const signButton = document.querySelector(".sign-button")
    signButton.addEventListener("click", ()=>
    {
        getNumber(signButton.textContent);
    });
}


// Sets up % button
function setUpPercent()
{
    const percentButton = document.querySelector(".percent-button")
    percentButton.addEventListener("click", ()=>
    {
        getNumber(percentButton.textContent);
    });
}


// Sets up all event listeners in calculator program
function setUpCalculator()
{
    setUpNumbers();
    setUpDecimal();
    setUpSign();
    setUpPercent();
    setUpClear();
    setUpOperations();
    setUpEval();
}

setUpCalculator();
