describe('Login', () => {
  it('should login successfully', () => {
    // GIVEN
    cy.visit('/')

    // WHEN
    cy.get('[data-testid="login-icon"]').click()
    cy.get('[data-testid="login-email"]').type('max@mail.de')
    cy.get('[data-testid="login-password"]').type('12345')
    cy.get('[data-testid="login-button"]').click()

    // THEN
    cy.get('[data-testid="user-avatar"]').should('contain.text', 'MM')
  })

  it('should login successfully with cy.prompt', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the login icon',
      'And I type "max@mail.de" in the email field',
      'And I type "12345" in the password field',
      'And I click the login button',
      'Then I should see the user avatar containing the text "MM"',
      'And I should see the body'
    ])
  })

})
