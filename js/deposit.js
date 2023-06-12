
//step:1 add the event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
  // step:2 get the value from deposit input field
  const depositFiled = document.getElementById('deposit-field');
  const newDepositAmountString = depositFiled.value;
  // convert string to number
  const newDepositAmount = parseFloat(newDepositAmountString)
  // get current value from deposit total element
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)
  const currentDepositTotal = newDepositAmount + previousDepositTotal;
  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString)

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;


  // clear the deposit field 
  depositFiled.value = '';
})