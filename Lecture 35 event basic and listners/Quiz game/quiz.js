const questions = [
    {
        title:
            "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
        options: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor.",
            "Lorem ipsum dolor sit amet.",
        ],
        correctOption: 2,
    },
    {
        title:
            "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
        options: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor.",
            "Lorem ipsum dolor sit amet.",
        ],
        correctOption: 2,
    },
    {
        title:
            "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
        options: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor.",
            "Lorem ipsum dolor sit amet.",
        ],
        correctOption: 2,
    },
    {
        title:
            "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
        options: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor.",
            "Lorem ipsum dolor sit amet.",
        ],
        correctOption: 2,
    },
    {
        title:
            "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
        options: [
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor.",
            "Lorem ipsum dolor sit amet.",
        ],
        correctOption: 2,
    },
];

let currQuesIdx = 0;
let score = 0;
const correctAnswerScore = 4;
const wrongAnswerScore = -1;

const questionSection = document.querySelector(".questions");

const questionTitle = document.querySelector(".que");

const option1 = document.querySelector(".option-1");
const option2 = document.querySelector(".option-2");
const option3 = document.querySelector(".option-3");
const option4 = document.querySelector(".option-4");

const nextBtn = document.querySelector(".next");

const scoreSection = document.querySelector(".score");

function changeScore(optionNumber) {
    if (questions[currQuesIdx].correctOption === optionNumber)
        score += correctAnswerScore;
    else score += wrongAnswerScore;
}

function changeQuestion() {
    if (currQuesIdx === questions.length - 1) {
        questionSection.style.display = "none";
        scoreSection.style.display = "block";
        if (score <= 5) {
            scoreSection.textContent = "Your Score: " + score + "\n" + "Better luck next time!";
        }else if (score <= 12) {
            scoreSection.textContent = "Your Score: " + score + "\n" + "Good job!";
        }else {
            scoreSection.textContent = "Your Score: " + score + "\n" + "Excellent!";
        }
        return;
    }

    currQuesIdx++;

    const questionObj = questions[currQuesIdx];

    questionTitle.textContent = questionObj.title;
    option1.textContent = questionObj.options[0];
    option2.textContent = questionObj.options[1];
    option3.textContent = questionObj.options[2];
    option4.textContent = questionObj.options[3];
}

nextBtn.addEventListener("click", changeQuestion);

option1.addEventListener("click", () => {
    changeScore(1);
    changeQuestion();
});

option2.addEventListener("click", () => {
    changeScore(2);
    changeQuestion();
});
option3.addEventListener("click", () => {
    changeScore(3);
    changeQuestion();
});
option4.addEventListener("click", () => {
    changeScore(4);
    changeQuestion();
});