describe('Product Categories', () => {
  it('should have 6 products in Hemden category', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the "Hemden" navigation link',
      'When I wait for 2 seconds',
      'Then the first product item should contain the text "Business Hemd"',
      'Then the first product item should contain the text "hemden"',
      'Then the first product item should contain the text "34.99 €"',
      'And the last product item should contain the text "Tank Top" and "hemden" and "14.99 €"',
    ])
  })
})
