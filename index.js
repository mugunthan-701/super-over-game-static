const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");
const $team1Score = document.getElementById("score-team1");
const $team1Wickets = document.getElementById("wickets-team1");
const $team2Score = document.getElementById("score-team2");
const $team2Wickets = document.getElementById("wickets-team2");
const tballs=document.querySelectorAll(".ball");
const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

let wicket1=0
let wicket2=0
let score1=0
let score2=0
resetButton.addEventListener("click",()=>window.location.reload())
let array=[1,2,3,4,6,"w"]
 var team = 0
strikeButton.addEventListener("click",function(){
  let a=Math.floor((Math.random()*array.length));
  let b = array[a];
  tballs[team].textContent= b;
  console.log(tballs[team])
  team++;
  if (team<=6 && wicket1<=2){
    if (b=="w"){
      wicket1+=1;
      $team1Wickets.innerText=wicket1;
    }
    else{
      score1+=b;
      $team1Score.innerText=score1;
    }
   
  } 
 else if(team>6 && wicket2<=2){
    if(b=="w"){
      wicket2+=1;
      $team2Wickets.innerText=wicket2;
    }
    else {
      score2+=b;
      $team2Score.innerText=score2;
    }

  }
  if (team>=12){
    gameOverAudio.play();
  if (score1>score2 || wicket2 == 2){
    alert("INDIA WON")
  }
  else if (score2>score1 || wicket1 == 2){
    gameOverAudio.play();
    alert("PAKISTAN WON")
  }
  else if (score1==score2){
    gameOverAudio.play();
    alert("DRAW THE MATCH!")
  }}}
 )

let name="KAlvium";
console.log(`My name is ${name}`)
