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
    LMQuestions: "What is the wolfs population in Yellow Stone National Park",
    LMChoiceA: "104",
    LMChoiceB: "1312",
    LMChoiceC: "56",
    LMChoiceD: "276",
    LMcorrect: "A"
  },
  {
    LMQuestions: "Which wolves will mate and have pups",
    LMChoiceA: "All female wolves in the pack",
    LMChoiceB: "The Hunters",
    LMChoiceC: "It is random",
    LMChoiceD: "Alpha Female",
    LMcorrect: "D"
  },
  {
    LMQuestions: "What eye color is a wolf born with",
    LMChoiceA: "yellow",
    LMChoiceB: "brown",
    LMChoiceC: "blue",
    LMChoiceD: "green",
    LMcorrect: "C"
  },
  {
    LDQuestions: "What time period does the earliest wolf drawings date back to",
    LDChoiceA: "2019",
    LDChoiceB: "1765",
    LDChoiceC: "20000 B.C",
    LDChoiceD: "1500 A.D",
    LDcorrect: "C"
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
  console.log("Test1")
  LMscoreSection.style.display = "block";
  console.log("Test")
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
    SJQuestions: "What is a wolf diet",
    SJChoiceA: "Only air and sunligh",
    SJChoiceB: "carnivore",
    SJChoiceC: "omnivore",
    SJChoiceD: "herbivore",
    SJcorrect: "B"
  },
  {
    SJQuestions: "What is the name of a famous wolf",
    SJChoiceA: "The big bad wolf",
    SJChoiceB: "Wolf Man",
    SJChoiceC: "Wolverine",
    SJChoiceD: "She Wolf",
    SJcorrect: "A"
  },
  {
    SJQuestions: "How much can wolves eat in one sitting",
    SJChoiceA: "15kg",
    SJChoiceB: "3kg",
    SJChoiceC: "1kg",
    SJChoiceD: "9kg",
    SJcorrect: "D"
  },
  {
    LDQuestions: "what is the average size of a pack of wolves ",
    LDChoiceA: "2",
    LDChoiceB: "10",
    LDChoiceC: "30",
    LDChoiceD: "700",
    LDcorrect: "C"
  }
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

let LDscoreSection = document.getElementById("LDscoreSection");
console.log(LDscoreSection)

let ArrayLDQuestions = [
  {
    LDQuestions: "What type of animal is a wolf?",
    LDChoiceA: "marsupial",
    LDChoiceB: "mammal",
    LDChoiceC: "reptile",
    LDChoiceD: "amphibian",
    LDcorrect: "B"
  },
  {
    LDQuestions: "what is a baby wolf called",
    LDChoiceA: "calf",
    LDChoiceB: "pup",
    LDChoiceC: "baby",
    LDChoiceD: "small wolf",
    LDcorrect: "B"
  },
  {
    LDQuestions: "How do wolves normally hunt",
    LDChoiceA: "Along",
    LDChoiceB: "As a pack",
    LDChoiceC: "Sometimes alone sometimes as a pack",
    LDChoiceD: "they eat plants",
    LDcorrect: "B"
  },
  {
    LDQuestions: "How are wolves portrayed in stories",
    LDChoiceA: "As the brave War hero",
    LDChoiceB: "the damsel in distress",
    LDChoiceC: "the villan",
    LDChoiceD: "the witness",
    LDcorrect: "C"
  }
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
  // let RandomNumber = Math.floor(Math.random() * 2)+1;
  let RandomNumber = Math.random() >=0.5;
  console.log(RandomNumber)
  if(RandomNumber == true){
    energy = energy + findFoodY
    console.log("hi")
  }
  else if(RandomNumber == false){
    energy = energy - findFoodN;
    console.log("bye")
  }
  console.log(energy)
  $(".energyCountPara").html("<p>You currently have " + energy + " units</p>");
  }
);
