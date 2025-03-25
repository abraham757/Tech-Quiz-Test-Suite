# 19 Testing: Tech Quiz Test Suite

This week's assignment emphasizes the importance of ensuring reliability and robustness in modern web applications through comprehensive testing. In today’s fast-paced development environment, testing is not just an afterthought but a critical part of the development process, ensuring applications meet user demands and perform efficiently under various conditions.

Your goal is to enhance an existing, fully functional Tech Quiz application by adding Cypress for both component and end-to-end tests. The app is built using the MERN stack: MongoDB, Express.js, React, and Node.js. It allows users to take a quiz with ten random questions and view their final score.

To complete the assignment, you need to:

Install Cypress as a dev dependency

Configure Cypress for both component and end-to-end testing

Create a component test for the quiz component

Create an end-to-end test for the quiz component

User Story
md
Copy
Edit
AS an aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills
Acceptance Criteria
md
Copy
Edit
GIVEN I am taking a tech quiz
WHEN I click the start button
THEN the quiz starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN all questions are answered
THEN the quiz is over
WHEN the quiz is over
THEN I can view my score
WHEN the quiz is over
THEN I can start a new quiz
Mock-Up
The following animation demonstrates the application functionality:



Getting Started
This Challenge combines many of the skills we've covered so far. In addition to the user story and acceptance criteria, we’ve provided some guidelines to help you get started.

Since this challenge requires a video submission, refer to the Full-Stack Blog video submission guide for instructions on creating and sharing a video.

Important: You won’t need to modify code for the existing application. For this challenge, you will only be creating tests for the existing application.

Your testing should use Cypress to run both component and end-to-end tests. The testing will be invoked using the following command:

bash
Copy
Edit
npm run test
Directory Structure
It is recommended that you structure your project directory as follows:

md
Copy
Edit
.
├── client/                 // the client application
├── cypress/                // Folder for Cypress
    ├── component/          // Folder for component tests
        └── Quiz.cy.jsx     // Component tests for the Quiz component
    ├── e2e/                // Folder for end-to-end tests
        └── quiz.cy.js      // End-to-end tests for the Tech Quiz
    ├── fixtures/           // Folder for test fixtures
        └── questions.json  // Mock data for testing
    └── tsconfig.json
├── server/                 // the server application
├── .gitignore
├── cypress.config.ts       // Configuration for running the application using imports from lib/
├── package.json
├── tsconfig.json
└── README.md       
