describe('Order', () => {
  it('should order products', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/registration" page',
      'When I fill in the email address "max{{timestamp}}@mail.de" in the email field',
      'And I type "12345" in the password field',
      'And I type "12345" in the password repeat field',
      'And I check the terms and conditions checkbox',
      'And I click the "Konto erstellen" button',
      'And I click the first product item',
      'And I click the first variant selector link',
      'And I click the product add button',
      'Then I should see the notification "Anzughose wurde zum Warenkorb hinzugefügt"',
      'When I visit the "https://test-boutique.vercel.app" page',
      'And I click the second product item',
      'And I click the first variant selector link',
      'And I click the product add button',
      'Then I should see the notification "Business Hemd wurde zum Warenkorb hinzugefügt"',
      'When I click the basket icon',
      'Then I should see "Anzughose" in the basket',
      'And I should see the size "M" for "Anzughose" in the basket',
      'And I should see the price "79.99 €" for "Anzughose" in the basket',
      'And I should see "Business Hemd" in the basket',
      'And I should see the size "L" for "Business Hemd" in the basket',
      'And I should see the price "34.99 €" for "Business Hemd" in the basket',
      'And I should see the net amount "96.62 €"',
      'And I should see the VAT "18.36 €"',
      'And I should see the total "114.98 €"',
      'When I click the "Jetzt kaufen" button',
      'Then I should see the text "Bestellung erfolgreich!"',
      'And the order section should not be empty',
    ], 
    {  
      placeholders: {
        'timestamp': String(Date.now())
    }})
  })
})
