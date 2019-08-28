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
const start = document.getElementById("LMStart");
const quiz = document.getElementById("LMQuiz");
const question = document.getElementById("LMQuestions");
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

// //SJ Training code
const SJstart = document.getElementById("SJStart");
const SJquiz = document.getElementById("SJQuiz");
const SJquestion = document.getElementById("SJQuestions");
const SJChoiceA = document.getElementById("SJA");
const SJChoiceB = document.getElementById("SJB");
const SJChoiceC = document.getElementById("SJC");
const SJChoiceD = document.getElementById("SJD");
const progress = document.getElementById("SJProgress");
const score = document.getElementById("SJScore");
let SJTraitQs = [{
  question : "Every single dog has decended from what animal",
    LMChoiceA : "Foxes",
    LMChoiceB : "Wolves",
    LMChoiceC : "Penguin",
    LMChoiceD : "Horses",
    correct : "B"
},
{
  question : "In which fairytale does the wolf dress up as a grandmother",
    LMChoiceA : "Little Red Ridinghood",
    LMChoiceB : "Snow White",
    LMChoiceC : "Three Little Pigs",
    LMChoiceD : "The Ugly Duckling",
    correct : "A"
},
{
  question : "In which fairytale does the wolf attack pigs",
    LMChoiceA : "Beauty and the Beast",
    LMChoiceB : "Cinderella",
    LMChoiceC : "Three Little Pigs",
    LMChoiceD : "The Ugly Duckling",
    correct : "C"
},
{
  question : "What is a wolfs genus",
    LMChoiceA : "Lupin",
    LMChoiceB : "Lupis",
    LMChoiceC : "Canine",
    LMChoiceD : "Canis",
    correct : "C"
}];
// //LD Trait
const LMTrainingQuiz = document.getElementById("LDStart");
const LMquiz = document.getElementById("LDQuiz");
const LMquestion = document.getElementById("LDQuestions");
const LMChoiceA = document.getElementById("LDA");
const LMChoiceB = document.getElementById("LDB");
const LMChoiceC = document.getElementById("LDC");
const LMChoiceD = document.getElementById("LDD");
const progress = document.getElementById("LDProgress");
const score = document.getElementById("LDScore");
let LDTraitQs = [
{
  LMquestion : "What family is the wolf in?",
    LMChoiceA : "Feline",
    LMChoiceB : "Canine",
    LMChoiceC : "Anphibian",
    LMChoiceD : "Arthropods",
    LMcorrect : "B"
},
{
  question : "Which is the wolves closest relative?",
    LMChoiceA : "Lion",
    LMChoiceB : "Tiger",
    LMChoiceC : "Frog",
    LMChoiceD : "Dog",
    LMcorrect : "D"
},
{
  LMquestion : "What is a group of wolves called?",
  LMChoiceA : "Pride",
  LMChoiceB : "Pack",
  LMChoiceC : "Colony",
  LMChoiceD : "Troop",
  LMcorrect : "B"
},
{
  LMquestion : "How do wolves mark their territory",
    LMChoiceA : "Fighting",
    LMChoiceB : "Telling other wolves to back off",
    LMChoiceC : "Peeing",
    LMChoiceD : "Rolling around in the snow",
    LMcorrect : "C"
}];

  console.log("h")
const lastQuestion = questions.legnth - 1;
let currentQuestion = 0;
console.log("hi")
function renderQuestion() {
  let q = questions[currentQuestion];
  question.innerHTML = "<p>" + q.question + "</p>"
  LMChoiceA.innerHTML = q.LMChoiceA;
  LMChoiceB.innerHTML = q.LMChoiceB
  LMChoiceC.innerHTML = q.LMChoiceC
  LMChoiceD.innerHTML = q.LMChoiceD
}
function renderProgress(){
for(letqIndex = 0; qIndex <= lastQuestion; qIndex++){
LMprogress.innerHTML += "<div class = 'prog' id =" + qIndex +"><>"
}

}
LMTrainingQuiz.addEventListener("click",startQuiz);
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
