
var btn  = document.querySelector("#btn");
var inputs = document.querySelectorAll(".input_field");
var output  = document.querySelector(".output");

function CalculateValues(base , height){
    return (1/2)*(base*height);
}

function CalculateArea(){

    var base = Number(inputs[0].value);
    var height = Number(inputs[1].value);

    if(inputs[0].value === "" || inputs[1].value === ""){
        output.innerText = "Please! enter both fields.";  
    }else if(base <= 0 || height <= 0){
        output.innerText = "Enter valid data.";
    }else{
        area = CalculateValues( base,height );
        output.innerText = "The area of triangle is : " + area;
    }

}

btn.addEventListener("click" , CalculateArea );
