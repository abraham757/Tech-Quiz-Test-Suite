import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';
import { MemoryRouter } from 'react-router-dom';

describe('Quiz Component', () => {
  it('renders the quiz and shows the first question after starting', () => {
    mount(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    cy.contains('Start Quiz').click(); // 🔹 Inicia el quiz
    cy.get('h2').should('exist'); // 🔹 Espera que aparezca la primera pregunta
    cy.contains('What is the capital of France?'); // 🔹 Comprueba la primera pregunta
  });

  it('selects an answer and moves to the next question', () => {
    mount(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    cy.contains('Start Quiz').click(); // 🔹 Inicia el quiz

    // Simula una selección de respuesta en la primera pregunta
    cy.contains('Paris').click(); 

    // Espera que se haga clic en el botón "Next" (si existe) y pase a la siguiente pregunta
    cy.contains('Next').click(); 

    // Asegura que la siguiente pregunta se muestra
    cy.get('h2').should('not.contain', 'What is the capital of France?'); // 🔹 Asegura que la pregunta anterior ya no está
    cy.contains('Next'); // 🔹 Espera que el botón "Next" esté presente para la siguiente pregunta
  });

  it('finishes the quiz after answering all questions', () => {
    mount(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    cy.contains('Start Quiz').click(); // 🔹 Inicia el quiz

    // Responde todas las preguntas
    cy.contains('Paris').click();
    cy.contains('Next').click(); // 🔹 Pasa a la siguiente pregunta

    // Verifica que al final se vea "Quiz Completed"
    cy.contains('Quiz Completed').should('exist');
  });
});
