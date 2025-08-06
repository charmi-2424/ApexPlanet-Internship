lucide.createIcons();

const quizData = {
    movies: [
        { question: "In 'The Matrix', what color pill does Neo take?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Red" },
        { question: "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings'?", options: ["Sam", "Pippin", "Merry", "Frodo"], answer: "Frodo" },
        { question: "Which movie features the line, 'Here's looking at you, kid'?", options: ["Gone with the Wind", "Citizen Kane", "Casablanca", "The Maltese Falcon"], answer: "Casablanca" },
        { question: "What is the highest-grossing animated film of all time?", options: ["Frozen II", "The Lion King (2019)", "Minions", "Incredibles 2"], answer: "The Lion King (2019)" },
        { question: "Who directed the classic sci-fi film '2001: A Space Odyssey'?", options: ["George Lucas", "Steven Spielberg", "Ridley Scott", "Stanley Kubrick"], answer: "Stanley Kubrick" },
        { question: "What is the fictional African country in 'Black Panther'?", options: ["Genosha", "Latveria", "Wakanda", "Sokovia"], answer: "Wakanda" },
        { question: "Which film won the first-ever Academy Award for Best Picture?", options: ["The Jazz Singer", "Metropolis", "Wings", "Sunrise"], answer: "Wings" },
        { question: "What is the name of the AI in the 'Terminator' series?", options: ["HAL 9000", "Skynet", "VIKI", "GLaDOS"], answer: "Skynet" },
        { question: "In 'Star Wars', who is Luke Skywalker's father?", options: ["Obi-Wan Kenobi", "Emperor Palpatine", "Darth Vader", "Han Solo"], answer: "Darth Vader" },
        { question: "What object is sought by Indiana Jones in 'Raiders of the Lost Ark'?", options: ["The Holy Grail", "The Crystal Skull", "The Ark of the Covenant", "The Sankara Stones"], answer: "The Ark of the Covenant" }
    ],
    knowledge: [
        { question: "What is the capital of Japan?", options: ["Kyoto", "Osaka", "Hiroshima", "Tokyo"], answer: "Tokyo" },
        { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: "7" },
        { question: "What is the hardest known natural material?", options: ["Gold", "Iron", "Quartz", "Diamond"], answer: "Diamond" },
        { question: "Who wrote the play 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
        { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },
        { question: "Which planet is known as the 'Morning Star' or 'Evening Star'?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: "Venus" },
        { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci" },
        { question: "What is the currency of the United Kingdom?", options: ["Euro", "Dollar", "Pound Sterling", "Yen"], answer: "Pound Sterling" },
        { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" }
    ],
    mythology: [
        { question: "Who is the king of the gods in Greek mythology?", options: ["Hades", "Poseidon", "Zeus", "Apollo"], answer: "Zeus" },
        { question: "In Norse mythology, what is the name of Thor's hammer?", options: ["Gungnir", "Mjolnir", "Excalibur", "Aegis"], answer: "Mjolnir" },
        { question: "Who is the Egyptian god of the underworld?", options: ["Ra", "Horus", "Anubis", "Osiris"], answer: "Anubis" },
        { question: "What creature in Greek mythology was half-man, half-bull?", options: ["Centaur", "Satyr", "Minotaur", "Gorgon"], answer: "Minotaur" },
        { question: "Who is the Roman goddess of love and beauty?", options: ["Juno", "Minerva", "Diana", "Venus"], answer: "Venus" },
        { question: "In Japanese mythology, who is the goddess of the sun?", options: ["Tsukuyomi", "Susanoo", "Amaterasu", "Izanami"], answer: "Amaterasu" },
        { question: "What is the name of the multi-headed dog that guards the gates of the Underworld in Greek mythology?", options: ["Cerberus", "Hydra", "Chimera", "Orthrus"], answer: "Cerberus" },
        { question: "Who is the trickster god in Norse mythology?", options: ["Odin", "Thor", "Loki", "Baldr"], answer: "Loki" },
        { question: "From which culture does the legend of the Phoenix originate?", options: ["Norse", "Roman", "Egyptian", "Chinese"], answer: "Egyptian" },
        { question: "In Hindu mythology, who is the god of destruction and transformation?", options: ["Brahma", "Vishnu", "Shiva", "Ganesha"], answer: "Shiva" }
    ]
};

let currentQuizTopic = '';
let currentQuestionIndex = 0;
let score = 0;

const quizTopicSelection = document.getElementById('quiz-topic-selection');
const quizContainer = document.getElementById('quiz-container');
const scoreCard = document.getElementById('quiz-score-card');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score-display');
const nextBtn = document.getElementById('next-btn');

function startQuiz(topic) {
    currentQuizTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    quizTopicSelection.classList.add('hidden');
    scoreCard.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    scoreDisplay.textContent = `Score: 0`;
    showQuestion();
}

function showQuestion() {
    resetQuestionState();
    const questionData = quizData[currentQuizTopic][currentQuestionIndex];
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} / ${quizData[currentQuizTopic].length}`;
    questionTextEl.textContent = questionData.question;

    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('quiz-option');
        button.addEventListener('click', () => selectAnswer(button, option, questionData.answer));
        optionsContainer.appendChild(button);
    });
}

function resetQuestionState() {
    nextBtn.classList.add('hidden');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(selectedButton, selectedOption, correctAnswer) {
    const allOptions = optionsContainer.children;
    if (selectedOption === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
    }
    scoreDisplay.textContent = `Score: ${score}`;
    Array.from(allOptions).forEach(button => {
        button.disabled = true;
        if (button.innerText === correctAnswer) {
            button.classList.add('correct');
        }
    });
    if (currentQuestionIndex < quizData[currentQuizTopic].length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
        setTimeout(showScoreCard, 1000);
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

function showScoreCard() {
    quizContainer.classList.add('hidden');
    scoreCard.classList.remove('hidden');
    const totalQuestions = quizData[currentQuizTopic].length;
    document.getElementById('final-score').textContent = `You scored ${score} out of ${totalQuestions}!`;
    const percentage = (score / totalQuestions) * 100;
    let message = '';
    if (percentage === 100) message = "A perfect score! You're a true cosmic master!";
    else if (percentage >= 70) message = "Excellent work, cadet! Your knowledge is vast.";
    else if (percentage >= 40) message = "A solid effort! Keep exploring the universe.";
    else message = "Back to the academy! The cosmos has more to teach you.";
    document.getElementById('score-message').textContent = message;
}

function resetQuiz() {
    quizContainer.classList.add('hidden');
    scoreCard.classList.add('hidden');
    quizTopicSelection.classList.remove('hidden');
}
