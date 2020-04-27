//variables for timer
var timer = document.querySelector("#timer");
var secondsLeft = 100;

var i = 0;
var score = 0;



//questions object
var questions = {
    questionOne: "Question 1: Commonly served up with delicious meatballs, this long, thin noodle with no ridges twirls beautifully around a fork for a delectable bite.",
    questionTwo: "Question 2: Need a tie for your tux? This pasta could work in a pinch! Or maybe not. But this bow-tie shaped pasta is both delicious and adorable.",
    questionThree: "Question 3: This flat and long pasta is traditionally made with egg. It goes amazing with a cream sauce and cheese.",
    questionFour: "Question 4: These delicious little bite-sized pastas are sometimes called potato dumplings.",
    questionFive: "Question 5: These little tubes with cheese is one of the most popular pasta dishes. You can get it in a box or get Kraft-y with it and make it with 3, or even 5 cheese!",
}

//answers object
var answers = {
    answerOne: ["Ziti", "Spaghetti", "Gnocchi", "Rigatoni"],
    answerTwo: ["Bucatini", "Linguine", "Farfalle", "Cous-Cous"],
    answerThree: ["Macaroni", "Fusilli", "Orecchiette", "Fettucine"],
    answerFour: ["Gnocchi", "Rotini", "Spaghetti", "Strozzapreti"],
    answerFive: ["Ravioli", "Macaroni", "Cannelloni", "Penne"]
};

//timer function - called after start button pressed
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left!"

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            function gameOver() {
                $("h3:first").text("All Done!");
                $("#answerSpace").text("");
                $("#answerResponse").text("");
                var yourScore = $("<p>");
            }
            gameOver();
        } else if (secondsLeft < 0) {
            clearInterval(timeInterval);
            timer.textContent = "";
            secondsLeft = "";

        };
    }, 1000);
}


