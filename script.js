const timerEl = document.getElementById('timer');

function countdown () {
console.log("it works");
const timeLeft = 3;
const timeInterval = setInterval(function () {
    if (timeLeft > 1) {
    timerEl = timeLeft;
    timeLeft--;
    } else if (timeLeft === 1) {
    timerEl = timeLeft ;
    timeLeft--;
    } else {
        timerEl ="time's up";
        clearInterval(timeInterval);
    }
}, 3000);
}

const quizQuest = [
    {
        question: "What do you do to start a function?",
        a: "invoke",
        b: "play",
        c: "enter",
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
        question: "What do you do to start a function?",
        a: "invoke",
        b: "play",
        c: "enter",
        d: "wave at it",
        correct: "a",
    },
    {
        question: "What do you do to start a function?",
        a: "invoke",
        b: "play",
        c: "enter",
        d: "wave at it",
        correct: "a",
    },
]

const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text') 
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

newQuiz()

function newQuiz() {

    deselectAnswers()

    const currentQuizQuest = quizQuest[currentQuiz]

    questionEl.innerText = currentQuizQuest.question
    a_text.innerText = currentQuizQuest.a
    b_text.innerText = currentQuizQuest.b
    c_text.innerText = currentQuizQuest.c
    d_text.innerText = currentQuizQuest.d
}

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}

function selectAnswer() {
    let answerEl
    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answerEl = answerEl.id
        } 
    })
    return answerEl
}

submitBtn.addEventListener('click', () => {
    const answer = selectAnswer ()
    if(answer) {
        if(answer === quizQuest[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizQuest.length) {
            newQuiz()
        } else {
            quiz.innerHTML = `
            <h3> You answered ${score}/${quizQuest.length} questions correctly</h3>
            `
        }
    }
})



