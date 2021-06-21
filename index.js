function calculate() {
  let billAmt = document.getElementById("billamt").value;
  let peopleamt = document.getElementById("peopleamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let tipAmount = document.getElementById("tipamount");
  let tipEach = document.getElementById("each");
  if (billAmt === ''||serviceQual==='') {
    alert("Please Enter Bill Amount");
    return;
  }
    let totalTip = billAmt * serviceQual;
    console.log(totalTip.toFixed(2));
    if (peopleamt < 2 || peopleamt==='') {
      tipAmount.innerText = '$'+totalTip.toFixed(2);
      tipEach.innerText = '';
    } else {
      let tipPerPerson = totalTip / peopleamt;
      tipAmount.innerText = '$'+tipPerPerson.toFixed(2);
      tipEach.innerText = 'each';
    }
}

