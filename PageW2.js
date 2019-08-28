let energy = 30;
let LMLevel = 0;
  let LMexp = 0;
let SJLevel = 0;
  let SJexp = 0;
let LDLevel = 0;
  let LDexp = 0;

//sleep button code
//LMTraining code
LMStart.addEventListener("click",LMTraining);
console.log(hi)
const LMstart = document.getElementById("LMStart");
const LMquiz = document.getElementById("LMQuiz");
const LMquestion = document.getElementById("LMQuestions");
const LMChoiceA = document.getElementById("LMA");
const LMChoiceB = document.getElementById("LMB");
const LMChoiceC = document.getElementById("LMC");
const LMChoiceD = document.getElementById("LMD");
const LMprogress = document.getElementById("LMProgress");
const LMscore = document.getElementById("LMScore");

let LMTraitQs = [{
question : "What is the leader of a wolf pack called?",
LMChoiceA : "Number One",
LMChoiceB : "Alpha",
LMChoiceC : "Omega",
LMChoiceD : "Boss",
correct : "B"},
{question : "What is the scientific name of the wolf",
  LMChoiceA : "Lupin Anther",
  LMChoiceB : "Animalia Wolfia",
  LMChoiceC : "amphiphilic Lupic",
  LMChoiceD : "Canis Lupis",
  correct : "D"},
{question : "In which fairytale does the wolf attack pigs",
  LMChoiceA : "Beauty and the Beast",
  LMChoiceB : "Cinderella",
  LMChoiceC : "Three Little Pigs",
  LMChoiceD : "The Ugly Duckling",
  correct : "C"},
{question : "In which fairytale does the wolf attack pigs",
  LMChoiceA : "Beauty and the Beast",
  LMChoiceB : "Cinderella",
  LMChoiceC : "Three Little Pigs",
  LMChoiceD : "The Ugly Duckling",
  correct : "C"},
];
console.log("LM TEST")
const LMlastQuestion = LMquestions.legnth - 1;
let LMcurrentQuestion = 0;
console.log("hi")
function LMrenderQuestion() {
let LMq = LMquestions[LMcurrentQuestion];
LMquestion.innerHTML = "<p>" + LMq.question + "</p>"
LMChoiceA.innerHTML = q.LMChoiceA;
LMChoiceB.innerHTML = q.LMChoiceB
LMChoiceC.innerHTML = q.LMChoiceC
LMChoiceD.innerHTML = q.LMChoiceD
}
function renderProgress(){
for(let LMqIndex = 0; qIndex <= LMlastQuestion; LMqIndex++){
LMprogress.innerHTML += "<div class = 'prog' id =" + LMqIndex +"><>"
}

}


// //SJ Training code
const SJstart = document.getElementById("SJStart");
const SJquiz = document.getElementById("SJQuiz");
const SJquestion = document.getElementById("SJQuestions");
const SJChoiceA = document.getElementById("SJA");
const SJChoiceB = document.getElementById("SJB");
const SJChoiceC = document.getElementById("SJC");
const SJChoiceD = document.getElementById("SJD");
const progress = document.getElementById("SJProgress");
const LMscore = document.getElementById("SJScore");
let SJTraitQs = [{
  LMquestion : "Every single dog has decended from what animal",
    LMChoiceA : "Foxes",
    LMChoiceB : "Wolves",
    LMChoiceC : "Penguin",
    LMChoiceD : "Horses",
    LMcorrect : "B"
},
{
  LMquestion : "In which fairytale does the wolf dress up as a grandmother",
    LMChoiceA : "Little Red Ridinghood",
    LMChoiceB : "Snow White",
    LMChoiceC : "Three Little Pigs",
    LMChoiceD : "The Ugly Duckling",
    LMcorrect : "A"
},
{
  LMquestion : "In which fairytale does the wolf attack pigs",
    LMChoiceA : "Beauty and the Beast",
    LMChoiceB : "Cinderella",
    LMChoiceC : "Three Little Pigs",
    LMChoiceD : "The Ugly Duckling",
    LMcorrect : "C"
},
{
  LMquestion : "What is a wolfs genus",
    LMChoiceA : "Lupin",
    LMChoiceB : "Lupis",
    LMChoiceC : "Canine",
    LMChoiceD : "Canis",
    LMcorrect : "C"
}];
console.log("h")
const SJlastQuestion = SJquestions.legnth - 1;
let SJcurrentQuestion = 0;
console.log("hi")
function SJrenderQuestion() {
let SJq = SJquestions[SJcurrentQuestion];
question.innerHTML = "<p>" + q.question + "</p>"
SJChoiceA.innerHTML = q.LMChoiceA;
SJChoiceB.innerHTML = q.LMChoiceB
SJChoiceC.innerHTML = q.LMChoiceC
SJChoiceD.innerHTML = q.LMChoiceD
}
function renderProgress(){
for(let SJqIndex = 0; qIndex <= SJlastQuestion; SJqIndex++){
SJprogress.innerHTML += "<div class = 'SJprog' id =" + SJqIndex +"><>"
}

}
SJTrainingQuiz.addEventListener("click",startQuiz);

