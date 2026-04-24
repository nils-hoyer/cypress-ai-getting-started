describe('Feedback', () => {
  it('should send feedback form successfully', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the footer feedback link',
      'And I check the selector data-testid="title-herr"',
      'And I type "Nils" in the name field',
      'And I type "nils@mail.de" in the email field',
      'And I type "015120178801" in the phone field',
      'And I select "DE" in the country dropdown',
      'And I type "2016-03-17" in the order date field',
      'And I select "test" in the order reason dropdown',
      'And I set the delivery satisfaction range to "10"',
      'And I set the product satisfaction range to "9"',
      'And I set the shop satisfaction range to "8"',
      'And I check the selector [data-testid="satisfaction-4"]',
      'And I type "Das ist mein Feedback" in the comment textarea',
      'Then I should see the text "21/500 Zeichen"',
      // 'When I upload the file "docs/npm-scripts.png" in the photo upload field',
      // 'And I read the captcha code and type it in the captcha input field',
      'When I select the current day in the calendar',
      'When I select Geschenk from Grund der Bestellung',
      'When I type 12345 into first table column Produkt-ID',
      'When I choose size XS from first table column Size',
      'When I choose "Ausgezeichnete Qualität" from first table column feedback',
      'When I click the submit button',
      'Then I should see the text "Vielen Dank für Ihr Feedback! Ihre Bewertung wurde erfolgreich übermittelt."',
    ])
  })
})
