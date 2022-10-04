//VARIABLES
const tblBody = document.getElementById('tblBody');
const table = document.getElementById('expensesTbl');
const form = document.getElementById('expensesForm');
const deleteBtn = document.getElementsByClassName('delete-btn');
const paymentType = document.getElementById('paymentType');
const expenseName = document.getElementById('expenseName');
const expenseDate = document.getElementById('expenseDate');
const expenseAmount = document.getElementById('expenseAmount');

// EVENT LISTENERS
document.getElementById('addExpenseBtn').addEventListener('click', createNewRow);

//FUNCTIONS
function createNewRow() {
  if (!paymentType.value === "" && !expenseName.value === "" && !expenseDate.value === "" && !expenseAmount.value === "") return;
  const tblBody = document.getElementById('tblBody');
  const row = tblBody.insertRow(0);
  const paymentTypeCell = row.insertCell(0);
  const expenseNameCell = row.insertCell(1);
  const expenseDateCell = row.insertCell(2);
  const expenseAmountCell = row.insertCell(3);
  const deleteExpBtnCell = row.insertCell(4);

  paymentTypeCell.innerHTML = document.getElementById('paymentType').value;
  expenseNameCell.innerHTML = document.getElementById('expenseName').value;
  expenseDateCell.innerHTML = document.getElementById('expenseDate').value;
  expenseAmountCell.innerHTML = document.getElementById('expenseAmount').value;
  deleteExpBtnCell.innerHTML = '<button class="delete-btn" onclick="deleteRow(this)"> <i class="fa-regular fa-trash-can"></i>';
};

function deleteRow(e) {
  var i = e.parentNode.parentNode.rowIndex;
  document.getElementById('expensesTbl').deleteRow(i);
}

