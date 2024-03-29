$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $("body").append(dancer.$node);
    window.dancers.push(dancer.$node);
  });


  $(".lineUpButton").on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i]).css('left', '30px');      
    }
  });

  $("body").on('mouseover', '.dancer', function(event) {
    $('.dancer').animate({height: "50px"}).animate({width: "50px"});
  });

  $(".partnersOverlapButton").on('click', function(event) {
      //make a copy of the dancers array
      //sort through the copy by positioning
      // if the sorted copy of the array's length is even
        // iterate through every pair of items in the loop
          // overlap the current pair of items
  });


});

//     var dancerLineUpFunctionName = $(this).data('dancer-lineUp-function-name');

//     var dancerLineUpFunction = window[dancerLineUpFunctionName];

//     var dancerLineUp = new dancerLineUpFunction(
//       for (var i = 0; i < window.dancers.length; i++) {
//         var currentDancer = window.dancers[i];
//         currentDancer.lineUp();
//       }
//     );
//   });
// });



