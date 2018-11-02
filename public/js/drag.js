function Move_Line()
{
  var distance = jQuery('.no_2').offset().left - jQuery('.no_1').offset().left;
  var position_left = jQuery('.no_1').offset().left - jQuery('.line-box').offset().left + 10;
  jQuery(".line").width(distance);
  jQuery(".line").css('left', position_left);
}
function Move_Label()
{
  var position1 = jQuery('.no_1').offset().left - jQuery('.line-box').offset().left - 10;
  var position2 = jQuery('.no_2').offset().left - jQuery('.line-box').offset().left - 10;
  jQuery(".label-1").css('left',position1);
  jQuery(".label-2").css('left', position2)
}

function Change_Label()
{
  var position1 = jQuery('.no_1').offset().left - jQuery('.line-box').offset().left - 10;
  var position2 = jQuery('.no_2').offset().left - jQuery('.line-box').offset().left - 10;
}

jQuery( function() 
{
  jQuery(".draggable").draggable({ containment: "parent", axis : "x", drag: function( event, ui ) { 
    Move_Line();
    Move_Label(); 
    },});
} 
);