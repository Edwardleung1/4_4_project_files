// Listen for FORM submit
document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

// Calculate Results
function calculateResults() {
  console.log("Calculating...");
  // UI Form Variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  // Results Variables
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");
  // Calculate Values
  const principal = parseFloat(amount.values);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  // Calculate Monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  // x = (1+calculatedInterest)pow calculatedPayments
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2); // Setting it to 2 decimal pts
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    console.log("Please check your numbers");
  }

  e.preventDefault(); // Need to prevent the default form behaviour
}
