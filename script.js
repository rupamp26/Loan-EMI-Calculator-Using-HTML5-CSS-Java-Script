function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanYears = parseInt(document.getElementById("loanYears").value);
  
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfMonths = loanYears * 12;
  
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
  
    // Convert monthly payment to INR and format with two decimal places
    const monthlyPaymentInINR = monthlyPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  
    document.getElementById("result").textContent = `Your monthly EMI is: ${monthlyPaymentInINR}`;
  }
  