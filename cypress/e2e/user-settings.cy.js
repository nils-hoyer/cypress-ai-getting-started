describe('User Settings', () => {
  it('should login successfully', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/registration" page',
      'When I fill in the email address "max{{timestamp}}@mail.de" in the email field',
      'And I type "12345" in the password field',
      'And I type "12345" in the password repeat field',
      'And I check the terms and conditions checkbox',
      'And I click the "Konto erstellen" button',
      'And I click the user menu button',
      'And I click the "Einstellungen" menu item',
      // 'Then the current avatar image should not be visible',
      'When I click the input[value="prefer-not-to-say"]',
      // 'And I upload the file "docs/playwright-extension.png" in the avatar file input',
      'And I click the save button',
      'Then I should see the notification "Benutzerdaten erfolgreich aktualisiert"',
      'When I visit the "https://test-boutique.vercel.app/user/settings" page',
      'Then the input[value="prefer-not-to-say"] should have attribute checked',
      // 'And the current avatar image should be visible',
    ], {placeholders: {
      timestamp: String(Date.now())
    }})
  })
})
