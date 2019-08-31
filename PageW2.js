var energy = 6;
var findFoodY = 3;
var findFoodN = 1;


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
const LMprogress = document.getElementById("LMprogress");
let LMscoreSection = document.getElementById("LMscoreSection");
console.log(LMscoreSection)

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
  ];

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
  for(let LMArrayIndex = 0; LMArrayIndex <= LMlastQuestion; LMArrayIndex++){

  }
}
function LMcheckAnswer(LMAnswer){
  if(LMAnswer == ArrayLMQuestions[LMcurrentQuestion].LMcorrect){
    LMscore++;

  }
  else{

  }
  if (LMcurrentQuestion < LMlastQuestion){
    LMcurrentQuestion++;
    LMLoadQuestion();
  }
  else{
    LMLoadScore();
  }
}
function LMLoadScore(){
  console.log("helloTest")
  LMscoreSection.style.display = "block";
  console.log("hiTest")
  const LMscorePercent = Math.round(100 * LMscore/ArrayLMQuestions.length);
  let LMimg = (LMscorePercent >= 100) ? "Youpassed.png" :
               (LMscorePercent <= 99) ? "Youfailed.png" :
              LMScoreSection.innerHTML = "<img src=" + LMimg + ">";
      LMscoreSection.innerHTML += "<p>" + LMscorePercent + "%</p>";
      console.log(LMscoreSection)

}

//sj training------------------------------------------------
console.log("hi")
const SJTraining = document.getElementById("SJTraining");
const SJquiz = document.getElementById("SJQuiz");
const SJQuestions = document.getElementById("SJQuestions");
const SJChoiceA = document.getElementById("SJA");
const SJChoiceB = document.getElementById("SJB");
const SJChoiceC = document.getElementById("SJC");
const SJChoiceD = document.getElementById("SJD");
const SJprogress = document.getElementById("SJprogress");
let SJscoreSection = document.getElementById("SJscoreSection");
console.log(SJscoreSection)

let ArraySJQuestions = [
  {
    SJQuestions: "What is the leader of a wolf pack called?",
    SJChoiceA: "Number One",
    SJChoiceB: "Alpha",
    SJChoiceC: "Omega",
    SJChoiceD: "Boss",
    SJcorrect: "B"
  },
  {
    SJQuestions: "What is the scientific name of the wolf",
    SJChoiceA: "Lupin Anther",
    SJChoiceB: "Animalia Wolfia",
    SJChoiceC: "amphiphilic Lupic",
    SJChoiceD: "Canis Lupis",
    SJcorrect: "D"
  },
  {
    SJQuestions: "In which fairytale does the wolf attack pigs",
    SJChoiceA: "Beauty and the Beast",
    SJChoiceB: "Cinderella",
    SJChoiceC: "Three Little Pigs",
    SJChoiceD: "The Ugly Duckling",
    SJcorrect: "C"
  },
  ];

const SJlastQuestion = ArraySJQuestions.length - 1;
let SJcurrentQuestion = 0;
let SJscore = 0;
function SJLoadQuestion(){
let SJq = ArraySJQuestions[SJcurrentQuestion];
SJQuestions.innerHTML = "<p>" + SJq.SJQuestions +"</p>";
SJChoiceA.innerHTML = SJq.SJChoiceA;
SJChoiceB.innerHTML = SJq.SJChoiceB;
SJChoiceC.innerHTML = SJq.SJChoiceC;
SJChoiceD.innerHTML = SJq.SJChoiceD;
}
SJTraining.addEventListener("click",SJstartQuiz);
function SJstartQuiz(){
SJTraining.style.display = "none";
SJLoadQuestion();
SJQuiz.style.display = "block";
SJloadProgress();
}
function SJloadProgress(){
  for(let SJArrayIndex = 0; SJArrayIndex <= SJlastQuestion; SJArrayIndex++){

console.log("LOOP")
  }
}
function SJcheckAnswer(SJAnswer){
  if(SJAnswer == ArraySJQuestions[SJcurrentQuestion].SJcorrect){
    SJscore++;

  }
  else{

  }
  if (SJcurrentQuestion < SJlastQuestion){
    SJcurrentQuestion++;
    SJLoadQuestion();
  }
  else{
    SJLoadScore();
  }
}
function SJLoadScore(){
  console.log("helloTest")
  SJscoreSection.style.display = "block";
  console.log("hiTest")
  const SJscorePercent = Math.round(100 * SJscore/ArraySJQuestions.length);
  let SJimg = (SJscorePercent >= 100) ? "Youpassed.png" :
               (SJscorePercent <= 99) ? "Youfailed.png" :
              SJScoreSection.innerHTML = "<img src=" + SJimg + ">";
      SJscoreSection.innerHTML += "<p>" + SJscorePercent + "%</p>";
      console.log(SJscoreSection)

}
//LD TRAINING--------------------------------------------------
console.log("hi")
const LDTraining = document.getElementById("LDTraining");
const LDquiz = document.getElementById("LDQuiz");
const LDQuestions = document.getElementById("LDQuestions");
const LDChoiceA = document.getElementById("LDA");
const LDChoiceB = document.getElementById("LDB");
const LDChoiceC = document.getElementById("LDC");
const LDChoiceD = document.getElementById("LDD");
const LDprogress = document.getElementById("LDprogress");
let LDscoreSection = document.getElementById("LDscoreSection");
console.log(LDscoreSection)

