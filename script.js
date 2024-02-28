let loanAmountInput = document.getElementById("loanAmountInput");
let interestRateInput = document.getElementById("interestRateInput");
let loanTermInput = document.getElementById("loanTermInput");
let calculateBtn = document.getElementById("calculateBtn");

function calculateLoan() {
  const monthlyInterestRate = interestRateInput.value / 100 / 12;
  const numberOfPayments = loanTermInput.value * 12;
  const monthlyPayment =
    (loanAmountInput.value * monthlyInterestRate) /
    (1 - Math.pow(1 / (1 + monthlyInterestRate), loanTermInput.value));
  const totalPayment = monthlyPayment * loanTermInput.value;
  const totalInterest = totalPayment - loanAmountInput.value;
  let result = document.getElementById("result");
  result.innerHTML = `
  
  <p>Monthly Payment: ${monthlyPayment}</p>
  <p>Total Payment: ${totalPayment}</p>
  <p>Total Interest: ${totalInterest}</p>
  
  `;
  return
}

calculateBtn.addEventListener("click", calculateLoan);
