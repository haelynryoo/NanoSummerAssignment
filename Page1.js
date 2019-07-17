//welcome paragraph hide/show
$(document).ready(function(){
  $(".GameInfoHide").click(function(){
    $(".welcomeParagraph").hide();
  });
  $(".GameInfoShow").click(function(){
    $(".welcomeParagraph").show();
  });
});
//alpha role hide/show
$(document).ready(function(){
  $(".AlphaInfoHide").click(function(){
    $(".AlphaParagraph").hide();
  });
  $(".handleAlphaPressed").click(function(){
    $(".AlphaParagraph").show();
  });
});
//Warrior role hide/show
$(document).ready(function(){
  $(".WarriorInfoHide").click(function(){
    $(".WarriorParagraph").hide();
  });
  $(".handleWarriorPressed").click(function(){
    $(".WarriorParagraph").show();
  });
});
//Hunters role hide/show
$(document).ready(function(){
  $(".HunterInfoHide").click(function(){
    $(".HunterParagraph").hide();
  });
  $(".handleHunterPressed").click(function(){
    $(".HunterParagraph").show();
  });
});
$(document).ready(function(){
  $(".HealerInfoHide").click(function(){
    $(".HealerParagraph").hide();
  });
  $(".handleHealerPressed").click(function(){
    $(".HealerParagraph").show();
  });
});
