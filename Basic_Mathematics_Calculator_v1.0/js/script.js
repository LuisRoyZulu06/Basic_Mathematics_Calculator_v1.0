function calc() {
    var a = parseInt(document.querySelector("#val1").value);
    var b = parseInt(document.querySelector("#val2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if(op == "add"){
        calculate = a + b;
    }else if(op == "minus"){
        calculate = a - b;
    }else if(op == "multi"){
        calculate = a * b;
    }else if(op == "div"){
        calculate = a / b;
    }
    
    document.querySelector("#result").innerText = calculate;
    //console.log(calculate)
    /*WHEN EVER THE FOLLOWING STATEMENT IS INVOKED, WHEN GETTING THE 'result' ITS BLINKING
    ALT USED CONSOLE.LOG
   document.querySelector("#result").innerHTML = calculate;*/
}