const li_style =
  "border-b mb-1 mx-3 py-1 hover:text-white hover:border-white px-2";
document.addEventListener("DOMContentLoaded", () => {
  let startBtn = document.getElementById("start-btn");
  let openingPage = document.getElementById("opening-page");
  let questionsPage = document.getElementById("questions-page");
  let questionText = document.getElementById("question-text");
  let optionsList = document.getElementById("options-list");
  let nextBtn = document.getElementById("next-btn");
  let resultsPage = document.getElementById("results-page");
  let scoreDisplay = document.getElementById("score-display");
  let totalDisplay = document.getElementById("total-display");
  let restartBtn = document.getElementById("restart-btn");

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Amsterdam", "Tbilisi", "Bratislava"],
      answer: "Paris",
    },
    {
      question: "What is the capital of China?",
      options: ["Guangdong", "Beijing", "Chonqing", "Ho Chi Minh City"],
      answer: "Beijing",
    },
    {
      question: "What is the capital of Bhutan?",
      options: ["Pokhra", "Kurseong", "Hunza", "Thimpu"],
      answer: "Thimpu",
    },
    {
      question: "What is the capital of Colombia?",
      options: ["Lima", "Medellin", "Cali", "Bogota"],
      answer: "Bogota",
    },
    {
      question: "What is the capital of Burkina Faso?",
      options: ["Ouagadougou", "Abidjan", "Dae es Salaam", "Kinshasa"],
      answer: "Ouagadougou",
    },
  ];

  let index = 0;

  let maxLength = questions.length;

  let selectedOption = null;

  let score = 0;

  startBtn.addEventListener("click", () => {
    openingPage.classList.add("hidden");
    questionsPage.classList.remove("hidden");
    resultsPage.classList.add("hidden");
    renderQuestion();
  });

  nextBtn.addEventListener("click", () => {
    if (selectedOption === questions[index]["answer"]) {
      score++;
    }
    index++;
    if (index < maxLength) {
      renderQuestion();
    } else {
      openingPage.classList.add("hidden");
      questionsPage.classList.add("hidden");
      resultsPage.classList.remove("hidden");
      scoreDisplay.textContent = score;
      totalDisplay.textContent = maxLength;
    }
  });

  function renderQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[index]["question"];
    optionsList.innerHTML = "";
    questions[index]["options"].forEach((option) => {
      let new_li = document.createElement("li");
      new_li.textContent = option;
      new_li.className = li_style;
      optionsList.appendChild(new_li);
      new_li.addEventListener("click", () => {
        removeSelectedFromAll();
        new_li.classList.add("text-white", "border-white");
        selectedOption = option;
        nextBtn.classList.remove("hidden");
      });
    });
  }

  function removeSelectedFromAll() {
    optionsList.querySelectorAll("li").forEach((li) => {
      li.classList.remove("text-white");
      li.classList.remove("border-white");
    });
  }

  restartBtn.addEventListener("click", () => {
    score = 0;
    index = 0;
    openingPage.classList.remove("hidden");
    questionsPage.classList.add("hidden");
    resultsPage.classList.add("hidden");
  });
});
