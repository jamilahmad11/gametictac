let boxes=document.querySelectorAll(".box");

let turn = "x";
let isovergame= false;

boxes.forEach(e=>{
    e.innerHTML=""
    e.addEventListener("click",()=>{
        if(!isovergame && e.innerHTML===""){
            e.innerHTML=turn;
            cheakwin();
            ckeakdraw();
            changeTurn();
        }
    })
})

function changeTurn(){
 if(turn==="x"){
    turn="o";
    document.querySelector(".bg").style.left="85px";
 }
 else{
    
    turn="x";
    document.querySelector(".bg").style.left="85px";

 }
}

 function cheakwin(){
 let winConditions=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
 ]
 for(let i=0; i<winConditions.length; i++){
    let v0=boxes[winConditions[i][0]].innerHTML;
    let v1=boxes[winConditions[i][1]].innerHTML;
    let v2=boxes[winConditions[i][2]].innerHTML;

if(v0 !="" && v0 === v1 && v0 ===v2){
    // alert(turn);
    isovergame=true;
    document.querySelector("#results").innerHTML=true+ "Win";
    document.querySelector("#plag-again").style.display="inline"

    for(j=0; j<3; j++){
        // boxes[winConditions[1][j]].style.background-Color="#08D9D6";
        // boxes[winConditions[1][j]].style.color="#000";

    }
}

 }
 }

 function ckeakdraw(){
if(!isovergame){
    let isDraw=true;
    boxes.forEach(e=>{
        if(e.innerHTML==="")isDraw = false;
    })


if(isDraw){

    isovergame=true;
    document.querySelector("#results").innerHTML="Draw";
    document.querySelector("#plag-again").style.display="inline"

   }
  }
 }
 document.querySelector("#plag-again").addEventListener("click",()=>{
    isovergame=false;
    // true="x";

    document.querySelector(".bg").style.left="0";
    document.querySelector("#results").innerHTML="";
    document.querySelector("#plag-again").style.display="none";
    boxes.forEach(e=>{
        e.innerHTML="";
        e.style.removeProperty("background-color");
        e.style.color="#fff";
    })

 })