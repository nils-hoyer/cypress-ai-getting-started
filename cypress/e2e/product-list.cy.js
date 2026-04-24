describe('Product List', () => {
  it.only('should open multiple products', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the link "Anzughose"',
      'Then the product title should contain the text "Anzughose"',
      'When I click the header logo link',
      'And I click the link "Business Hemd"',
      'Then the product title should contain the text "Business Hemd"',
      'When I click the header logo link',
      'And I click the link "Cardigan"',
      'Then the product title should contain the text "Cardigan"',
    ])
  })

  it('should open multiple products with filter', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the product item containing the text "Anzughose"',
      'Then the product title should contain the text "Anzughose"',
      'When I click the header logo link',
      'And I click the second product item',
      'Then the product title should contain the text "Business Hemd"',
      'When I click the header logo link',
      'And I click the last product item',
      'Then the product title should contain the text "Zip-Up Hoodie"',
    ])
  })
})
