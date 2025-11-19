const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
const questions = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "None"],
        answer: 1
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "None"],
        answer: 0
    },

    // NEW QUESTIONS BELOW

    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
        answer: 1
    },
    {
        question: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
    },
    {
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        answer: 2
    },
    {
        question: "Which sorting algorithm has the best average case time complexity?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
        answer: 2
    },
    {
        question: "Which of the following is a frontend JavaScript framework?",
        options: ["Laravel", "React", "Django", "Spring"],
        answer: 1
    },
    {
        question: "Which command initializes a new Git repository?",
        options: ["git start", "git new", "git init", "git create"],
        answer: 2
    },
    {
        question: "Which part of the OS manages processes?",
        options: ["Kernel", "Shell", "BIOS", "API"],
        answer: 0
    },
    {
        question: "What does API stand for?",
        options: ["Application Processing Interface", "Application Programming Interface", "Applied Program Interaction", "Automatic Program Interface"],
        answer: 1
    },
    {
        question: "Which of these is NOT an OOP concept?",
        options: ["Encapsulation", "Abstraction", "Polymorphism", "Compilation"],
        answer: 3
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Strong Question Language", "Stylized Query Logic", "None"],
        answer: 0
    },
    {
        question: "Which of these is used for version control?",
        options: ["VS Code", "Git", "NPM", "Node.js"],
        answer: 1
    },
    {
        question: "Which layer of OSI model deals with encryption?",
        options: ["Network", "Transport", "Session", "Application"],
        answer: 3
    },
    {
        question: "Which of these is a backend framework?",
        options: ["React", "Angular", "Node.js", "Vue"],
        answer: 2
    },
    {
        question: "Which language is primarily used for competitive programming?",
        options: ["Java", "Python", "C++", "JavaScript"],
        answer: 2
    },
    {
        question: "Which data structure uses FIFO order?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
    },
    {
        question: "Which SQL command is used to remove a table?",
        options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
        answer: 2
    },
    {
        question: "Which OS scheduling algorithm selects the shortest job first?",
        options: ["FCFS", "Round Robin", "SJF", "Priority Scheduling"],
        answer: 2
    },
    {
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "SMTP", "FTP", "IMAP"],
        answer: 1
    },
    {
        question: "Which HTML tag is used to insert JavaScript code?",
        options: ["<javascript>", "<js>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1
    },
    {
        question: "Which key uniquely identifies a row in a table?",
        options: ["Foreign key", "Candidate key", "Primary key", "Composite key"],
        answer: 2
    },
    {
        question: "Deadlock occurs when processes are waiting for:",
        options: ["Memory", "CPU", "Resources held by each other", "Cache"],
        answer: 2
    },
    {
        question: "Which device works at the Data Link layer?",
        options: ["Router", "Switch", "Hub", "Modem"],
        answer: 1
    },
    {
        question: "What does API stand for?",
        options: ["Application Protocol Interface", "Applied Program Instruction", "Application Programming Interface", "Advanced Port Interaction"],
        answer: 2
    },
    {
        question: "Which sorting algorithm is the fastest in average case?",
        options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Quick Sort"],
        answer: 3
    },
    {
        question: "Which SQL clause filters rows?",
        options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
        answer: 1
    },
    {
        question: "Which memory is volatile?",
        options: ["Hard Disk", "SSD", "ROM", "RAM"],
        answer: 3
    },
    {
        question: "Which of these is a NoSQL database?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
        answer: 1
    },
    {
        question: "Which HTTP method is used to send data to the server?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 1
    },
    {
        question: "Which DSA structure is used in recursion?",
        options: ["Queue", "Stack", "Heap", "Graph"],
        answer: 1
    },
    {
        question: "Which OS component manages memory?",
        options: ["Scheduler", "Allocator", "Memory Manager", "Loader"],
        answer: 2
    },
    {
        question: "Which protocol secures data over a network?",
        options: ["TCP", "UDP", "SSL/TLS", "ARP"],
        answer: 2
    },
    {
        question: "JavaScript is a ______ language.",
        options: ["Compiled", "Interpreted", "Assembly", "Machine"],
        answer: 1
    }
];



app.get("/", (req,res)=>{
    res.send("Api is running hurrah!");
})

app.get("/questions",(req, res)=>{
    res.send(questions);
})
const PORT = 5000;
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)});