describe('Tech Quiz e2e', () => {
    beforeEach(() => {
      // Load the questions from a fixture and mock the API response
      cy.fixture('questions.json').then((questions) => {
        cy.intercept("GET", '/api/questions', { body: questions }).as("getQuestions");
      });
      // Visit the application URL
      cy.visit('http://127.0.0.1:3001/');
    });
  
    it('starts the quiz and goes through 10 questions', () => {
      // Click the "Start Quiz" button to begin the quiz
      cy.contains('button', 'Start Quiz').click();
  
      // Loop to answer 10 questions
      for (let i = 0; i < 10; i++) {
        // Click the first answer button for each question
        cy.get('.btn.btn-primary').first().click();
        // Wait for the next question to load
        cy.wait(500);
      }
  
      // Verify that the result screen is displayed with the score
      cy.contains('.alert.alert-success', /Your score:/).should('be.visible');
    });
  
    it('allows restarting the quiz', () => {
      // Start the quiz by clicking the "Start Quiz" button
      cy.contains('button', 'Start Quiz').click();
  
      // Loop to answer 10 questions
      for (let i = 0; i < 10; i++) {
        cy.get('.btn.btn-primary').first().click();
        cy.wait(500);
      }
  
      // Verify that the result screen is displayed with the score
      cy.contains('.alert.alert-success', /Your score:/).should('be.visible');
  
      // 💡 Wait until the "Take New Quiz" button is visible before clicking it
      cy.contains('button', /^Take New Quiz$/).should('be.visible').click();
  
    
    });
  });
  