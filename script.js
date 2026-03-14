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
    display.value = eval(display.value);
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
