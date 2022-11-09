
//Inspiration was used from 04-Web-APIs activities 9 through 17 in the class code.

//User score
var score = 0;
//Question list variable
var questionList = 0;
//Links the timeEl in js to the timeEl div in HTML
var timeEl = document.querySelector("#timeEl");
//Links the timer in js to the start in HTML
var timer = document.querySelector("#start");
//Links the questionsContainer in js to the questionsContainer div in HTML
var questionsContainer = document.querySelector("#questionsContainer");
//Links the container in js to the container div in HTML
var container = document.querySelector("#container");

//How much time the user is alloted
var timeLeft = 100;
var timerInterval = 0;
//Creates ul in HTML
var ulCreate = document.createElement("ul");

//Timer Function
timer.addEventListener("click", function () {
    //if loop that counts down the timer from 100
    if (timerInterval === 0) {
        timerInterval = setInterval(function () {
            timeLeft--;
            timeEl.textContent = "Time: " + timeLeft;
            //if loop that will end the quiz once it reaches 0
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                //End game function I guess?
            }
        }, 1000);
    }
    //Renders the question list as soon as the timer starts
    render(questionList);
});
//function that renders the question list for the quiz
function render(questionList) {
    //adds empty html section in the questionsContainer div
    questionsContainer.innerHTML = "";
    //adds empty html section in the ul section
    ulCreate.innerHTML = "";

    //for loop that assigns the titles and choices to the variables
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionList].title;
        var userChoices = questions[questionList].choices;
        questionsContainer.textContent = userQuestion;
    }

    //For each click event that happens during the quiz, a new item will be added to the li
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsContainer.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (displayQuestions));
    })
};

function displayQuestions(event) {
    var element = event.target;

    //if loop that will create a div for the questions
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        //if what the user chose is the same as the answer, score++ and display correct
        if (element.textContent == questions[questionList].answer) {
            score++;
            createDiv.textContent = "Correct!";
        //else take away some remaining time and display wrong
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong!";
        }
    }
    //Moves on to the next question
    questionList++;

    //If the question list is done, print end of quiz to signify the end of the quiz
    if (questionList >= questions.length) {
        createDiv.textContent = "End of quiz!";
    } else {
        render(questionList);
    }
    questionsContainer.appendChild(createDiv);
}

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