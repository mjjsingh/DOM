let expenses = localStorage.getItem('expenses') ? localStorage.getItem('expenses').split(',') : [];
const expenseForm = document.getElementById('expenseForm');
const expensesList = document.getElementById('expensesList');

function addExpense(e) {
  e.preventDefault();
  const expenseAmount = document.getElementById('expenseAmount').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const newExpense = `${expenseAmount},${description},${category}`;
  expenses.push(newExpense);
  localStorage.setItem('expenses', expenses.join(','));
  renderExpenses();
  expenseForm.reset();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem('expenses', expenses.join(','));
  renderExpenses();
}

function editExpense(index) {
  const expense = expenses[index].split(',');
  document.getElementById('expenseAmount').value = expense[0];
  document.getElementById('description').value = expense[1];
  document.getElementById('category').value = expense[2];
  deleteExpense(index);
}

function renderExpenses() {
  let listItems = '';
  expenses.forEach((expense, index) => {
    const [expenseAmount, description, category] = expense.split(',');
    listItems += `
      <div>
        Amount: ${expenseAmount}<br>
        Description: ${description}<br>
        Category: ${category}<br>
        <button onclick="editExpense(${index})">Edit Expense</button>
        <button onclick="deleteExpense(${index})">Delete Expense</button><br><br> 
      </div>`;
    });
    expensesList.innerHTML = listItems;
    }

    expenseForm.addEventListener('submit', addExpense);
    renderExpenses();

  