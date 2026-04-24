describe('Registration', () => {
  it('test registration successfully', () => {
      cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the login icon',
      'And I click the registration tab',
      'And I fill in the email address "me{{timestamp}}@mail.de" in the email field',
      'And I type "12345" in the password field',
      'And I type "12345" in the password repeat field',
      'And I check the terms and conditions checkbox',
      'And I click the "Konto erstellen" button',
      'Then the user avatar should contain the text "me"',
    ], {
      placeholders: {
        'timestamp': String(Date.now()),
    }});
  })

  it('test registration failed with existing email', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/registration" page',
      'When I type "max@mail.de" in the email field',
      'And I type "12345" in the password field',
      'And I type "12345" in the password repeat field',
      'And I check the terms and conditions checkbox',
      'And I click the "Konto erstellen" button',
      'Then I should see the error message "E-Mail-Adresse bereits vorhanden"',
    ])
  })

  it('test registration failed with empty fields', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/registration" page',
      'When I click the "Konto erstellen" button',
      'When I wait for 2 seconds',
      'Then url should contains "/registration"'
    ])
  })
})
