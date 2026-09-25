
function checkAge(age){
    if(age>=18){
        document.getElementById("result").innerText="You are Eligible to vote";
    }else{
       document.getElementById("result").innerText="You are not Eligible to vote";
    }
}