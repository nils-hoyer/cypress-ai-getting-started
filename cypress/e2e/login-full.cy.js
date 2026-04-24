describe('Login', () => {
  it('should login successfully', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the login icon',
      'And I type "max@mail.de" in the email field',
      'And I type "12345" in the password field',
      'And I click the login button',
      'Then I should see the user avatar containing the text "MM"',
    ])
  })

  it('should show error with bad email', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/login" page',
      'When I type "12345" in the password field',
      'And I type "invalid@mail.de" in the email field',
      'And I click the login button',
      'Then I should see the error message "Benutzer nicht gefunden"',
    ])
  })

  it('should show error with bad password', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/login" page',
      'When I type "max@mail.de" in the email field',
      'And I type "invalidPassword" in the password field',
      'And I click the login button',
      'Then I should see the error message "Benutzer nicht gefunden"',
    ])
  })

  it('should show invalidity messages for empty fields', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/login" page',
      'When I click the login button',
      'Then I should see the error message "E-Mail-Adresse ist erforderlich"',
      'When I type "max@mail.de" in the email field',
      'And I click the login button',
      'Then I should see the error message "Passwort ist erforderlich"',
    ])
  })
})
