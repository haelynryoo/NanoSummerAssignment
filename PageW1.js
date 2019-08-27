//welcome paragraph hide/show
// var LMLevel = 0
// var SJLevel = 0
// var LDLevel = 0
//
        // $(document).ready(function(){
            //   $(".LMTrait").click(function(){
        //     console.log(2)
        //     $("LMPara").slideToggle();
          //     console.log(1)
    //   });
    // });
    // $(document).ready(function(){
    //   $("SJTrait").click(function(){
    //     $("SJPara").slideToggle();
    //   });
      // });
      // $(document).ready(function(){
      //   $("LDTrait").click(function(){
      //     $("LDPara").slideToggle();
      //   });
      //     });


$(document).ready(function(){
  $(".LMTrait").click(function(){
    $(".LMPara").show();
  });
  $(".LMTrait").click(function(){
    $(".LMPara").hide();
  });
});
//LM role hide/show
$(document).ready(function(){
  $(".SJTrait").click(function(){
    $(".SJPara").show();
  });
  $(".SJTrait").click(function(){
    $(".SJPara").hide();
  });
});

//Warrior role hide/show
$(document).ready(function(){
  $(".LDTrait").click(function(){
    $(".LDPara").show();
  });
  $(".LDTrait").click(function(){
    $(".LDPara").hide();
  });
});
// //Hunters role hide/show
// $(document).ready(function(){
//   $(".LDInfoHide").click(function(){
//     $(".LDParagraph").hide();
//   });
//   $(".LoyaltyDeterminationTrait").click(function(){
//     $(".LDParagraph").show();
//   });
// });
