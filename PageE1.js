//welcome paragraph hide/show
var AgilityWolf = 0
var StregnthWolf = 0
var HealingSkills = 0


$(document).ready(function(){
  $(".GameInfoHide").click(function(){
    $(".welcomeParagraph").hide();
  });
  $(".GameInfoShow").click(function(){
    $(".welcomeParagraph").show();
  });
});
//LM role hide/show
$(document).ready(function(){
  $(".LMInfoHide").click(function(){
    $(".LMParagraph").hide();
  });
  $(".LegMuscleTrait").click(function(){
    $(".LMParagraph").show();
  });
});
//Warrior role hide/show
$(document).ready(function(){
  $(".SJInfoHide").click(function(){
    $(".SJParagraph").hide();
  });
  $(".StrongJawTrait").click(function(){
    $(".SJParagraph").show();
  });
});
//Hunters role hide/show
$(document).ready(function(){
  $(".LDInfoHide").click(function(){
    $(".LDParagraph").hide();
  });
  $(".").click(function(){
    $(".LDParagraph").show();
  });
});
