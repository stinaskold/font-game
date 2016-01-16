
function Question(font, choices, answer) {
  this.font = font;
  this.choices = choices;
  this.answer = answer;
}

// var level1 = [
//   ["Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"],
//   ["Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"],
//   ["Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"],
//   ["Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"],
//   ["Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"]
// ];

var level1 = [
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"),
  new Question("Futura", ["futura.png", "minion.png"], "futura.png"),
  new Question("Baskerville", ["caslon.png", "baskerville.png"], "baskerville.png"),
  new Question("Helvetica", ["arial.png", "helvetica.png"], "helvetica.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png")
];

var level2 = [
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png")
];

var level3 = [
  new Question("Helvetica", ["arial.png", "helvetica.png"], "helvetica.png"),
  new Question("Baskerville", ["caslon.png", "baskerville.png"], "baskerville.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png"),
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], "gillsans.png")
];


// hämta knappen
$("button").click(function() {
    // På click, generera html för level 1
    createQuiz("1", level1);
});


// function createLevel(nr, level) {
//   var html = "";
//   html = "<h1 class='text-center'>Font game - Level" + nr + "</h1>";
//   html += "<main class='container row row-centered text-center'>";
//   createQuiz(html, level);
// }


function createQuiz(nr, questions) {

  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].font);
    var html = "";
    var img1 = "<img src='img/" + questions[i].choices[0] + "'>";
    // console.log("test: " + questions[i].choices[0]);
    var img2 = "<img src='img/" + questions[i].choices[1] + "'>";
    html = "<h1 class='text-center'>Font game - Level" + nr + "</h1>";
    html += "<main class='container row row-centered text-center'>";
    html += "<div class='row row-centered'>";
    html += "<h2 id='font'>" + questions[i].font + "</h2>";
    html += "<div class='col-xs-6 col-xs-offset-2' id='choice1'></div>";
    html += "<div class='col-xs-6 col-xs-offset-2' id='choice2'></div>";
    html += "</div>";
    html += "<div class='row row-centered points' id='counter'>You have 0/5 points. You need 4 points to go to level 2.</div>"
    $("body").html(html);
    $("#choice1").html(img1);
    $("#choice2").html(img2);

    var rightAnswer = questions[i].answer;

    console.log("Det rätta svaret är "+ rightAnswer)

    $("#choice1").click(function() {
      var image = $("#choice1").html;
      console.log(image.src);

    });
    $("#choice2").click(function() {
      Answer("Caslon");
    });
 }
}

var counter = 0;

function Answer(answer) {
  rightAnswer = $("#font").html();

    if (counter === 4) {
      createQuiz(level2);
      return;
    }
    if (answer === rightAnswer) {
      console.log("rätt");
      counter++;
      $("#counter").html("You have " + counter + "/5 points. You need 4 points to go to level 2.");
    }
    else {
      console.log("fel");
    }
}



// function Question(text, choices, answer) {
//   this.text = text;
//   this.choices = choices;
//   this.answer = answer;
// }
//
// Question.prototype.isCorrectAnswer = function(choice) {
//   return this.answer === choice;
// }
