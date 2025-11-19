let questions = [];
let quizQuestions = []; // store 10 random questions
let current = 0;
let score = 0;

let timeLeft = 20;
let timer;
const totalQuestions = 10;

// -------------------- FETCH DATA --------------------
const getData = async () => {
    const data = await fetch("https://quiz-application-sage-delta.vercel.app/questions");
    const res = await data.json();
    questions = res;

    generateRandomQuestions(); // pick 10 questions
    loadQuestion();            // load first question
};

// -------------------- RANDOM 10 UNIQUE QUESTIONS --------------------
function generateRandomQuestions() {
    let used = new Set();

    while (used.size < totalQuestions) {
        let idx = Math.floor(Math.random() * questions.length);
        used.add(idx);
    }

    // extract selected questions
    quizQuestions = [...used].map(i => questions[i]);
}

// -------------------- START QUIZ --------------------
function startQuiz() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    getData();
    startTimer();
}

// -------------------- LOAD QUESTION --------------------
function loadQuestion() {
    const q = quizQuestions[current];

    document.getElementById("questionText").innerHTML = q.question;

    let optionsHtml = "";
    q.options.forEach((opt, i) => {
        optionsHtml += `<div class="option" onclick="selectOption(this, ${i})">${opt}</div>`;
    });

    document.getElementById("options").innerHTML = optionsHtml;
}

let selectedAnswer = null;

function selectOption(element, i) {
    selectedAnswer = i;

    let all = document.querySelectorAll(".option");
    all.forEach(op => op.classList.remove("selected"));

    element.classList.add("selected");
}

// -------------------- NEXT QUESTION --------------------
function nextQuestion() {
    if (selectedAnswer === quizQuestions[current].answer) {
        score++;
    }

    selectedAnswer = null;
    current++;

    if (current >= totalQuestions) {
        showResult();
        return;
    }

    loadQuestion();
    resetTimer();
}

// -------------------- RESULT --------------------
function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerHTML = score + " / " + totalQuestions;
}

// -------------------- TIMER --------------------
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";

        if (timeLeft <= 0) {
            nextQuestion();
            resetTimer();
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 20;
}
