//VARIABLES
const tblBody = document.getElementById('tblBody')

// EVENT LISTENERS
document.getElementById('addExpenseBtn').addEventListener('click', displayNewExpense);

// //FUNCTIONS
function createNewPaymentType() {
  const paymentType = document.getElementById('paymentType').value;
  const newPaymentType = document.createElement('td');
  newPaymentType.setAttribute('class', 'new-payment-type');
  newPaymentType.innerHTML = paymentType;
  tblBody.appendChild(newPaymentType);
}

function createNewName() {
  const expenseName = document.getElementById('expenseName').value;
  const newExpName = document.createElement('td');
  newExpName.setAttribute('class', 'new-name');
  newExpName.innerHTML = expenseName;
  tblBody.appendChild(newExpName);
}

function createNewDate() {
  const expenseDate = document.getElementById('expenseDate').value;
  const newExpDate = document.createElement('td');
  newExpDate.setAttribute('class', 'new-date');
  newExpDate.innerHTML = expenseDate;
  tblBody.appendChild(newExpDate);
}

function createNewAmount() {
  const expenseAmount = document.getElementById('expenseAmount').value;
  const newExpAmount = document.createElement('td');
  newExpAmount.setAttribute('class', 'new-amount');
  newExpAmount.innerHTML = `$${expenseAmount}`;
  tblBody.appendChild(newExpAmount);
}

function createDeleteBtn() {
  const deleteBtn = document.createElement('td');
  deleteBtn.innerHTML = '<button class="delete-btn"> <i class="fa-regular fa-trash-can"></i> </button>';
  deleteBtn.setAttribute('class', 'delete-btn');
  tblBody.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', deleteExpense);
}

function createNewRow() {
  const newExpenseRow = document.createElement('tr');
  newExpenseRow.setAttribute('class', 'new-row');
  tblBody.appendChild(newExpenseRow);
}

function displayNewExpense() {
  createNewRow();
  createNewPaymentType();
  createNewName();
  createNewDate();
  createNewAmount();
  createDeleteBtn();
}

// FIX DELETE EXPENSE FUNCTION
function deleteExpense(e) {
  const deleteBtn = e.target;
  const newExpenseRow = deleteBtn.parentElement.parentElement;
  deleteBtn.parentElement.remove(newExpenseRow);
};


// Nodes
/*<trnewExpenseRow >
    <td>newPaymentType</td>
    <td>newExpName</td>
    <td>newExpDate</td>
    <td>newExpAmount</td>
    <td>deleteBtn</td>
      <i>trash can </i>
</trnewExpenseRow> */


// PSEUDOCODE


// Create a variable to hold the new expense row
// Append new row to body table

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

// When I click the button
// appendChild newPaymentType
// appendChild newExpName
// appendChild newExpDate
// appendChild newExpAmount

