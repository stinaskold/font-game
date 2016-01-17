var test = "mattias";
console.log(test.length);

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
  new Question("Gill Sans", ["gillsans.png", "caslon.png"], 1),
  new Question("Futura", ["minion.png","futura.png", ], 2),
  new Question("Myriad Pro", ["myriadpro.png", "baskerville.png"], 1),
  new Question("Trajan", ["trajan.png", "courier.png"], 1),
  new Question("Times", ["lato.png", "times.png"], 2)
];

var level2 = [
  new Question("Baskerville", ["minion.png", "baskerville.png"], 2),
  new Question("Times", ["times.png", "caslon.png"], 1),
  new Question("Avenir", ["helvetica.png", "avenir.png"], 2),
  new Question("Arial", ["myriadpro.png", "arial.png"], 2),
  new Question("Georgia", ["georgia.png", "caslon.png"], 1)
];

var level3 = [
  new Question("Helvetica", ["arial.png", "helvetica.png"], 2),
  new Question("Gill Sans", ["gillsans.png", "lato.png"], 1),
  new Question("Myriad Pro", ["myriadpro.png", "ptsans.png"], 1),
  new Question("Trajan", ["cinzel.png", "trajan.png"], 2),
  new Question("Avenir", ["nunito.png", "avenir.png"], 2)
];

var levels = [level1, level2, level3];

// hämta knappen
$("button").click(function() {
    // På click, generera html för level 1
    //createQuiz("1", level1);
    createLevel("1", level1, 0);
    createQuiz("1", level1, 0);
    //createQuiz(0, 0); // Level 1, fråga 1
});


// function createLevel(nr, level) {
//   var html = "";
//   html = "<h1 class='text-center'>Font game - Level" + nr + "</h1>";
//   html += "<main class='container row row-centered text-center'>";
//   createQuiz(html, level);
// }

function createLevel(nr, questions, i) {
  var html;
  html = "<h1 class='text-center'>Font game - Level " + nr + "</h1>";
  html += "<main class='container row row-centered text-center'>";
  html += "<div class='row row-centered'>";
  html += "<h2 id='font'></h2>";
  html += "<div class='col-xs-6 col-xs-offset-2' id='choice1'></div>";
  html += "<div class='col-xs-6 col-xs-offset-2' id='choice2'></div>";
  html += "</div>";
  html += "<div class='row row-centered points' id='counter'>You have 0/5 points. You need 4 points to go to level 2.</div>"
  $("body").html(html);
}

function createQuiz(nr, questions, i) {
  var img1 = "<img src='img/" + questions[i].choices[0] + "'>";
  var img2 = "<img src='img/" + questions[i].choices[1] + "'>";

  $("#choice1").html(img1);
  $("#choice2").html(img2);
  $("#font").html(questions[i].font);

  var rightAnswer = questions[i].answer;

  console.log("Det rätta svaret är "+ rightAnswer)

  $("#choice1").click(function() {

      if (rightAnswer === 1) {
        console.log("rätt");
        counter++;
        $("#counter").html("You have " + counter + "/5 points. You need 4 points to go to level 2.");
        i++;
        if (i < questions.length) {
          createQuiz(nr, questions, i);
        } else {
          counter = 0;
          if (nr == "1") {
            createLevel("2", level2, 0);
            createQuiz("2", level2, 0);
          }
          if (nr == "2") {
            createLevel("3", level3, 0);
            createQuiz("3", level3, 0);
          }
        }
      }
      else {
        console.log("fel");
      }

  });


    $("#choice2").click(function() {

      if (rightAnswer === 2) {
        console.log("rätt");
        counter++;
        $("#counter").html("You have " + counter + "/5 points. You need 4 points to go to level 2.");
        i++;
        if (i < questions.length) {
          createQuiz(nr, questions, i);
        } else {
          counter = 0;
          if (nr == "1") {
            createLevel("2", level2, 0);
            createQuiz("2", level2, 0);
          }
          if (nr == "2") {
            createLevel("3", level3, 0);
            createQuiz("3", level3, 0);
          }
        }
      }
      else {
        console.log("fel");
      }

  });
}

/*function createQuiz(nr, questions) {
  console.log(questions[0].font);
  //for (var i = 0; i < questions.length; i++) {
    // $("body").empty();
    createQuestion(nr, questions, 0);
      //});
}*/

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
