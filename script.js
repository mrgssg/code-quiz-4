// Some global variables and timer function

var timerEl = document.getElementById('countdown')
var timer = 60
var resetBtn = document.getElementById('reset')
var finalScore = localStorage.getItem('score') 
var initials = localStorage.getItem('initials') 
var correctAns = 0

function countdown () {
// console.log("it works");
var timeInterval = setInterval(function () {
    timer--;
    timerEl.textContent = timer
    if (timer <= 0) {
        timerEl.textContent = 0 
        clearInterval(timeInterval);
        alert("Time's up. Please enter your initials.");
        // alert("Please click reset.");
    }
}, 1000);
}

// countdown ()

var quizQuest = [
    {
        question: "What do you do to start a function?",
        a: "invoke it",
        b: "play it",
        c: "enter it",
        d: "wave at it",
        correct: "a",
    },
    {
        question: "What does Javascript do for a webpage?",
        a: "add structure",
        b: "add style",
        c: "add up",
        d: "make it dynamic",
        correct: "d",
    },
    {
        question: "What is 'var' short for?",
        a: "variable",
        b: "varsity",
        c: "vary good",
        d: "varied",
        correct: "a",
    },
    {
        question: "Name the two types of scopes.",
        a: "global & local",
        b: "Phineas & Ferb",
        c: "Starky & Hutch",
        d: "Batman & Robin",
        correct: "a",
    },
]

var quiz = document.getElementById('quiz')
var answerEl = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text') 
var submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = document.getElementById('correct')

newQuiz()

function newQuiz() {

    deselectAnswers()

var currentQuizQuest = quizQuest[currentQuiz]

    question.innerText = currentQuizQuest.question
    a_text.innerText = currentQuizQuest.a
    b_text.innerText = currentQuizQuest.b
    c_text.innerText = currentQuizQuest.c
    d_text.innerText = currentQuizQuest.d
}

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}

function selectAnswer() {
    var selectedAns = "";
    answerEl.forEach(answer => {
    // console.log(answer)
    // console.log(answer.checked)
        if(answer.checked) {
            selectedAns = answer.getAttribute("id")
        }
    })
    return selectedAns
}

submitBtn.addEventListener('click', () => {
  var answer = selectAnswer ()

  if (currentQuiz == 0) {  
  countdown ()
  }
    if(answer) { 
        // console.log(answer)
        // console.log(quizQuest[currentQuiz].correct)
        if(answer === quizQuest[currentQuiz].correct) {
            correctAns++
        } 
        else {timer-=10}

        currentQuiz++

        if (currentQuiz < quizQuest.length) {
            newQuiz()
        } else {
            quiz.innerHTML = 
            `<h3> You answered ${correctAns}/${quizQuest.length} questions correctly</h3>`;
            finalScore.innerHTML = correctAns
        }
       
    }
})

resetBtn.addEventListener("click", () => {
  newQuiz ();
     console.log('it works')
}); 


