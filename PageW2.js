var energy = 6;
var findFoodY = 3;
var findfoodBooleanY = new Boolean(3);
var findFoodN = 1;
var findFoodBooleanN = new Boolean(-1);

//sleep button code
//LMTraining code
console.log("hi")
const LMTraining = document.getElementById("LMTraining");
const LMquiz = document.getElementById("LMQuiz");
const LMQuestions = document.getElementById("LMQuestions");
const LMChoiceA = document.getElementById("LMA");
const LMChoiceB = document.getElementById("LMB");
const LMChoiceC = document.getElementById("LMC");
const LMChoiceD = document.getElementById("LMD");
const LMprogress = document.getElementById("LMProgress");
const LMscoreSection = document.getElementById("LMScoreSection");

let ArrayLMQuestions = [
  {
    LMQuestions: "What is the leader of a wolf pack called?",
    LMChoiceA: "Number One",
    LMChoiceB: "Alpha",
    LMChoiceC: "Omega",
    LMChoiceD: "Boss",
    LMcorrect: "B"
  },
  {
    LMQuestions: "What is the scientific name of the wolf",
    LMChoiceA: "Lupin Anther",
    LMChoiceB: "Animalia Wolfia",
    LMChoiceC: "amphiphilic Lupic",
    LMChoiceD: "Canis Lupis",
    LMcorrect: "D"
  },
  {
    LMQuestions: "In which fairytale does the wolf attack pigs",
    LMChoiceA: "Beauty and the Beast",
    LMChoiceB: "Cinderella",
    LMChoiceC: "Three Little Pigs",
    LMChoiceD: "The Ugly Duckling",
    LMcorrect: "C"
  },
  {
    LMQuestions: "In which fairytale does the wolf attack pigs",
    LMChoiceA: "Beauty and the Beast",
    LMChoiceB: "Cinderella",
    LMChoiceC: "Three Little Pigs",
    LMChoiceD: "The Ugly Duckling",
    LMcorrect: "C"
  }];

const LMlastQuestion = ArrayLMQuestions.length - 1;
let LMcurrentQuestion = 0;
let LMscore = 0;
function LMLoadQuestion(){
let LMq = ArrayLMQuestions[LMcurrentQuestion];
LMQuestions.innerHTML = "<p>" + LMq.LMQuestions +"</p>";
LMChoiceA.innerHTML = LMq.LMChoiceA;
LMChoiceB.innerHTML = LMq.LMChoiceB;
LMChoiceC.innerHTML = LMq.LMChoiceC;
LMChoiceD.innerHTML = LMq.LMChoiceD;
}
LMTraining.addEventListener("click",LMstartQuiz);
function LMstartQuiz(){
LMTraining.style.display = "none";
LMLoadQuestion();
LMQuiz.style.display = "block";
LMloadProgress();
}
function LMloadProgress(){
  for(let LMArrayIndex = 0;; LMArrayIndex <= LMlastQuestion, LMArrayIndex++){
    LMprogress.innerHTML += "<div class = 'prog' id=" + LMArrayIndex + "></div>";
  }
}
function checkAnwer(LMAnswer){
  if(LMAnswer == ArrayLMQuestions[LMcurrentQuestion].LMcorrect){
    LMscore++;

  }
  else{

  }
  if (runningQuestion < lastQuestion){
    LMcurrentQuestion++;
    LMLoadQuestion();
  }
  else{
    LMLoadScore();
  }
}
function LMLoadScore(){
  LMscoreSection.style.display = "block";
  const LMscorePercent = math.round(100 * LMScore/ArrayLMquestions.length);
  let LMimg = (LMscorePercent) ? "Youpassed.png" :
              "Youfailed.png";
              LMScoreSection.innerHTML = "<img src=" + LMimg + ">";
      LMScoreSection.innerHTML += "<p>" + LMscorePerCent + "%</p>";
}

// const LMlastQuestion = ArrayLMQuestions.length - 1;
// let LMcurrentQuestion = 0;
// let ScoreLM = 0;
// console.log("hi")
//
// function LMrenderQuestion() {
//   let LMq = ArrayLMquestions[LMcurrentQuestion];
//   LMquestions.innerHTML = "<p>" + LMq.LMquestions + "</p>"
//   LMChoiceA.innerHTML = LMq.LMChoiceA;
//   LMChoiceB.innerHTML = LMq.LMChoiceB
//   LMChoiceC.innerHTML = LMq.LMChoiceC
//   LMChoiceD.innerHTML = LMq.LMChoiceD
// }
// LMTraining.addEventListener("click",LMstartQuiz);
// function LMstartQuiz() {
//   LMTraining.style.display = "none";
//   LMrenderQuestion();
//   LMquiz.style.display = "block"
//   LMrenderProgress();
// }
// function LMrenderProgress() {
//   for (let LMqIndex = 0; LMqIndex <= LMlastQuestion; LMqIndex++) {
//     LMprogress.innerHTML += "<div class ='LMprog' id=" + LMqIndex + "></div>"
//   }
// }
// function LMcheckAnswer(LManswer) {
//   if (LManswer == LMquestions[LMcurrentQuestion].LMcorrect) {
//     ScoreLM++;
//     LMcorrectAnswer();
//   } else {
//     LMwrongAnswer();
//   }
//   if (LMcurrentQuestion < LMlastQuestion) {
//     LMcurrentQuestion++;
//     LMrenderQuestion();
//   } else {
//     renderScore();
//   }
// }
//
// function LMcorrectAnswer() {
//   document.getElementById(LMcurrentQuestion).style.backgroundColor = "green";
//
// }
//
// function LMwrongAnswer() {
//   document.getElementById(LMcurrentQuestion).style.backgroundColor = "red";
// }
//
// function renderScore() {
//   LMscore.style.display = "block";
//   const LMscorePercent = Math.round(100 * scoreLM / ArrayLMQuestions.length);
//   let LMimg = (LMscorePercent >= 100) ? "img/Youpassed.png" :
//     (LMscorePercent <= 99) ? "img/Youfailed.png":
//   LMscore.innerHTML = "<img src="+ LMimg +">";
//   LMscore.innerHTML =  "<p>"+ LMscorePerCent +"%</p>";
// }
//FIND Food



$(".FindFood").click(function(){
  let RandomNumber = Math.floor(Math.random() * 2)+1;
  if(RandomNumber == 1){
    energy = energy + findFoodY
    console.log("hi")
  }
  else if(RandomNumber == 2){
    energy = energy - findFoodN;
    console.log("bye")
  }
  console.log(energy)
  $(".energyCountPara").html("<p>You currently have " + energy + " units</p>");
  }
);
