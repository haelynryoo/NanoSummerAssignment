const SSTraining = document.getElementById("SSTraining");
const SSquiz = document.getElementById("SSQuiz");
const SSQuestions = document.getElementById("SSQuestions");
const SSChoiceA = document.getElementById("SSA");
const SSChoiceB = document.getElementById("SSB");
const SSChoiceC = document.getElementById("SSC");
const SSChoiceD = document.getElementById("SSD");
const SSprogress = document.getElementById("SSprogress");
let SSscoreSection = document.getElementById("SSscoreSection");
console.log(SSscoreSection)

let ArraySSQuestions = [
  {
    SSQuestions: "What adjective is normally used to describe an Elephant?",
    SSChoiceA: "Big",
    SSChoiceB: "Mean",
    SSChoiceC: "Small",
    SSChoiceD: "Bossy",
    SScorrect: "A"
  },
  {
    SSQuestions: "How many species of Elephant are there?",
    SSChoiceA: "1",
    SSChoiceB: "5",
    SSChoiceC: "3",
    SSChoiceD: "10",
    SScorrect: "C"
  },
  {
    SSQuestions: "What are Elephant Tusks made out of",
    SSChoiceA: "plastic",
    SSChoiceB: "cartilage",
    SSChoiceC: "wood",
    SSChoiceD: "ivory",
    SScorrect: "D"
  },
  ];

const SSlastQuestion = ArraySSQuestions.length - 1;
let SScurrentQuestion = 0;
let SSscore = 0;
function SSLoadQuestion(){
let SSq = ArraySSQuestions[SScurrentQuestion];
SSQuestions.innerHTML = "<p>" + SSq.SSQuestions +"</p>";
SSChoiceA.innerHTML = SSq.SSChoiceA;
SSChoiceB.innerHTML = SSq.SSChoiceB;
SSChoiceC.innerHTML = SSq.SSChoiceC;
SSChoiceD.innerHTML = SSq.SSChoiceD;
}
SSTraining.addEventListener("click",SSstartQuiz);
function SSstartQuiz(){
SSTraining.style.display = "none";
SSLoadQuestion();
SSQuiz.style.display = "block";
SSloadProgress();
}
function SSloadProgress(){
  for(let SSArrayIndex = 0; SSArrayIndex <= SSlastQuestion; SSArrayIndex++){

  }
}
function SScheckAnswer(SSAnswer){
  if(SSAnswer == ArraySSQuestions[SScurrentQuestion].SScorrect){
    SSscore++;

  }
  else{

  }
  if (SScurrentQuestion < SSlastQuestion){
    SScurrentQuestion++;
    SSLoadQuestion();
  }
  else{
    SSLoadScore();
  }
}
function SSLoadScore(){
  console.log("helloTest")
  SSscoreSection.style.display = "block";
  console.log("hiTest")
  const SSscorePercent = Math.round(100 * SSscore/ArraySSQuestions.length);
  let SSimg = (SSscorePercent >= 100) ? "Youpassed.png" :
               (SSscorePercent <= 99) ? "Youfailed.png" :
              SSScoreSection.innerHTML = "<img src=" + SSimg + ">";
      SSscoreSection.innerHTML += "<p>" + SSscorePercent + "%</p>";
      console.log(SSscoreSection)

}
//hf
const HFTraining = document.getElementById("HFTraining");
const HFquiz = document.getElementById("HFQuiz");
const HFQuestions = document.getElementById("HFQuestions");
const HFChoiceA = document.getElementById("HFA");
const HFChoiceB = document.getElementById("HFB");
const HFChoiceC = document.getElementById("HFC");
const HFChoiceD = document.getElementById("HFD");
const HFprogreHF = document.getElementById("HFprogreHF");
let HFscoreSection = document.getElementById("HFscoreSection");
console.log(HFscoreSection)

let ArrayHFQuestions = [
  {
    HFQuestions: "What is a baby elephant called",
    HFChoiceA: "pup",
    HFChoiceB: "Calf",
    HFChoiceC: "Omega",
    HFChoiceD: "Baby",
    HFcorrect: "B"
  },
  {
    HFQuestions: "What is a group of elephants called",
    HFChoiceA: "Circus of Elephants",
    HFChoiceB: "Pack Of Elephants",
    HFChoiceC: "Family Of Elephants",
    HFChoiceD: "Herd Of Elephants",
    HFcorrect: "D"
  },
  {
    HFQuestions: "Who leads the Herd of Elephants?",
    HFChoiceA: "Female",
    HFChoiceB: "Males",
    HFChoiceC: "Calfs",
    HFChoiceD: "Humans",
    HFcorrect: "A"
  },
  ];

