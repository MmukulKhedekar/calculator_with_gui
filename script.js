var valuated = false;
const operations = '+-*/';

function add(text) {
    var curr = document.getElementById('display-answer').innerText;
    if (valuated && !operations.includes(text)){
        curr = "";
        valuated = false;
    } else if (valuated){
        valuated = false;
    }
    if (curr !== "0") document.getElementById('display-answer').innerText = String(curr + text);
    else document.getElementById('display-answer').innerText = String(text);
}

function calculate() {
    var result = document.getElementById('display-answer').innerText;
    document.getElementById('display-answer').innerText = String(eval(result));
    valuated = true;
}

function reset() {
    document.getElementById('display-answer').innerText = "0";
}