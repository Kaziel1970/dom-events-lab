/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let calculation = "";

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonValue = event.target.innerText;
      console.log("Current calculation: " + calculation)
        if(buttonValue === "="){
            calculation = eval(calculation);
            display.innerHTML = calculation;
            calculation = "";
        } else if (buttonValue === "C"){
            calculation = "";
            display.innerHTML = calculation;
        } else {
            calculation += buttonValue;
            display.innerHTML = calculation;
        }
    });
  });
  
  
/*-------------------------------- Functions --------------------------------*/
