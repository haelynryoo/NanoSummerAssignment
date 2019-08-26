var energy = 30;
var LMLevel = 0;
  var LMexp = 0;
var SJLevel = 0;
  var SJexp = 0;
var LDLevel = 0;
  var LDexp = 0;

//sleep button code

//LM Training code

//SJ Training code

//LD Trait

//find food trait
$(document).ready(function(){
$(".FindFood").click(function() {
  console.log(hi)
var findFoodRandom = Math.floor(Math.random() * 2);
console.log(mathRandomFoodWorks);
if (findFoodRandom = 0){
  energy = energy + 25;
  console.log(energyPlus25);
$(".energyCount").html("You currently have" + energy + "Energy Units ");
console.log(updateEnergyParaGood);
}
else if (findFoodRandom = 1){
  energy = energy - 5;
  console.log(energyMinus5);
  $(".energyCount").html("You currently have" + energy + "Energy Units ");
console.log(updateEnergyParaBad);
}
});
});
