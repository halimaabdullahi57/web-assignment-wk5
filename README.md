# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a personal budget and expense tracker. This version adds a JavaScript foundation to the existing dashboard so the application can store budgeting data, collect user input, perform calculations, and display results in the browser console.

## Files

- `index.html` - Main webpage and dashboard structure.
- `style.css` - Styling and responsive dashboard layout.
- `script.js` - JavaScript logic for variables, user input, calculations, and functions.
- `README.md` - Project documentation.

## JavaScript Concepts Implemented

### 1. Variables

The project uses `let` variables to store application data:

- `budget` stores the user's monthly budget.
- `totalExpenses` stores the calculated total of expenses.
- `remainingBalance` stores the money left after expenses.
- `expenses` stores example expense objects.

### 2. Data Types

The project uses:

- Numbers for budget and expense amounts.
- Strings for expense names and console messages.
- Arrays to store multiple expenses.
- Objects to represent individual expenses.
- Booleans through comparison conditions.

### 3. User Input

JavaScript's `prompt()` function collects the user's monthly budget. The input is converted from text into a number using `Number()`.

The user can also click the **Set Budget** button to enter a new budget.

### 4. Calculations

The application calculates the total expenses using:

`calculateTotalExpenses(expenses)`

The remaining balance is calculated using:

`calculateRemainingBalance(budget, totalExpenses)`

The basic calculation is:

`Remaining Balance = Budget - Total Expenses`

### 5. Functions

Functions organize the JavaScript code into reusable sections:

- `calculateTotalExpenses()` calculates the total expenses.
- `calculateRemainingBalance()` calculates the remaining budget.
- `displayResults()` prints a clear budget report to the browser console.

Using functions makes the code easier to read, test, reuse, and maintain.

## How to Test

1. Open `index.html` in a browser.
2. Enter a monthly budget when the prompt appears.
3. Open Developer Tools by pressing `F12`.
4. Select the **Console** tab.
5. Check the SpendWise Budget Report.
6. Click **Set Budget** to test a different budget.
7. Confirm that the remaining balance changes correctly.

## Example

If the user enters:

- Budget: KES 10,000
- Food: KES 2,500
- Transport: KES 1,200
- Utilities: KES 800

Total expenses are KES 4,500.

Remaining balance:

`KES 10,000 - KES 4,500 = KES 5,500`

## Submission

Upload all four files to a public GitHub repository:

- `index.html`
- `style.css`
- `script.js`
- `README.md`

Then copy the public GitHub repository URL and submit it through the LMS.
