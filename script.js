//VARIABLES
const tblBody = document.getElementById('tblBody');
const table = document.getElementById('expensesTbl');
const form = document.getElementById('expensesForm');
const deleteBtn = document.getElementsByClassName('delete-btn');
const inputFields = document.querySelectorAll("input");
const selectFields = document.querySelectorAll("select");

// EVENT LISTENERS
document.getElementById('addExpenseBtn').addEventListener('click', createNewRow);

// //FUNCTIONS
function createNewRow() {
  if (!inputFields.value === "" && !selectFields.value === "");
    const tblBody = document.getElementById('tblBody');
    const row = tblBody.insertRow(0);
    const paymentType = row.insertCell(0);
    const expenseName = row.insertCell(1);
    const expenseDate = row.insertCell(2);
    const expenseAmount = row.insertCell(3);
    const deleteExpBtn = row.insertCell(4);

    paymentType.innerHTML = document.getElementById('paymentType').value;
    expenseName.innerHTML = document.getElementById('expenseName').value;
    expenseDate.innerHTML = document.getElementById('expenseDate').value;
    expenseAmount.innerHTML = document.getElementById('expenseAmount').value;
    deleteExpBtn.innerHTML = '<button class="delete-btn" onclick="deleteRow(this)"> <i class="fa-regular fa-trash-can"></i>';
};

function deleteRow(e) {
  var i = e.parentNode.parentNode.rowIndex;
  document.getElementById('expensesTbl').deleteRow(i);
}

