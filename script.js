let display = document.getElementById("display");

function append(value){

    let lastChar = display.value.slice(-1);

    // to Prevent two operators in a row
    if("+-*/".includes(value) && "+-*/".includes(lastChar)){
        return;
    }

    // to Prevent starting with operator (except -)
    if(display.value === "" && "+*/".includes(value)){
        return;
    }

    // to Prevent multiple decimals in same number
    if(value === "."){
        let parts = display.value.split(/[\+\-\*\/]/);
        let lastNumber = parts[parts.length - 1];

        if(lastNumber.includes(".")){
            return;
        }
    }

    display.value += value;
    adjustFontSize();
}

function clearDisplay(){
    display.value = "";
    adjustFontSize();
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
    adjustFontSize();
}

function calculate(){

    let expression = display.value;

    // remove ending operator
    while("+-*/".includes(expression.slice(-1))){
        expression = expression.slice(0,-1);
    }

    try{
        let result = eval(expression);
        display.value = result;

        let history = document.getElementById("history");

        let entry = document.createElement("p");
        entry.textContent = expression + " = " + result;

        history.appendChild(entry);
    }catch{
        display.value = "Error";
    }

    adjustFontSize();
}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

    let key = event.key;

    if(!isNaN(key) || "+-*/.".includes(key)){
        append(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }

});

function clearHistory(){
    document.getElementById("history").innerHTML = "";
}

function percentage(){
    display.value = display.value / 100;
    adjustFontSize();
}

function square(){
    display.value = Math.pow(display.value, 2);
    adjustFontSize();
}

function squareRoot(){
    display.value = Math.sqrt(display.value);
    adjustFontSize();
}

/* Auto Font Resize */

function adjustFontSize(){

    let length = display.value.length;

    if(length < 10){
        display.style.fontSize = "28px";
    }
    else if(length < 20){
        display.style.fontSize = "22px";
    }
    else if(length < 30){
        display.style.fontSize = "18px";
    }
    else{
        display.style.fontSize = "14px";
    }
}