//Timer Function

//Inspiration was used from 04-Web-APIs activity 9 section in class code.
var timeEl = document.querySelector("#timeEl");
var timer = document.querySelector("#start");
var questionsContainer = document.querySelector("#questionsContainer");
var wrapper = document.querySelector("#container");

var timeLeft = 5;
var timerInterval = 0;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
    if (timerInterval === 0) {
        timerInterval = setInterval(function () {
            timeLeft--;
            timeEl.textContent = "Time: " + timeLeft;

            if (timeLeft === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }
    render(questionIndex);
});


// Questions were gathered from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<scripting>", "<js>"],
        answer: "<script>"
    },

    {
        title: "How do you create a function in JavaScript?",
        choices: ["function:myFunction()", "function myFunction()", "function = myFunction()", "function - myFunction()"],
        answer: "function myFunction()"
    },

    {
        title: "How can you add a comment in JavaScript?",
        choices: ["//Comment", "'Comment", "!!!Comment", "<!--Comment-->"],
        answer: "//Comment"
    },

    {
        title: "How do you round the number 7.25 to the nearest integer?",
        choices: ["round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)"],
        answer: "Math.round(7.25)"
    },

    {
        title: "Which operator is used to assign a value to a variable?",
        choices: ["-", "x", "=", "*"],
        answer: "="
    }
];