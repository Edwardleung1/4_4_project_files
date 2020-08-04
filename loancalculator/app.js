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

  e.preventDefault(); // Need to prevent the default form behaviour
}