// //LD Trait
const LDTrainingQuiz = document.getElementById("LDStart");
const LDquiz = document.getElementById("LDQuiz");
const LDquestion = document.getElementById("LDQuestions");
const LDChoiceA = document.getElementById("LDA");
const LDChoiceB = document.getElementById("LDB");
const LDChoiceC = document.getElementById("LDC");
const LDChoiceD = document.getElementById("LDD");
const LDprogress = document.getElementById("LDProgress");
const LDscore = document.getElementById("LDScore");
let LDTraitQs = [
{
  LMquestion : "What family is the wolf in?",
    LDChoiceA : "Feline",
    LDChoiceB : "Canine",
    LDChoiceC : "Anphibian",
    LDChoiceD : "Arthropods",
    LDcorrect : "B"
},
{
  LDquestion : "Which is the wolves closest relative?",
    LDChoiceA : "Lion",
    LDChoiceB : "Tiger",
    LDChoiceC : "Frog",
    LDChoiceD : "Dog",
    LDcorrect : "D"
},
{
  LDquestion : "What is a group of wolves called?",
  LDChoiceA : "Pride",
  LDChoiceB : "Pack",
  LDChoiceC : "Colony",
  LDChoiceD : "Troop",
  LDcorrect : "B"
},
{
  LDquestion : "How do wolves mark their territory",
    LDChoiceA : "Fighting",
    LDChoiceB : "Telling other wolves to back off",
    LDChoiceC : "Peeing",
    LDChoiceD : "Rolling around in the snow",
    LDcorrect : "C"
}];
console.log("h")
const LDlastQuestion = LDquestions.legnth - 1;
let LDcurrentQuestion = 0;
console.log("hi")
function LDrenderQuestion() {
let LDq = LDquestions[LDcurrentQuestion];
LDquestion.innerHTML = "<p>" + LDq.question + "</p>"
LDChoiceA.innerHTML = q.LDChoiceA;
LDChoiceB.innerHTML = q.LDChoiceB
LDChoiceC.innerHTML = q.LDChoiceC
LDChoiceD.innerHTML = q.LDChoiceD
}
function renderProgress(){
for(let LDqIndex = 0; qIndex <= LDlastQuestion; LDqIndex++){
LDprogress.innerHTML += "<div class = 'LDprog' id =" + LDqIndex +"><>"
}

}
LDTrainingQuiz.addEventListener("click",startQuiz);

//find food trait---------------------------------
// $(document).ready(function(){
$(".FindFood").click(function() {
  console.log(hi)
let findFoodRandom = Math.floor(Math.random() * 2);
console.log(mathRandomFoodWorks);
if (findFoodRandom = 0){
  energy = energy + 25;
  console.log(energyPlus25);

console.log(updateEnergyParaGood);
}
else if (findFoodRandom = 1){
  energy = energy - 5;
  console.log(energyMinus5);
console.log(updateEnergyParaBad);
}
});
.energyCount.innerHTML = "you currently have "  + energy +" energy units"
// $(".energyCount").innerHTML('You currently have" + energy + "Energy Units ');
});