let ArrayLDQuestions = [
  {
    LDQuestions: "What is the leader of a wolf pack called?",
    LDChoiceA: "Number One",
    LDChoiceB: "Alpha",
    LDChoiceC: "Omega",
    LDChoiceD: "Boss",
    LDcorrect: "B"
  },
  {
    LDQuestions: "What is the scientific name of the wolf",
    LDChoiceA: "Lupin Anther",
    LDChoiceB: "Animalia Wolfia",
    LDChoiceC: "amphiphilic Lupic",
    LDChoiceD: "Canis Lupis",
    LDcorrect: "D"
  },
  {
    LDQuestions: "In which fairytale does the wolf attack pigs",
    LDChoiceA: "Beauty and the Beast",
    LDChoiceB: "Cinderella",
    LDChoiceC: "Three Little Pigs",
    LDChoiceD: "The Ugly Duckling",
    LDcorrect: "C"
  },
  ];

const LDlastQuestion = ArrayLDQuestions.length - 1;
let LDcurrentQuestion = 0;
let LDscore = 0;
function LDLoadQuestion(){
let LDq = ArrayLDQuestions[LDcurrentQuestion];
LDQuestions.innerHTML = "<p>" + LDq.LDQuestions +"</p>";
LDChoiceA.innerHTML = LDq.LDChoiceA;
LDChoiceB.innerHTML = LDq.LDChoiceB;
LDChoiceC.innerHTML = LDq.LDChoiceC;
LDChoiceD.innerHTML = LDq.LDChoiceD;
}
LDTraining.addEventListener("click",LDstartQuiz);
function LDstartQuiz(){
LDTraining.style.display = "none";
LDLoadQuestion();
LDQuiz.style.display = "block";
LDloadProgress();
}
function LDloadProgress(){
  for(let LDArrayIndex = 0; LDArrayIndex <= LDlastQuestion; LDArrayIndex++){

console.log("LOOP")
  }
}
function LDcheckAnswer(LDAnswer){
  if(LDAnswer == ArrayLDQuestions[LDcurrentQuestion].LDcorrect){
    LDscore++;

  }
  else{

  }
  if (LDcurrentQuestion < LDlastQuestion){
    LDcurrentQuestion++;
    LDLoadQuestion();
  }
  else{
    LDLoadScore();
  }
}
function LDLoadScore(){
  console.log("helloTest")
  LDscoreSection.style.display = "block";
  console.log("hiTest")
  const LDscorePercent = Math.round(100 * LDscore/ArrayLDQuestions.length);
  let LDimg = (LDscorePercent >= 100) ? "Youpassed.png" :
               (LDscorePercent <= 99) ? "Youfailed.png" :
              LDScoreSection.innerHTML = "<img src=" + LDimg + ">";
      LDscoreSection.innerHTML += "<p>" + LDscorePercent + "%</p>";
      console.log(LDscoreSection)

}
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
