describe('Product Detail', () => {
  it('should add product to basket', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the link "Anzughose"',
      'And I click the product size "M"',
      'And I click the product add button',
      'Then I should see the notification "Anzughose wurde zum Warenkorb hinzugefügt"',
      'And the basket icon should contain the text "1 Artikel im Warenkorb, Warenkorb anzeigen"',
      'When I click the basket icon',
      'Then I should see the heading "Anzughose"',
    ])
  })

  it('should not add product to basket without size selection', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app" page',
      'When I click the link "Anzughose"',
      'Then the product add button selector "data-testid=product-add-button" should have attribute "disabled"',
    ])
  })

  it('should show product data', () => {
    cy.prompt([
      'Given I visit the "https://test-boutique.vercel.app/products/b55918cf-e8ad-4791-9825-1d0693d3f68f" page',
      'Then the product image should have a attributes width of 1024 and height of 1024',
      'And the product title should have the text "Anzughose"',
      'And the product price should have the text "79.99 €"',
      'And the product description should contain the text "Eine elegante Anzughose. Perfekt für geschäftliche Anlässe oder besondere Events."',
      'And the size button "M" should have the text "M"',
      'And the size button "L" should have the text "L"',
      'And the size button "XL" should have the text "XL"',
    ])
  })
})
