// login area

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//transaction area

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositNumber;
  document.getElementById("currentDeposit").innerText = totalDeposit;

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText = totalBalance;

  document.getElementById("depositAmount").value = "";
});
const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount);

  const currentWithdraw = document.getElementById("currentWithdraw").innerText;
  const currentWithdrawNumber = parseFloat(currentWithdraw);
  const totalWithdraw = withdrawNumber + currentWithdrawNumber;
  document.getElementById("currentWithdraw").innerText = totalWithdraw;

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = currentBalanceNumber - withdrawNumber;
  document.getElementById("currentBalance").innerText = totalBalance;

  document.getElementById("withdrawAmount").value = "";
});
