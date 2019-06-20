$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  $(".wins-text").text("Wins: " + wins);
  $(".losses-text").text("Losses: " + losses);

  var gemImages = [
    "assets/images/blue gem.png",
    "assets/images/green gem.png",
    "assets/images/purple gem.png",
    "assets/images/red gem.png"
  ];

  function gemValues() {
    for (var i = 0; i < gemImages.length; i++) {
      var image = $("<img>");
      image.addClass("gem-buttons gem gem-image");
      image.attr("src", gemImages[i]);
      image.attr("data-letter", Math.floor(Math.random() * 12) + 1);
      $("#gems").append(image);
    }
  }

  function playGame() {
    var counter = 0;
    $(".your-guess").text("Your points: " + counter);

    var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

    $(".number-to-guess").text("Number to guess: " + targetNumber);
    console.log(targetNumber);

    $(".gem-buttons").on("click", function() {

      gemIsClicked = true;
      var gemValue = $(this).attr("data-letter");
      gemValue = parseInt(gemValue);
      counter += gemValue;

      console.log(gemValue);
      console.log(counter);

      $(".your-guess").text("Your points: " + counter);

      if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $(".wins-text").text("Wins: " + wins);
        $("#gems").empty();
        gemValues();
        playGame();
      } else if (counter >= targetNumber) {
        alert("You lose!");
        losses++;
        $(".losses-text").text("Losses: " + losses);
        $("#gems").empty();
        gemValues();
        playGame();
      }
    });
  }

  gemValues();
  playGame();
});