//Press start to set timer and display first question and answers
$("#start-button").on("click", function () {
    score = 0;
    setTime();
    $("#start-button").remove();
    askQuestions();
    function askQuestions() {
        $("h3:first").text(questions.questionOne);
        $("p:first").text("");
        $.each(answers.answerOne, function (answerOne, answer) {
            $(answer).text(answerOne);
            var answerBtn = $("<button>");
            answerBtn.addClass("btn btn-outline-success btn-block");
            answerBtn.attr("id", i++)
            $(answerBtn).text(answer);
            $("#answerSpace").append(answerBtn);

            $(answerBtn).click(function (event) {
                i = 0;
                const $this = $(this);
                if ($this.attr("id") == 1) {
                    $("#answerResponse").text("Correct!");
                    score = score + 5;
                    setTimeout(function () {
                        askQuestionTwo();
                    }, 1000)
                    //
                } else {
                    $("#answerResponse").text("Wrong!");
                    setTimeout(function () {
                        askQuestionTwo();
                    }, 1000)
                }
            });
        });
    }

    //question 2
    function askQuestionTwo() {
        $("h3:first").text(questions.questionTwo);
        $("#answerSpace").text("");
        $("#answerResponse").text("");
        $.each(answers.answerTwo, function (answerTwo, answer) {

            $(answer).text(answerTwo);
            var answerBtn = $("<button>");
            answerBtn.addClass("btn btn-outline-success btn-block");
            answerBtn.attr("id", i++)
            $(answerBtn).text(answer);
            $("#answerSpace").append(answerBtn);

            $(answerBtn).click(function (event) {
                i = 0;
                const $this = $(this);
                if ($this.attr("id") == 2) {
                    score = score + 5;
                    $("#answerResponse").text("Correct!");
                    setTimeout(function () {
                        askQuestionThree();
                    }, 1000)
                    //
                } else {
                    $("#answerResponse").text("Wrong!");
                    setTimeout(function () {
                        askQuestionThree();
                    }, 1000)
                }
            });

        });
    };

    //question 3
    function askQuestionThree() {
        $("h3:first").text(questions.questionThree);
        $("#answerSpace").text("");
        $("#answerResponse").text("");
        $.each(answers.answerThree, function (answerThree, answer) {
            $(answer).text(answerThree);
            var answerBtn = $("<button>");
            answerBtn.addClass("btn btn-outline-success btn-block");
            answerBtn.attr("id", i++)
            $(answerBtn).text(answer);
            $("#answerSpace").append(answerBtn);

            $(answerBtn).click(function (event) {
                i = 0;
                const $this = $(this);
                if ($this.attr("id") == 3) {
                    score = score + 5;
                    $("#answerResponse").text("Correct!");
                    setTimeout(function () {
                        askQuestionFour();
                    }, 1000)
                    //
                } else {
                    $("#answerResponse").text("Wrong!");
                    setTimeout(function () {
                        askQuestionFour();
                    }, 1000)
                }
            });

        });
    };

    //question 4
    function askQuestionFour() {
        $("h3:first").text(questions.questionFour);
        $("#answerSpace").text("");
        $("#answerResponse").text("");
        $.each(answers.answerFour, function (answerFour, answer) {
            $(answer).text(answerFour);
            var answerBtn = $("<button>");
            answerBtn.addClass("btn btn-outline-success btn-block");
            answerBtn.attr("id", i++)
            $(answerBtn).text(answer);
            $("#answerSpace").append(answerBtn);

            $(answerBtn).click(function (event) {
                i = 0;
                const $this = $(this);
                if ($this.attr("id") == 0) {
                    score = score + 5;
                    $("#answerResponse").text("Correct!");
                    setTimeout(function () {
                        askQuestionFive();
                    }, 1000)
                    //
                } else {
                    $("#answerResponse").text("Wrong!");
                    setTimeout(function () {
                        askQuestionFive();
                    }, 1000)
                }
            });
        });
    }

    //Question 5
    function askQuestionFive() {
        $("h3:first").text(questions.questionFive);
        $("#answerSpace").text("");
        $("#answerResponse").text("");
        $.each(answers.answerFive, function (answerFive, answer) {
            $(answer).text(answerFive);
            var answerBtn = $("<button>");
            answerBtn.addClass("btn btn-outline-success btn-block");
            answerBtn.attr("id", i++)
            $(answerBtn).text(answer);
            $("#answerSpace").append(answerBtn);

            $(answerBtn).click(function (event) {
                i = 0;
                const $this = $(this);
                if ($this.attr("id") == 1) {
                    score = score + 5;
                    $("#answerResponse").text("Correct!");
                    setTimeout(function () {
                        submitScore();
                    }, 1000)
                    //
                } else {
                    $("#answerResponse").text("Wrong!");
                    setTimeout(function () {
                        submitScore();
                    }, 1000)
                }
            });

        });
    };
    //Final page submit
    function submitScore() {
        secondsLeft = -1;
        $("h3:first").text("All Done!");
        $("#answerSpace").text("");
        $("#answerResponse").text("");
        var yourScore = $("<p>");
        $(yourScore).attr("id", "yourScore");
        $(yourScore).text("Your score is " + score + "!");
        var enterName = $("<input>");
        $(enterName).attr({
            class: "form-control",
            type: "text",
            placeholder: "Enter Name Here"
        });
        var submitButtonParent = $("<button>");
        var submitButton = $("<a>");
        $(submitButtonParent).append(submitButton);
        $(submitButton).attr({
            class: "btn btn-primary",
            id: "submitButton",
            href: "highscore.html"
        });
        $(submitButton).text("Submit")
        $("#answerSpace").append(yourScore, enterName, submitButton);
        $("#submitButton").click(function () {
            let scoreIndex = 1 + localStorage.length;
            playerName = (scoreIndex + ". " + $(enterName).val());
            localStorage.key(scoreIndex + playerName);
            localStorage.setItem(playerName, score);
        });
    }
});
var scoreboardEntry = $("<div>");
var localStorageHighScore = localStorage.getItem("high-score");
$(scoreboardEntry).text(localStorageHighScore);
$("#scoreBoard").append(scoreboardEntry);

//for (x = 0, x < localStorage.length; x++) {

//}
$("#clearHighScores").click(function () {
    localStorage.clear();
    $("#scoreBoard").text("");
    scoreIndex = 0;

})


