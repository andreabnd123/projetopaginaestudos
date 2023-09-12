// script.js
function validarFormularioContato() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return true;
}

// script.js
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Marte", "Vênus"],
        answer: "Júpiter"
    },
    // Adicione mais perguntas aqui
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");

    questionText.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const option = document.createElement("button");
        option.textContent = questions[currentQuestion].options[i];
        option.classList.add("option");
        option.addEventListener("click", function () {
            checkAnswer(this);
        });
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption.textContent === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

loadQuestion();

<form id="search-form">
    <input type="text" id="search-input" placeholder="Pesquisar...">
    <button type="submit">Buscar</button>
</form>

