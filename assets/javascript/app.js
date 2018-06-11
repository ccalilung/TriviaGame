   

//start all functions after "start game" selected
    function go() {
        window.correct = 0;
        window.incorrect = 0;
    
    var questions = [{

        question: "What is the capital of Canada?",
        answer: "4",
        choices: {
            A: "Toronto",
            B: "Winnipeg",
            C: "Montreal",
            D: "Ottawa",
            E: "Vancouver"
        },
        bgImage: "assets/images/mapleleaf.jpg"
    }, {

        question: "Who won the NBA Championship in 2011?",
        answer: "2",
        choices: {
            A: "LA Lakers",
            B: "Dallas Mavericks",
            C: "Miami Heat",
            D: "Golden State Warriors",
            E: "Cleveland Cavaliers"
        },
        bgImage: "assets/images/basketball.jpg"
    }, {

        question: "In the movie <strong>Good Will Hunting</strong>, which actor delivers the famous line, \"How do you like them apples?\"",
        answer: "3",
        choices: {
            A: "Ben Affleck",
            B: "Casey Affleck",
            C: "Matt Damon",
            D: "Minnie Driver",
            E: "Stellan Skarsgård"
        },
        bgImage: "assets/images/brownstones.jpg"

    }, {

        question: "What is the capital city of South Carolina?",
        answer: "1",
        choices: {
            A: "Columbia",
            B: "Charleston",
            C: "Clemson",
            D: "Hilton Head",
            E: "Greenville"
        },
        bgImage: "assets/images/geography.jpg"

    }, {
        question: "In the 80s sitcom <strong>Cheers</strong>, what car did Sam Malone drive?",
        answer: "5",
        choices: {
            A: "Shelby GT 500",
            B: "Porsche 911",
            C: "Ferrari Testarossa",
            D: "Dodge Charger",
            E: "Chevrolet Corvette"
        },
        bgImage: "assets/images/car.jpg"

    }, {
        question: "If 3x + 3y = 30 and 6x = 72, what is 5x + 8y?",
        answer: "2",
        choices: {
            A: "40",
            B: "-44",
            C: "-40",
            D: "48",
            E: "36"
        },
        bgImage: "assets/images/math.jpg"

    }, {
        question: "High levels of cortisol will normally cause _______ feedback on the _______ and _______ ?",
        answer: "3",
        choices: {
            A: "positive, hypothalamus, anterior pituitary",
            B: "negative, hypothalamus, posterior pituitary",
            C: "negative, hypothalamus, anterior pituitary",
            D: "no, adrenal gland, thyroid gland",
            E: "positive, pons, medulla"
        },
        bgImage: "assets/images/medications.jpg"

    }, {
        question: "Which of the following are amino acids?",
        answer: "1",
        choices: {
            A: "alanine, lysine, arginine",
            B: "aldosterone, testosterone, estrogen",
            C: "glucose, sucrose, fructose",
            D: "progesterone, vasopressin, leptin",
            E: "insulin, glucagon"
        },
        bgImage: "assets/images/amino_acid.svg"

    }, {
        question: "The professional <strong>hockey</strong> team known as the Jets are based in which city?",
        answer: "4",
        choices: {
            A: "New York",
            B: "Calgary",
            C: "Seattle",
            D: "Winnipeg",
            E: "Detroit"
        },
        bgImage: "assets/images/hockey.jpg"

    }, {
        question: "Joe Namath led this NFL team to a championship in Super Bowl III",
        answer: "2",
        choices: {
            A: "New York Giants",
            B: "New York Jets",
            C: "New Jersey Generals",
            D: "Green Bay Packers",
            E: "Dallas Cowboys"
        },
        bgImage: "assets/images/football.jpg"

    }, {
        question: "What U.S. state is home to the headquarters of Nike?",
        answer: "5",
        choices: {
            A: "Washington",
            B: "California",
            C: "Tennessee",
            D: "Maryland",
            E: "Oregon"
        },
        bgImage: "assets/images/nike.jpg"

    }, {
        question: "The Internal Revenue Service (IRS) is a U.S. government agency under which cabinet department?",
        answer: "3",
        choices: {
            A: "Commerce",
            B: "Finance",
            C: "Treasury",
            D: "Currency & Engraving",
            E: "Office of Management and Budget"
        },
        bgImage: "assets/images/dc.jpg"

    }, {
        question: "This tennis Grand Slam tournament is traditionally played at the All England Lawn Tennis and Croquet Club",
        answer: "2",
        choices: {
            A: "Roland-Garros",
            B: "Wimbledon",
            C: "Ryder Cup",
            D: "British Open",
            E: "Davis Cup"
        },
        bgImage: "assets/images/tennis.jpg"

    }, {
        question: "This is the most common street name in the U.S.",
        answer: "2",
        choices: {
            A: "First",
            B: "Second",
            C: "Third",
            D: "Main",
            E: "Park"
        },
        bgImage: "assets/images/street.jpg"

    }, {
        question: "If John travels from Charleston towards Springfield at an average velocity of 75mph, and the two cities are 60 miles apart, how long will it take John to reach Springfield?",
        answer: "4",
        choices: {
            A: "1hr 20mins",
            B: "56 mins",
            C: "30 mins",
            D: "48 mins",
            E: "I hate math"
        },
        bgImage: "assets/images/fast_car.jpg"

    }]


//timer function. start at 11, subtract 1 so 10 seconds appears. if greater than 1, print X seconds. if 1, print 1 second. if 0, run incorrectAnswer function
    timer = function () {
        timeStart--;
        if (timeStart > 1) {
            g.html("Time Remaining: " + timeStart + " seconds")
        } else if (timeStart === 1) {
            g.html("Time Remaining: " + timeStart + " second")
        } else if (timeStart === 0) {
            g.html("Time Remaining: " + timeStart + " seconds")
            incorrectAnswer();
        }
    }

//end of game. remove all the buttons and the question. print the giphys for winner if correct>incorrect, or giphy for loser if incorrect>correct.
    stop = function () {
        clearInterval(timerSet);
        $("#question").remove();
        $(".container").css("opacity","1.0")
        $(".stats").css("text-align","center")
        a.remove();
        b.remove();
        c.remove();
        d.remove();
        e.remove();
        if (correct>incorrect) {
            j.append("<iframe src=\"https://giphy.com/embed/C9EdMKeLbb80dv4OVI\" width=\"480\" height=\"269\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/jeopardy--alex-trebek-C9EdMKeLbb80dv4OVI\"></a></p> Awwww yeah - WINNING!")
            $("#status").html("WINNER!")
        } else if (incorrect>correct) {
            j.append("<iframe src=\"https://giphy.com/embed/b518lEKjsoTcs\" width=\"480\" height=\"360\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/alex-trebek-b518lEKjsoTcs\"></a></p> Sigh, just sigh...")
            $("#status").html("LOSER!")
        }


    }

//for each button, check what the correct answer is, and compare it to the value of the button. if they match, it's a correct answer and run correctAnswer function. else, run incorrectAnswer
    function selectButton() {
        a.on("click", function () {
            if (a.val() === questions[f].answer) {
                correctAnswer();
            } else {
                incorrectAnswer()
            }
        })

        b.on("click", function () {
            if (b.val() === questions[f].answer) {
                correctAnswer();
            } else {
                incorrectAnswer()
            }
        })

        c.on("click", function () {
            if (c.val() === questions[f].answer) {
                correctAnswer();
            } else {
                incorrectAnswer()
            }
        })

        d.on("click", function () {
            if (d.val() === questions[f].answer) {
                correctAnswer();
            } else {
                incorrectAnswer()
            }
        })

        e.on("click", function () {
            if (e.val() === questions[f].answer) {
                correctAnswer();
            } else {
                incorrectAnswer()
            }
        })
    }

// selects the question at random, appends the buttons and places the answer choices from the questions object into the text of the buttons. then start the timer
    function randomizer() {
        window.f = [Math.floor(Math.random() * questions.length)]
        $("#question").html(questions[f].question)
        $("#choices").append("<button type=\"button\" class=\"btn btn-dark\" id=\"A\" value=\"1\"></button><br>")
        $("#choices").append("<button type=\"button\" class=\"btn btn-dark\" id=\"B\" value=\"2\"> </button><br>")
        $("#choices").append("<button type=\"button\" class=\"btn btn-dark\" id=\"C\" value=\"3\"></button><br>")
        $("#choices").append("<button type=\"button\" class=\"btn btn-dark\" id=\"D\" value=\"4\"></button><br>")
        $("#choices").append("<button type=\"button\" class=\"btn btn-dark\" id=\"E\" value=\"5\"></button>")

        $("#A").text(questions[f].choices.A)
        $("#B").text(questions[f].choices.B)
        $("#C").text(questions[f].choices.C)
        $("#D").text(questions[f].choices.D)
        $("#E").text(questions[f].choices.E)
        $("body").css("background",'url(' + questions[f].bgImage + ')')
        $("body").css("background-size","100%");
        defineVariables();
        selectButton();
        window.timerSet = setInterval(timer, 1000);

    }
    randomizer();

// shortcuts for calling the buttons, timer, statistics, etc divs
    function defineVariables() {
        window.a = $("#A")
        window.b = $("#B")
        window.c = $("#C")
        window.d = $("#D")
        window.e = $("#E")
        window.z = $("#choices")
        window.g = $("#timer")
        window.h = $("#numCorrect")
        window.i = $("#numIncorrect")
        window.j = $("#announcements")
        window.timeStart = 11;

    }

// if answer is correct, stop the timer, increase the variable correct by 1, reprint it, take the question asked out of the questions object, and if there are no more questions, run stop function to end game. otherwise, clear the buttons out, and run the randomizer function again to get next question and choices
    function correctAnswer() {
        clearInterval(timerSet);
        correct++;
        h.html("# Answered Correctly: " + correct);
        questions.splice(f, 1);
        if (questions.length === 0) {
            stop();
        } else {
            z.html(" ");
            randomizer();
        }

    }

// same idea as correct, but for incorrect answer selection
    function incorrectAnswer() {
        clearInterval(timerSet);
        incorrect++;
        i.html("# Answered Incorrectly: " + incorrect);
        questions.splice(f, 1);
        if (questions.length === 0) {
            stop();
        } else {
            z.html(" ");
            randomizer();

        }
    }}

// initiate go function when "start game" is selected
$("#go").on("click",function () {
    a = $("#go")
    a.remove();
    $("#numCorrect").html("# Answered Correctly: 0");
    $("#numIncorrect").html("# Answered Incorrectly: 0");
    go();
});