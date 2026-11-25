interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}

const currentCards: FlashCard[] = [
  {
    questionText: "What does HTML stand for?",
    questionAnswer: "HyperText Markup Language",
  },
  {
    questionText: "What is TypeScript?",
    questionAnswer: "A strongly typed programming language that builds on JavaScript.",
  },
];

let currentIndex = 0;

const flashcardEl = document.getElementById("flashcard") as HTMLElement;
const cardContentEl = document.getElementById("card-content") as HTMLElement;
const cardLabelEl = document.getElementById("card-label") as HTMLElement;
const cardCounterEl = document.getElementById("card-counter") as HTMLElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const prevBtn = document.getElementById("prev-btn") as HTMLButtonElement;
const nextBtn = document.getElementById("next-btn") as HTMLButtonElement;
const entryForm = document.getElementById("entry-form") as HTMLFormElement;
const frontTextInput = document.getElementById("front-text") as HTMLTextAreaElement;
const backTextInput = document.getElementById("back-text") as HTMLTextAreaElement;
const errorMsgEl = document.getElementById("error-msg") as HTMLElement;

function renderCard(): void {
  flashcardEl.classList.remove("flipped");

  if (currentCards.length === 0) {
    cardLabelEl.textContent = "EMPTY";
    cardContentEl.textContent = "No flashcards available. Add a new card below!";
    cardCounterEl.textContent = "0 / 0";
    return;
  }

  const card = currentCards[currentIndex];
  cardLabelEl.textContent = "QUESTION";
  cardContentEl.textContent = card.questionText;
  cardCounterEl.textContent = `${currentIndex + 1} / ${currentCards.length}`;
}

flashcardEl.addEventListener("click", () => {
  flashcardEl.classList.toggle("flipped");

  if (currentCards.length === 0) return;

  const card = currentCards[currentIndex];
  if (flashcardEl.classList.contains("flipped")) {
    cardLabelEl.textContent = "ANSWER";
    cardContentEl.textContent = card.questionAnswer;
  } else {
    cardLabelEl.textContent = "QUESTION";
    cardContentEl.textContent = card.questionText;
  }
});

deleteBtn.addEventListener("click", () => {
  if (currentCards.length === 0) return;
  currentCards.splice(currentIndex, 1);
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  renderCard();
});

prevBtn.addEventListener("click", () => {
  if (currentCards.length === 0) return;
  currentIndex = (currentIndex - 1 + currentCards.length) % currentCards.length;
  renderCard();
});

nextBtn.addEventListener("click", () => {
  if (currentCards.length === 0) return;
  currentIndex = (currentIndex + 1) % currentCards.length;
  renderCard();
});

entryForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  errorMsgEl.textContent = "";

  const question = frontTextInput.value.trim();
  const answer = backTextInput.value.trim();

  if (!question || !answer) {
    errorMsgEl.textContent = "Both question and answer fields are required.";
    throw new InvalidUserInputError("Question text and question answer cannot be empty.");
  }

  currentCards.push({
    questionText: question,
    questionAnswer: answer,
  });
  currentIndex = currentCards.length - 1;

  frontTextInput.value = "";
  backTextInput.value = "";
  renderCard();
});

renderCard();
