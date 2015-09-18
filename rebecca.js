
$(document).ready(function() {

var upper = 100;
var lower = 1;
var temp;
var mystery = 6;


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
       alert(this.value);
       $(this).css("background", "red");
       $(this).attr('disabled', true);
      });

//setting up second tow
      for(i = 26; i <=50; i++) {
        var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
          $("#two").append($something);
          // alert($something.val());
          };

          $('#two').delegate('input[type=button]','click',function(){
         alert(this.value);
         $(this).css("background", "red");
         $(this).attr('disabled', true);
        });

//setting up third row
        for(i = 51; i <=75; i++) {
          var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
            $("#three").append($something);
            // alert($something.val());
            };

            $('#three').delegate('input[type=button]','click',function(){
           alert(this.value);
           $(this).css("background", "red");
           $(this).attr('disabled', true);
          });


//setting up third rwo
          for(i = 76; i <=100; i++) {
            var $something= $('<input/>').attr({ type: 'button', class: "guess", id:'btn'+i, value:i});
              $("#four").append($something);
              // alert($something.val());
              };

              $('#four').delegate('input[type=button]','click',function(){
             alert(this.value);
             $(this).css("background", "red");
             $(this).attr('disabled', true);
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
