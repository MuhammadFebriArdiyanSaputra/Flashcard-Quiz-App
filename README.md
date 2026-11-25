# Flashcard Quiz App

An interactive Flashcard Quiz application built with **TypeScript** as part of the **freeCodeCamp** curriculum. This lab focuses on using TypeScript interfaces, custom error handling, and DOM manipulation to create, flip, and manage study flashcards.

## Features

- **Interactive Card Flipping:** Click the flashcard (`#flashcard`) to toggle the `flipped` state and switch between the question and answer.
- **Create & Delete Cards:** Add new flashcards via the entry form (`#entry-form`) or remove existing ones using the delete button (`#delete-btn`).
- **Input Validation:** Throws a custom `InvalidUserInputError` when attempting to submit empty question or answer fields.
- **Typed Data Structure:** Uses a strict `FlashCard` interface to manage the `currentCards` collection.

## Technologies Used

- TypeScript
- HTML5
- CSS3

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com
   ```
2. Compile `index.ts` to JavaScript (or run directly inside a TypeScript-enabled environment like the freeCodeCamp editor) and open `index.html` in your browser.

## Acknowledgments

- Project specifications and user stories provided by [freeCodeCamp](https://freecodecamp.org).
