const numberButtons = document.querySelectorAll(".number-button");
let numberA = null;
let numberB = null;


function add(a, b)
{
    return a + b;
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
    return;
}

function getNumber(numberString)
{

    console.log(numberString);
    return numberString;
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

setUpNumbers();
