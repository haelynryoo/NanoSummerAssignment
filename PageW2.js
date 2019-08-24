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
$(".FindFood").click(function() {
var findFoodRandom = Math.floor(Math.random() * 2);
if (findFoodRandom = 0){
  energy = energy + 25;
$(".energyCount").html("You currently have" + energy + "Energy Units ");
}
else if (findFoodRandom = 1){
  energy = energy - 5;
  $(".energyCount").html("You currently have" + energy + "Energy Units ");
}

});
