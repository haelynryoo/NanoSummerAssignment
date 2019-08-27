let energy = 30;
let LMLevel = 0;
  let LMexp = 0;
let SJLevel = 0;
  let SJexp = 0;
let LDLevel = 0;
  let LDexp = 0;

//sleep button code
//LMTraining code
const start = document.getElementById("LMStart");
const quiz = document.getElementById("LMQuiz");
const question = document.getElementById("questions");
const choiceA = document.getElementById("LMA");
const choiceB = document.getElementById("LMB");
const choiceC = document.getElementById("LMC");
const choiceC = document.getElementById("LMD");
const progress = document.getElementById("LMProgress");
const score = document.getElementById("LMScore");

let LDTraitQs = [{

},
{

},
{

},
{

},
{

},
{

},
{

},
{

},
{

},
{

}];
// //LM Training code
// let LDTraitQs = ['','','','','','','','','','',''];
// //SJ Training code
// let LDTraitQs = ['','','','','','','','','','',''];
// //LD Trait
// let LDTraitQs = ['','','','','','','','','','',''];


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

$(".energyCount").html('You currently have" + energy + "Energy Units ');
});
