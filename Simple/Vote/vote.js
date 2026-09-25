let dmk=0;
let tvk=0;
let bjp=0;

function dmkVote(){
    dmk++;
}
function tvkVote(){
    tvk++;
}
function bjpVote(){
    bjp++;
}

let contain=document.getElementById("contain");

function result(){
    let winner=Math.max(dmk,tvk,bjp);
    if(dmk===winner&&dmk!=0){
        let final=document.createElement("div")
        final.className="alert alert-success text-center mt-3";
        final.textContent="DMK WON";
        contain.appendChild(final);
    }
    else if(tvk===winner&&tvk!=0){
        let final=document.createElement("div")
        final.className="alert alert-success text-center mt-3";
        final.textContent="TVK WON";
        contain.appendChild(final);
    }
    else if(bjp===winner&&bjp!=0){
        let final=document.createElement("div")
        final.className="alert alert-success text-center mt-3";
        final.textContent="BJP WON";
        contain.appendChild(final);
    }else if(dmk===tvk){
        let final=document.createElement("div")
        final.className="alert alert-warning text-center mt-3";
        final.textContent="TIE";
        contain.appendChild(final);
    }else{
         let final=document.createElement("div")
        final.className="alert alert-warning text-center mt-3";
        final.textContent="TIE";
        contain.appendChild(final);
    }
}