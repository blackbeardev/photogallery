$(document).ready(function() {
  //Declare variables
  var category,
      title,
      desc,
      overlay;

  //Set up an event listener for when the user clicks on a nav item
  $("nav a").on("click", function() {
    //Remove the "current" class from all nav items
    $("nav li.current").removeClass("current");
    //Add the "current" class to the parent of the clicked element
    $(this).parent().addClass("current");

    //Set the text for the heading
    $("#heading").text($(this).text());

    //Get and filter the link text - replace any spaces with a dash
    category = $(this).text().toLowerCase().replace(" ", "-");

    //Remove the "hidden" class if "all-projects" is selected
    if(category === "all-projects") {
      $("ul#gallery li:hidden").fadeIn("slow").removeClass("hidden");
      //Otherwise
    } else {
      //Loop through each of the gallery items
      $("ul#gallery li").each(function() {
        //If the item doesn't have the class that matches the category
        if(!$(this).hasClass(category)) {
          //Then add the class "hidden"
          $(this).hide().addClass("hidden");
          //Otherwise
        } else {
          //Fade the item in and remove the class "hidden"
          $(this).fadeIn("slow").removeClass("hidden");
        }
      });
    }
    //Stop the link behaviour
    return false;
  });

  //Create an event listener for when the mouse enters a gallery item
  $("ul#gallery li").on("mouseenter", function() {
    //Get the value of the data attributes - title and desc
    title = $(this).children().data("title");
    desc = $(this).children().data("desc");

    //Check if there is a title and description
    if(desc === null) {
      desc = "Click to enlarge";
    }

    if(title === null) {
      title = "";
    }

    //Create an overlay div
    $(this).append("<div class='overlay'></div>");
    //Get the overlay div
    overlay = $(this).children(".overlay");
    //Add html to the overlay
    overlay.html("<h3>" + title + "</h3></p>" + desc + "</p>");
    //Fade in the overlay
    overlay.fadeIn(800);

  });

  //Create a mouseleave event listener
  $("ul#gallery li").on("mouseleave", function() {
    //Create an overlay div
    $(this).append("<div class='overlay'></div>");
    //Get the overlay div
    overlay = $(this).children(".overlay");
    //Fade out the overlay
    overlay.fadeOut(500);
  });

});
