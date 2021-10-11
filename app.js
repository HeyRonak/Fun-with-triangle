var inputs = document.querySelectorAll(".angle_input");
var btn = document.querySelector("#submit_btn");

var outputEle = document.querySelector("#output_window");

function CalculateSum(angle1 , angle2 , angle3){

    var sum = (angle1) + (angle2) + (angle3);
    return sum;
}

function checkTriangle(){
    var val1 = Number(inputs[0].value);
    var val2 = Number(inputs[1].value);
    var val3 = Number(inputs[2].value);

    if(  inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === ""){
        outputEle.innerText=  "Please ! Enter all fields.";
    }else if(val1 <= 0 || val2 <= 0 || val3 <= 0){
        outputEle.innerText=  "Please ! Enter valid inputs.";
    }else{
        var sum = CalculateSum( val1,val2,val3 );
        if(sum === 180){
            outputEle.innerText=  "Hurray!  this is a triangle :) ";
        }else{
            outputEle.innerText= "Not a triangle :( ";
        }
    }
}

btn.addEventListener("click" , checkTriangle);
