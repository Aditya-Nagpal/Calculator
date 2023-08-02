console.log("script added succcessfully.");
var buttons = document.getElementsByClassName("btn");
var display = document.querySelector("#display > span");
var operand = "";
var operator = null;
var isLastOperator = false;
for (let button of buttons) {
  button.addEventListener("click", function () {
    var value = this.getAttribute("data");
    if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (!isLastOperator) {
            if (display.innerText === "Error" && operand !== "NaN") {
                operand += "NaN";
            } else if (display.innerText !== "Error") {
                operand += display.innerText;
            }
            let temp = eval(operand);
            if (temp === Infinity || isNaN(temp)) {
                display.innerText = "Error";
                operand = "NaN";
            } else {
                display.innerText = temp;
                operand = display.innerText;
            }
            isLastOperator = true;
        }
        operator = value;
    } else if (value === "%") {
        if (display.innerText !== "Error") {
            let isEq=false;
            if(display.innerText === operand.toString()){isEq=true;}
            display.innerText /= 100;
            if(isEq){operand=display.innerText;}
        }
    } else if (value === "+/-") {
        if (display.innerText !== "Error") {
            let isEq=false;
            if(display.innerText === operand.toString()){isEq=true;}
            display.innerText *= -1;
            if(isEq){operand=display.innerText;}
        }
    } else if (value === "AC") {
        display.innerText = "";
        operand = "";
        operator = null;
    } else if (value === "=") {
        operand += display.innerText;
        var ans = eval(operand);
        if (ans === Infinity || isNaN(ans)) {
            display.innerText = "Error";
            operand = "NaN";
        } else {
            display.innerText = ans;
            operand = ans.toString();
            isLastOperator = true;
        }
    } else {
        if (operator != null) {
            operand += operator;
            operator = null;
            display.innerText = "";
        }
        if (display.innerText !== "Error") {
            display.innerText += value;
            isLastOperator = false;
        }
    }
  });
}
