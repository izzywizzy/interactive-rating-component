

// Hide and Show Rating form on clicked function
$( "button" ).on( "click", function() {
   $(".rating-container").hide();
   $(".rating-container-thankyou").show();   
});

// Change text to the selected item  and add background color

 $(".list-group-item").click(function () {
    $(this).css("background-color","hsl(25, 97%, 53%)")
    var selectedRating = ($(this).text());
     $(".selected-rating").text("You selected " + selectedRating + " out of 5"); 
    
})
