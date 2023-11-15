var valuated = false;
var start = true;
const operations = '+-**/%^';

function add(text) {
    var curr = document.getElementById('display-answer').innerText;
    if (valuated && !operations.includes(text)){
        curr = "";
        valuated = false;
    } else if (valuated){
        valuated = false;
    }
    if (start && (operations.includes(text) || text === '.')){
        document.getElementById('display-answer').innerText = String(curr + text);
        start = false;
        return;
    } 
    start = false;
    if (curr === "" && operations.includes(text)) return;
    else if (curr !== "0") document.getElementById('display-answer').innerText = String(curr + text);
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

function backspace() {
    var result = String(document.getElementById('display-answer').innerText);
    result = result.slice(0,result.length-1);
    document.getElementById('display-answer').innerText = String(result);
    start = false;
}

function eval_and_negate() {
    var result = String(eval(document.getElementById('display-answer').innerText));
    result = "-" + result;
    document.getElementById('display-answer').innerText = String(eval(result));
    valuated = true;
}