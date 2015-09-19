
$(document).ready(function() {

  var tries= 0;
var myGuess;
var mystery;

function evaluate(myRand){
  // alert("press a number");
  // alert(mystery);


  $(".guess").click(function() {
    // alert(this.value); // or alert($(this).attr('id'));
    myGuess=this.value;
    // alert("guess "+myGuess);
    $(this).css("background", "red");
    $(this).attr('disabled', true);



    tries++;


    //alert(" rand "+ myRand);
   if (myRand === myGuess){
      $('h3#me').append('<p>You Win</p>');


    }

  if (myRand != myGuess) {

          if (tries === 7) {
            $('h3#me').append('<p>You Loser!</p>');

         }
      }


   if (myRand != myGuess) {

          if(myRand>myGuess){
           $('h3#me').append('<p>Too low</p>');
          }

          if(myRand<myGuess) {
             $('h3#me').append('<p>Too high</p>');
            }
          evaluate(myRand);
        }






  });
  };




function play(){
  var mystery= Math.floor((Math.random() * 100) + 1);
  evaluate(mystery);


};



  //if mystery > input "guess too low"
  //else "guess too low" tries++
  //else "out of tries"


// function loopy{
//
// };


    //alert("hi");

//setting up first tow
    for(i = 1; i <=25; i++) {
      var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
        $("#one").append($something);
        // alert($something.val());
        };

        $('#one').delegate('input[type=button]','click',function(){
      //  alert(this.value);
      //  $(this).css("background", "red");
      //  $(this).attr('disabled', true);
      });

//setting up second tow
      for(i = 26; i <=50; i++) {
        var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
          $("#two").append($something);
          // alert($something.val());
          };

          $('#two').delegate('input[type=button]','click',function(){
        //  alert(this.value);
        //  $(this).css("background", "red");
        //  $(this).attr('disabled', true);
        });

//setting up third row
        for(i = 51; i <=75; i++) {
          var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
            $("#three").append($something);
            // alert($something.val());
            };

            $('#three').delegate('input[type=button]','click',function(){
          //  alert(this.value);
          //  $(this).css("background", "red");
          //  $(this).attr('disabled', true);
          });


//setting up third rwo
          for(i = 76; i <=100; i++) {
            var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
              $("#four").append($something);
              // alert($something.val());
              };

              $('#four').delegate('input[type=button]','click',function(){
            //  alert(this.value);
            //  $(this).css("background", "red");
            //  $(this).attr('disabled', true);
            });



//start game

        $("#start").click(function() {
          // alert("hi");
          play();
        });

});



//
// };
//
//   $( "button#1" ).click(function() {
//     // $(this).css("background", "red");
//     loopy($(this).attr("value"));
//
//
//   });

// });
