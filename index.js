// Write your solution in this file!
// 1. Declare a global variable customerName using var and assign it 'bob'
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  // Now customerName is 'BOB'
}

// 3. Function that creates a global variable bestCustomer and sets it to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; 
  // Notice: no var/let/const — this creates a global variable (bad in real life!)
}

// 4. Function that changes bestCustomer to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; 
  // Since bestCustomer is already in global scope, we can overwrite it
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6. Function that tries to change the constant (will throw an error!)
function changeLeastFavoriteCustomer() {
  // This will cause an error because constants cannot be reassigned
  leastFavoriteCustomer = 'someone else';
}
