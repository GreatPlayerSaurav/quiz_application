
let questions =[];
const getData = async()=>{
    
    const data = await fetch("https://quiz-application-sage-delta.vercel.app/questions");
    const res  = await data.json();
    questions = res
}
getData();
console.log(questions[0]);
function getIndex(){
    let index = Math.floor(Math.random() * 20);;
    return index;
}
let score = 0;
let timeLeft = 20;
let timer;
const lengthh = 5;

function startQuiz() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    getData();
    loadQuestion();
    startTimer();
}

let inx = getIndex();
function loadQuestion() {
    const q = questions[inx];
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

function nextQuestion() {
    
    if (selectedAnswer === questions[inx].answer) {
        score++;
    }

    inx = getIndex();
    selectedAnswer = null;

    if (inx === lengthh) {
        showResult();
        return;
    }

    loadQuestion();
    resetTimer();
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerHTML = score + " / " + lengthh;
}

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
