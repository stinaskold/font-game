
function Question(font, choices, answer) {
  this.font = font;
  this.choices = choices;
  this.answer = answer;
}

var level1 = [
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], 0),
  new Question("Futura", ["minion.png","futura.png", ], 1),
  new Question("Myriad Pro", ["myriadpro.png", "baskerville.png"], 0),
  new Question("Trajan", ["trajan.png", "courier.png"], 0),
  new Question("Times", ["lato.png", "times.png"], 1)
];

var level2 = [
  new Question("Baskerville", ["minion.png", "baskerville.png"], 1),
  new Question("Caslon", ["caslon.png", "times.png"], 0),
  new Question("Avenir", ["helvetica.png", "avenir.png"], 1),
  new Question("Arial", ["myriadpro.png", "arial.png"], 1),
  new Question("Georgia", ["georgia.png", "caslon.png"], 0)
];

var level3 = [
  new Question("Helvetica", ["arial.png", "helvetica.png"], 1),
  new Question("Lato", ["lato.png", "gillsans.png"], 0),
  new Question("Myriad Pro", ["myriadpro.png", "ptsans.png"], 0),
  new Question("Trajan", ["cinzel.png", "trajan.png"], 1),
  new Question("Avenir", ["nunito.png", "avenir.png"], 1)
];

var quiz = [level1, level2, level3];
var requiredPoints = [4, 4, 4];

var points;
var level;
var question;

// Get button, start game on click
$("#start").click(function() {
    startGame();
});

// Start a new game
function startGame() {
  points = 0;
  question = 0;
  level = 0;
  createQuestion();
}

// Print question
function createQuestion() {
  var html;
  var i;

  html = "<h1 class='text-center'>Font Game</h1>";
  html += "<main class='container row row-centered text-center'>";
  html += "<h2>Level " + (level + 1) + "</h2>";
  html += "<p class='col-sm-12'>Click on the sentence that uses...</p>";
  html += "<div class='row row-centered'>";
  html += "<h3 id='font'>" + quiz[level][question].font + "</h3>";
  for(i = 0; i < quiz[level][question].choices.length; i++) {
    html += "<div class='col-xs-6 col-xs-offset-2' id='choice" + (i + 1) + "'><img src='img/" + quiz[level][question].choices[i] + "'></div>";
  }
  html += "</div>";
  html += "<div class='row row-centered points' id='counter'>This is question " + (question + 1) + "/" + quiz[level].length + ". You have " + points + " points. You need " + (requiredPoints[level] - points) + " more points to go to the next level.</div>";
  html += "</main>"
  $("body").html(html);

  // Create event handlers
  for(i = 0; i < quiz[level][question].choices.length; i++) {
    $("#choice" + (i + 1)).click(choiceEventHandler(i));
  }
}

// Function to be called when choice is clicked
function choiceEventHandler(answer) {
  return function() {
    createAnswer(answer);
  }
}

// Check if answer from user is correct
function createAnswer(answer) {
  // Give one point if answer is correct
  if (quiz[level][question].answer === answer) {
    points++;
  }

  // Check if required points for this level
  if (points >= requiredPoints[level]) {

        points = 0;
        question = 0;
        level++;

        // If last level is finished, congratulate, else go to next level start-page
        if (level >= quiz.length) {
          printCongratulations();
        } else {
          printNextLevel();
        }

  } else {
    question++;
    // If no more questions in level, end game and show a fail message, else print new question
    if (question >= quiz[level].length) {
        printFailed();
    } else {
        createQuestion();
    }
  }
}

// Print message: finished level, go to next level

function printNextLevel() {
  var html;
  html = "<h1 class='text-center'>Font Game</h1>";
  html += "<main class='container row row-centered text-center'>";
  html += "<h3>Yay, you finished Level " + level + "! Let's start level " + (level + 1) +".</h3>";
  html += "<button id='nextLevel'>Go to next level</button>";
  html += "</main>";
  $("body").html(html);

  $("#nextLevel").click(function() {
      createQuestion();
  });
}

// Congratulation message and button to play again
function printCongratulations() {
  var html;
  html = "<h1 class='text-center'>Font Game</h1>";
  html += "<main class='container row row-centered text-center'>";
  html += "<h3>Congratulations! You are a font master!</h3>";
  html += "<button id='playAgain'>Play again</button>";
  html += "</main>";
  $("body").html(html);

  $("#playAgain").click(function() {
      startGame();
  });
}

// Fail message and button to play again
function printFailed() {
  var html;
  html = "<h1 class='text-center'>Font Game</h1>";
  html += "<main class='container row row-centered text-center'>";
  html += "<h3>Sorry, you didn't get enough points.</h3>";
  html += "<button id='playAgain'>Try again</button>";
  html += "</main>";
  $("body").html(html);

  $("#playAgain").click(function() {
      startGame();
  });
}
