// @ts-nocheck
const result = document.getElementById("result");

function sum() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    let sumResult = num1 + num2;
    console.log(sumResult);
    result.innerHTML = sumResult;
  }
  



