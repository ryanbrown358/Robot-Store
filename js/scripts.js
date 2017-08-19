
// Highlight Each Robot and piece of hardware on mouseover, then remove it on mouse out
// On mouse over, add class highlight and on mouse out remove the same class
//This adds the highlight class to the #robo1 div
$('#robo1').mouseover(function(){
  $(this).addClass('highlight');
  // This removes the class on mouse out
  $(this).mouseout(function(){
    $(this).removeClass('highlight');
  });
});
$('#robo2').mouseover(function(){
  $(this).addClass('highlight');
  $(this).mouseout(function(){
    $(this).removeClass('highlight');
  });
});
$('#robo3').mouseover(function(){
  $(this).addClass('highlight');
  $(this).mouseout(function(){
    $(this).removeClass('highlight');
  });
});
// Search Function Stuff  on koeyn typing
//
$("#search").keyup(function() {
  find();
});
//search robots on submit clicking
function searchRobot(event) {
  event.preventDefault();
  //loading the content from robots.html
  $('#content').html('');
  $('#content').load('robots.html #content',function() {
    find();
  });
}
// searching robots function
  function find(){
    //extending jquey contains function to add case insensitive searhc
    $.extend($.expr[":"], {
  "containsIN": function(elem, i, match, array) {
  return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
  });
  //get search value
    var data=$('#search').val();
    //hide all robots
      $(".robot").css('display','none');
    $('#no-data').hide();
    //show only rbobots containing search text
    if($(" .robot:containsIN("+data+") ").length==0){
      $('#no-data').show();

    }else{
      $('#no-data').hide();
      $(" .robot:containsIN("+data+") ").css('display','block');

    }


  }


// Search Function for navbar
/* Should potentially redirect to the robots page on submit
then, display the results in a results div hiding all the robots except
for the result robots */