const HFlastQuestion = ArrayHFQuestions.length - 1;
let HFcurrentQuestion = 0;
let HFscore = 0;
function HFLoadQuestion(){
let HFq = ArrayHFQuestions[HFcurrentQuestion];
HFQuestions.innerHTML = "<p>" + HFq.HFQuestions +"</p>";
HFChoiceA.innerHTML = HFq.HFChoiceA;
HFChoiceB.innerHTML = HFq.HFChoiceB;
HFChoiceC.innerHTML = HFq.HFChoiceC;
HFChoiceD.innerHTML = HFq.HFChoiceD;
}
HFTraining.addEventListener("click",HFstartQuiz);
function HFstartQuiz(){
HFTraining.style.display = "none";
HFLoadQuestion();
HFQuiz.style.display = "block";
HFloadProgreHF();
}
function HFloadProgreHF(){
  for(let HFArrayIndex = 0; HFArrayIndex <= HFlastQuestion; HFArrayIndex++){

  }
}
function HFcheckAnswer(HFAnswer){
  if(HFAnswer == ArrayHFQuestions[HFcurrentQuestion].HFcorrect){
    HFscore++;

  }
  else{

  }
  if (HFcurrentQuestion < HFlastQuestion){
    HFcurrentQuestion++;
    HFLoadQuestion();
  }
  else{
    HFLoadScore();
  }
}
function HFLoadScore(){
  console.log("helloTest")
  HFscoreSection.style.display = "block";
  console.log("hiTest")
  const HFscorePercent = Math.round(100 * HFscore/ArrayHFQuestions.length);
  let HFimg = (HFscorePercent >= 100) ? "YoupaHFed.png" :
               (HFscorePercent <= 99) ? "Youfailed.png" :
              HFScoreSection.innerHTML = "<img src=" + HFimg + ">";
      HFscoreSection.innerHTML += "<p>" + HFscorePercent + "%</p>";
      console.log(HFscoreSection)

}
//TS
const TSTraining = document.getElementById("TSTraining");
const TSquiz = document.getElementById("TSQuiz");
const TSQuestions = document.getElementById("TSQuestions");
const TSChoiceA = document.getElementById("TSA");
const TSChoiceB = document.getElementById("TSB");
const TSChoiceC = document.getElementById("TSC");
const TSChoiceD = document.getElementById("TSD");
const TSprogreTS = document.getElementById("TSprogreTS");
let TSscoreSection = document.getElementById("TSscoreSection");
console.log(TSscoreSection)

let ArrayTSQuestions = [
  {
    TSQuestions: "What type of animal is an elephant",
    TSChoiceA: "Amphibian",
    TSChoiceB: "Marsupial",
    TSChoiceC: "Mammal",
    TSChoiceD: "Reptile",
    TScorrect: "B"
  },
  {
    TSQuestions: "What does an elephant eat?",
    TSChoiceA: "Other Elephants",
    TSChoiceB: "Plants",
    TSChoiceC: "Smaller Animals",
    TSChoiceD: "Fish",
    TScorrect: "B"
  },
  {
    TSQuestions: "What do long tusks indicate about an elephant?",
    TSChoiceA: "Its gender",
    TSChoiceB: "Its stregnth",
    TSChoiceC: "Its Age",
    TSChoiceD: "Its personality",
    TScorrect: "C"
  },
  ];

const TSlastQuestion = ArrayTSQuestions.length - 1;
let TScurrentQuestion = 0;
let TSscore = 0;
function TSLoadQuestion(){
let TSq = ArrayTSQuestions[TScurrentQuestion];
TSQuestions.innerHTML = "<p>" + TSq.TSQuestions +"</p>";
TSChoiceA.innerHTML = TSq.TSChoiceA;
TSChoiceB.innerHTML = TSq.TSChoiceB;
TSChoiceC.innerHTML = TSq.TSChoiceC;
TSChoiceD.innerHTML = TSq.TSChoiceD;
}
TSTraining.addEventListener("click",TSstartQuiz);
function TSstartQuiz(){
TSTraining.style.display = "none";
TSLoadQuestion();
TSQuiz.style.display = "block";
TSloadProgreTS();
}
function TSloadProgreTS(){
  for(let TSArrayIndex = 0; TSArrayIndex <= TSlastQuestion; TSArrayIndex++){

  }
}
function TScheckAnswer(TSAnswer){
  if(TSAnswer == ArrayTSQuestions[TScurrentQuestion].TScorrect){
    TSscore++;

  }
  else{

  }
  if (TScurrentQuestion < TSlastQuestion){
    TScurrentQuestion++;
    TSLoadQuestion();
  }
  else{
    TSLoadScore();
  }
}
function TSLoadScore(){
  console.log("helloTest")
  TSscoreSection.style.display = "block";
  console.log("hiTest")
  const TSscorePercent = Math.round(100 * TSscore/ArrayTSQuestions.length);
  let TSimg = (TSscorePercent >= 100) ? "YoupaTSed.png" :
               (TSscorePercent <= 99) ? "Youfailed.png" :
              TSScoreSection.innerHTML = "<img src=" + TSimg + ">";
      TSscoreSection.innerHTML += "<p>" + TSscorePercent + "%</p>";
      console.log(TSscoreSection)

}
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
