// UI functions
$(function () {
  $("#start-btn").click(function () {
    $("#start-btn").addClass("d-none");
    $("#ui-div").removeClass("d-none");
    $("#time").removeClass("d-none");
    $("#time").addClass("bg-warning");
    animate("#ui-div", "fadeIn");
    var counter = setInterval(timer, 1000);
    return false;
  });

  function animate(element, animation) {
    $(element).addClass("animated " + animation);
    var wait = setTimeout(function () {
      $(element).removeClass("animated " + animation);
    }, 1000);
  }
});

// Time Counter
const time = document.getElementById("time");
let minutes, seconds, totalTime;

var fin = "Done";
var count = 60;

function zeros(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let timer = () => {
  count = count - 1;
  minutes = zeros(Math.floor(count / 60));
  seconds = zeros(count % 60);
  if (count >= 0) {
    totalTime = minutes + ":" + seconds;
    time.innerHTML = totalTime;
  }
};

// quiz ui
var QuizUI = {
  displayNext: function () {
    if (totalTime === "00:00") {
      this.displayScore();
    } else if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayQuestion: function () {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
  displayChoices: function () {
    var choices = quiz.getCurrentQuestion().choices;
    for (var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },
  displayScore: function () {
    var gameOverHTML = '<h1 class="bg-primary">Game Over</h1>';
    gameOverHTML +=
      "<h2> You Score " +
      quiz.score +
      " out of " +
      quiz.questions.length +
      " questions</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
  },
  populateIdWithHTML: function (id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  guessHandler: function (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
      quiz.guess(guess);
      QuizUI.displayNext();
    };
  },
  displayProgress: function () {
    var CurrentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML(
      "progress",
      "Question " + CurrentQuestionNumber + " of " + quiz.questions.length
    );
  },
};
