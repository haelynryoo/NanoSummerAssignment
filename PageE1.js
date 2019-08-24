//welcome paragraph hide/show
var SSLevel = 0
var HFLevel= 0
var TSLevel = 0


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
  $(".SSInfoHide").click(function(){
    $(".SSParagraph").hide();
  });
  $(".SmellStregnthTrait").click(function(){
    $(".SSParagraph").show();
  });
});
//Warrior role hide/show
$(document).ready(function(){
  $(".HFInfoHide").click(function(){
    $(".HFParagraph").hide();
  });
  $(".HeightFatTrait").click(function(){
    $(".HFParagraph").show();
  });
});
//Hunters role hide/show
$(document).ready(function(){
  $(".TSInfoHide").click(function(){
    $(".TSParagraph").hide();
  });
  $(".TuskStregnthTrait").click(function(){
    $(".TSParagraph").show();
  });
});
