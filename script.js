let display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    let expression = display.value;
    let result = eval(expression);
    display.value = result;

    let history = document.getElementById("history");

    let entry = document.createElement("p");
    entry.textContent = expression + " = " + result;

    history.appendChild(entry);

}

/* Adding Keyboard Support */

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
