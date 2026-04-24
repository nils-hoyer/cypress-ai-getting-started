describe('User Orders', () => {
  it('should have order details', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/login" page',
      'When I type "max@mail.de" in the email field',
      'And I type "12345" in the password field',
      'And I click the login button',
      'And I click the user menu button',
      'And I click the "Bestellungen" menu item',
      'Then I should see the order id "4s222405-a469-4333-b3c3-4d322902646e"',
    ])
  })
})
