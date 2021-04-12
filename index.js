const readLineSync = require('readline-sync');
let playerName = readLineSync.question("What is your name?")
let score=0;

//Welcome player
console.log(`---------Welcome ${playerName} to DO YOU KNOW SONALI----------`)


//Question format
function question(ques,ans){
  let playerResponse = readLineSync.question(ques);
  if(playerResponse.toLowerCase()===ans){
    console.log("Correct!!!")
    score+=1
  }
  else{
    console.log("Incorrect!!!")
  }
}

//Function to play the game
function play(){
  let allQuestions=[
    {
      ques:"Where does Sonali live?",
      ans:"delhi"
    },
    {
      ques:"What is her favourite food?",
      ans: "dosa"
    },
    {
      ques:"What anime does Sonali likes the most?",
      ans:"attack on titan"
    },
    {
      ques:"What is her favourite color?",
      ans:"black"
    }
  ]

  allQuestions.map(({ques,ans})=>{
    question(ques,ans);
  })

  console.log()
  console.log("Thank you for playing the game!!")
  console.log("Your score is:",score,"/4")
}

play();
