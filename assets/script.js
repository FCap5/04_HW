//variables for timer
var timer = document.querySelector("#timer");
var secondsLeft = 100;

var i = 1;

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
            gameOver();
        }
    }, 1000);
}


//Press start to set timer and display first question and answers
$("#start-button").on("click", function () {
    setTime();
    $("h3:first").text(questions.questionOne);
    $("p:first").text("");
    $.each(answers.answerOne, function (answerOne, answer) {
        $(answer).text(answerOne);
        var answerBtn = $("<button>");
        answerBtn.addClass("btn btn-outline-success btn-block");
        $(answerBtn).text(answer);
        $("#answerSpace").append(answerBtn);

    });


    //clear old button to create new next question button    
    $("#start-button").remove();
    var nextQuestionBtn = $("<button>");
    $(nextQuestionBtn).text("Next Question!");
    $("#buttonSpace").append(nextQuestionBtn);

    //click event for next question
    //cues question and answer for question 2
    $(nextQuestionBtn).on("click", function () {
        i++;
        $("h3:first").text(questions.questionTwo);
        $("#answerSpace").text("");
        $.each(answers.answerTwo, function (answerTwo, answer) {
            $(answer).text(answerTwo);
            var answerBtn = $("<button>");
            answerBtn.addClass("btn btn-outline-success btn-block");
            $(answerBtn).text(answer);
            $("#answerSpace").append(answerBtn);

        });

        //question 3
        $(nextQuestionBtn).on("click", function () {
            $("h3:first").text(questions.questionThree);
            $("#answerSpace").text("");
            $.each(answers.answerThree, function (answerThree, answer) {
                $(answer).text(answerThree);
                var answerBtn = $("<button>");
                answerBtn.addClass("btn btn-outline-success btn-block");
                $(answerBtn).text(answer);
                $("#answerSpace").append(answerBtn);

            });

            //question 4
            $(nextQuestionBtn).on("click", function () {
                $("h3:first").text(questions.questionFour);
                $("#answerSpace").text("");
                $.each(answers.answerFour, function (answerFour, answer) {
                    $(answer).text(answerFour);
                    var answerBtn = $("<button>");
                    answerBtn.addClass("btn btn-outline-success btn-block");
                    $(answerBtn).text(answer);
                    $("#answerSpace").append(answerBtn);

                });

                //Question 5
                $(nextQuestionBtn).on("click", function () {
                    $("h3:first").text(questions.questionFive);
                    $("#answerSpace").text("");
                    $.each(answers.answerFive, function (answerFive, answer) {
                        $(answer).text(answerFive);
                        var answerBtn = $("<button>");
                        answerBtn.addClass("btn btn-outline-success btn-block");
                        $(answerBtn).text(answer);
                        $("#answerSpace").append(answerBtn);

                    });
                });
            });
        });


    });

});
//$("#start-button").on("click", function () {
//    $("h3:first").text(questions.questionTwo);
//    $("p:first").text("");
//    $("p:first").text(answerTwo.forEach(function (answer) {
//        $(answerTwo).text(answer);
//        var answerBtn = $("<button>");
//        $(answerBtn).text(answer);
//        $("#answerSpace").append(answerBtn);

 //   })
  //  );
//need to have questions at the ready to sub in
// 4 buttons
// need to know which is correct, and which is not
// need to know index of question

//what is the functionality
// pull question and answer options from objects containing questions and answers
// loop through to assign for answers
// use .this from fridge exercise to determine what is clicked
// if the right answer is selected, display correct, time out two seconds, add points to internal storage, then go to next page
// if wrong, display wrong, time out two seconds and then go to next question



// 1. h2 for questions
// 2. multiple choice answers, 4 buttons
// 3. if return === true --> proceed to next page/qustion
// 4. add to score total
// 5. if false, subtract time and guess again (prevent event)

// repeat for a total of 5 questions

// once all questions have been answered:
// display score and field for submitting name
// submit button
// bring to scoreboard page


// if time expires, stop script
// display above screen to submit score
// send to scoreboard


// scoreboard 
// draw score from local 
// draw name from local storage
// align so that highest score is on top in an ordered list
// button to clear 
// button to start over