
var btn = document.querySelector("#submit_btn");
var form = document.querySelector(".form");
var output = document.querySelector(".output_window");

var answer = ["90°" , "isosceles", "acute" , "equilateral" , "right angled"];

function CheckQuizAnswers(){

    var formResult  = new FormData(form);
    var i=0;
    var count=0;

    for(var value of formResult.values()){ 
        if(value === answer[i]){
            count++;
        }
        ++i;
    }

    if(i === 5){
        output.innerText = "Your total score is : " +count;
    }else{
        output.innerText = "please attempt all questions.";
    }
    
    

}

btn.addEventListener("click" , CheckQuizAnswers);
