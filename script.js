// SpendWise - JavaScript Foundation

// Application data stored in variables
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Example expense data
let expenses = [
  { name: "Food", amount: 2500 },
  { name: "Transport", amount: 1200 },
  { name: "Utilities", amount: 800 }
];

// Function to calculate total expenses
function calculateTotalExpenses(expenseList) {
  let total = 0;

  for (let expense of expenseList) {
    total += expense.amount;
  }

  return total;
}

// Function to calculate remaining balance
function calculateRemainingBalance(budgetAmount, expenseAmount) {
  return budgetAmount - expenseAmount;
}

// Function to display results in the console
function displayResults() {
  console.log("========== SpendWise Budget Report ==========");
  console.log("Budget: KES " + budget.toFixed(2));
  console.log("Total Expenses: KES " + totalExpenses.toFixed(2));
  console.log("Remaining Balance: KES " + remainingBalance.toFixed(2));

  if (remainingBalance >= 0) {
    console.log("Status: You are within your budget.");
  } else {
    console.log("Status: You have exceeded your budget.");
  }

  console.log("============================================");
}

// Collect user input using a JavaScript prompt
let budgetInput = prompt("Enter your monthly budget in KES:");

if (budgetInput !== null && budgetInput.trim() !== "") {
  budget = Number(budgetInput);

  if (Number.isNaN(budget) || budget < 0) {
    alert("Please enter a valid positive budget.");
    budget = 0;
  }
}

// Calculate application data
totalExpenses = calculateTotalExpenses(expenses);
remainingBalance = calculateRemainingBalance(budget, totalExpenses);

// Update the webpage
document.getElementById("budgetDisplay").textContent =
  "KES " + budget.toFixed(2);

document.getElementById("expenseDisplay").textContent =
  "KES " + totalExpenses.toFixed(2);

document.getElementById("balanceDisplay").textContent =
  "KES " + remainingBalance.toFixed(2);

// Display results in browser console
displayResults();

// Allow the user to set the budget again
document.getElementById("budgetButton").addEventListener("click", function () {
  let newBudget = prompt("Enter your new monthly budget in KES:");

  if (newBudget !== null && newBudget.trim() !== "") {
    let convertedBudget = Number(newBudget);

    if (!Number.isNaN(convertedBudget) && convertedBudget >= 0) {
      budget = convertedBudget;
      remainingBalance = calculateRemainingBalance(budget, totalExpenses);

      document.getElementById("budgetDisplay").textContent =
        "KES " + budget.toFixed(2);

      document.getElementById("balanceDisplay").textContent =
        "KES " + remainingBalance.toFixed(2);

      displayResults();
    } else {
      alert("Please enter a valid positive budget.");
    }
  }
});
