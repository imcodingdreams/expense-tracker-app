// VARIABLES
const paymentType = document.getElementById('paymentType');
const expenseName = document.getElementById('name');
const expenseDate = document.getElementById('date');
const expenseAmount = document.getElementById('amount');

const newPaymentType = document.createElement('select');
newPaymentType.setAttribute('class', 'new-payment-type');
newPaymentType.innerText = paymentType.value;

const newExpName = document.createElement('input');
newExpName.setAttribute('class', 'new-name');
newExpName.innerText = expenseName.value;

const newExpDate = document.createElement('input');
newExpDate.setAttribute('class', 'new-date');
newExpDate.innerText = expenseDate.value;

const newExpAmount = document.createElement('input');
newExpAmount.setAttribute('class', 'new-amount');
newExpAmount.innerText = expenseAmount.value;

// EVENT LISTENERS
document.getElementById('addExpenseBtn').addEventListener('click', displayNewExpense);


//FUNCTIONS

function displayNewExpense() {
  const newExpenseRow = document.createElement('tr');
  newExpenseRow.setAttribute('class', 'new-row');
  const newExpenseHtml = '<td>' + newPaymentType + '</td><td>' + newExpName + '</td><td>' + newExpDate + '</td><td>' + newExpAmount + '</td>';
  newExpenseRow.innerHTML = newExpenseHtml;
  tblBody.appendChild(newExpenseRow);
}

displayNewExpense();


// PSEUDOCODE

// Create a variable to hold the type
// Create a variable to hold the name
// Create a variable to hold the date
// Create a variable to hold the amount

// Create a new element to hold the paymentType input
// Set class to the new element paymentType
// Grab the paymentType input value

// Create a new element to hold the name input
// Set class to the new element name
// Grab the expenseName input value

// Create a new element to hold the date input
// Set class to the new element paymentType
// Grab the expenseDate input value

// Create a new element to hold the amount input
// Set class to the new element paymentType
// Grab the expenseAmount input value

// EVENT LISTENERS
// Create an eventlistener for the submit button

// const form = document.getElementById('expensesForm');
// form.addEventListener('submit', (event) => {
// event.preventDefault();
// });



//FUNCTIONS

// Create a variable to hold the new expense row
// Append new row to body table

