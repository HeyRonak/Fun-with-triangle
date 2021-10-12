
var btn = document.querySelector("#btn");
var inputs = document.querySelectorAll(".side_input");
var output = document.querySelector(".output_window");

function calculateSquares(a , b){
    return a*a + b*b;
}

function CalculateHypotenuse(){
    var base = Number(inputs[0].value) ;
    var height = Number(inputs[1].value );

    if(inputs[0].value === "" || inputs[1].value === ""){
        output.innerText = "Enter all fields.";
    } else if( base <= 0 || height <= 0){
        output.innerText = "Enter valid inputs.";
    } else{
        var sqaure = calculateSquares(  base , height ); 
        var ans = Math.sqrt(sqaure);  
        output.innerText = "Length of hypotenuse is : " + ans.toFixed(2);
    }
    
}

btn.addEventListener("click" , CalculateHypotenuse);