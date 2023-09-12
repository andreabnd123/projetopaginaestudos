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

document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const respostas = {
            pergunta1: document.querySelector('input[name="pergunta1"]:checked'),
            pergunta2: document.querySelector('input[name="pergunta2"]:checked'),
            pergunta3: document.querySelector('input[name="pergunta3"]:checked')
        };

        let pontuacao = 0;

        if (respostas.pergunta1 && respostas.pergunta1.value === "paris") {
            pontuacao++;
        }
        if (respostas.pergunta2 && respostas.pergunta2.value === "jupiter") {
            pontuacao++;
        }
        if (respostas.pergunta3 && respostas.pergunta3.value === "azul") {
            pontuacao++;
        }

        resultText.textContent = `Você acertou ${pontuacao} de 3 perguntas.`;
        resultContainer.style.display = "block";
    });
});

<form id="search-form">
    <input type="text" id="search-input" placeholder="Pesquisar...">
    <button type="submit">Buscar</button>
</form>

