document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");
    const deleteButton = document.getElementById("delete");
  
    let currentInput = '';
    let operator = '';
    let result = '';
  
    // Function to update the display
    function updateDisplay() {
      display.value = currentInput;
    }
  
    // Add event listeners to number buttons
    numbers.forEach(function(button) {
      button.addEventListener("click", function() {
        currentInput += button.value;
        updateDisplay();
      });
    });
  
    // Add event listeners to operator buttons
    operators.forEach(function(button) {
      button.addEventListener("click", function() {
        if (currentInput !== '') {
          operator = button.value;
          currentInput += operator;
          updateDisplay();
        }
      });
    });
  
    // Event listener for clear button
    clearButton.addEventListener("click", function() {
      currentInput = '';
      operator = '';
      result = '';
      updateDisplay();
    });
  
    // Event listener for calculate button
    calculateButton.addEventListener("click", function() {
      if (currentInput !== '') {
        result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
      }
    });
  
    // Event listener for delete button
    deleteButton.addEventListener("click", function() {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    });
  });
  