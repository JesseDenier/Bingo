$(document).ready(function () {
  // Adds a hidden heart img to every card on page load.
  $("<img>")
    .attr("src", "assets/imgs/Heart.png")
    .hide()
    .addClass("heart-image")
    .appendTo(".card");

  // Initialize card states based on localStorage on page load.
  $(".card").each(function () {
    // Creates a new variable saveState that has the same truthy value as the currentState in local storage.
    var savedState = localStorage.getItem("cardState_" + $(this).attr("id"));
    // Applies the correct toggle state depending on truthiness of savedState.
    if (savedState === "true") {
      $(this).find("img").toggle();
    }
  });
});

$(".card").on("click", function () {
  // Toggle between hiding text/showing heart and hiding heart/showing text in each card.
  $(this).find("img").toggle();
  // Sets variable "currentState" to true if img is visible, false if not.
  var currentState = $(this).find("img").is(":visible");
  // Pushes a localStorage item for each card with its ID, and adds a truthy value to it.
  localStorage.setItem("cardState_" + $(this).attr("id"), currentState);
});
