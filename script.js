// script.js

const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let expenses = [];

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = expenseNameInput.value;
    const amount = parseFloat(expenseAmountInput.value);

    if (name && amount) {
        expenses.push({ name, amount });
        updateExpenseList();
        updateTotalAmount();
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});

function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td><button onclick="deleteExpense(${index})">Hapus</button></td>
        `;
        expenseList.appendChild(row);
    });
}

function updateTotalAmount() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalAmount.textContent = total.toFixed(2);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
    updateTotalAmount();
}
