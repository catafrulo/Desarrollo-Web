document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "¿Cuál es mi color favorito?",
            options: ["Rojo", "Azul", "Verde", "Negro"],
            correctAnswer: "Negro",
        },
        {
            question: "¿Cuál de estos lenguajes se utilizar?",
            options: ["COBOL", ".NET", "C#", "Python"],
            correctAnswer: "Python",
        },
        {
            question: "¿En que Universidades estudié/estudio?",
            options: ["UADE", "UCA, UTN", "UTN, UADE", "UTN, USAL, UADE"],
            correctAnswer: "UTN, UADE",
        },
        {
            question: "¿En que año me gradué de la secundaria?",
            options: ["2011", "2019", "2022", "2023"],
            correctAnswer: "2022",
        },
        {
            question: "¿Que carrera estudio en UADE?",
            options: ["Licenciatura en Gestión de las Tecnologías de la Comunicación", "Bachiller en Ciencias Sociales y Humanísticas", "Licenciatura en Gestión de las Tecnologías de la Información", "Licenciatura en Administración Empresarial"],
            correctAnswer: "Licenciatura en Gestión de las Tecnologías de la Información",
        },
        {
            question: "¿Cuál es tu hobby principal?",
            options: ["Pintar", "Hacer Deporte", "Cocinar", "Programar"],
            correctAnswer: "Programar",
        },
    ];

    let currentQuestionIndex = 0;
    let userAnswers = [];

    const startButton = document.getElementById("start-button");
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const answersContainer = document.getElementById("answers-container");
    const nextButton = document.getElementById("next-button");

    startButton.addEventListener("click", function () {


        const quizContent = `
            <html>
                <head>
                    <title>Quiz</title>
                    <link rel="stylesheet" href="styles/cruci.css">
                </head>
                <body>
                    <div id="quiz-container">
                        <h1>My Quiz</h1>
                        <div id="question-container"></div>
                        <button id="next-button" style="display:none;">Next</button>
                        <div id="result-container"></div>
                        <div id="answers-container"></div>
                    </div>
                </body>
            </html>
        `;

        quizWindow.document.open();
        quizWindow.document.write(quizContent);
        quizWindow.document.close();
    });

    nextButton.addEventListener("click", function () {
        const selectedOption = document.querySelector('input[name="option"]:checked');

        if (selectedOption) {
            userAnswers.push(selectedOption.value);
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResult();
            showAnswers();
            const displayQuestion = document.getElementById("question-container");
            displayQuestion.style.display = "none";
        }
    });

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];

        const optionsHTML = currentQuestion.options.map((option, index) => {
            return `<label>
                        <input type="radio" name="option" value="${option}" />
                        ${option}
                    </label><br>`;
        }).join('');

        questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>${optionsHTML}`;
    }

    function showResult() {
        const correctAnswers = questions.filter((question, index) => {
            return question.correctAnswer === userAnswers[index];
        });

        resultContainer.textContent = `Has acertado ${correctAnswers.length} de ${questions.length} preguntas.`;
    }

    function showAnswers() {
        const answersHTML = questions.map((question) => {
            return `<p><strong>Pregunta:</strong> ${question.question}<br><strong>Respuesta Correcta:</strong> ${question.correctAnswer}</p>`;
        }).join('');

        answersContainer.innerHTML = `<h2>Respuestas Correctas</h2>${answersHTML}`;
    }
});

