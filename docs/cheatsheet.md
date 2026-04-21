# Cypress AI Cheat Sheet

Übersichtliche Referenz der wichtigsten Cypress- und Cypress AI-Befehle.

## Test-Struktur

#### Grundlegender Test
```javascript
describe('Test-Suite', () => {
  it('Test-Beschreibung', () => {
    cy.prompt([
      'visit url https://test-boutique.vercel.app',
      'click on product 1',
      'verify the page title is "Test-Boutique"',
    ])
  })
})
```

Der generierte Code kann so aussehen:

```javascript
describe('Test-Suite', () => {
  it('Test-Beschreibung', () => {
    cy.visit('https://test-boutique.vercel.app')
    // click on product 1
    cy.get('[data-testid="product-1"]').click()
    // verify the page title is "Test-Boutique"
    cy.title().should('eq', 'Test-Boutique')
  })
})
```

#### Test deaktivieren
```javascript
// Test überspringen
it.skip('defekter Test', () => {
  // ...
})
```

## Locators

#### Grundlegende Locators
Das sind die empfohlenen Selektoren. Priorität in der angegebenen Reihenfolge.

```javascript
// Nach TestId
cy.get('[data-testid="login-form"]')

// Nach Text
cy.contains('Willkommen')
cy.contains(/willkommen/i) // Groß-/Kleinschreibung ignorieren
```

#### CSS Locators
Falls notwendig könnt ihr auf CSS Selektoren zurückgreifen.

```javascript
// CSS-Selektoren
cy.get('.class-name')
cy.get('#id-name')
cy.get('input[type="email"]')

// Locators kombinieren (scope)
cy.get('#container').find('.item')
cy.get('.form').find('input[type="submit"]')
```

#### Locators filtern
```javascript
// Nach Text filtern
cy.get('.items').contains('Item 3')

// Nach Kind-Element filtern
cy.get('.items').find('.selected')

// Erstes/letztes/n-tes Element abrufen
cy.get('.item').first()
cy.get('.item').last()
cy.get('.item').eq(2)
```

Weitere Informationen zu Locators: [Cypress Selectors Dokumentation](https://docs.cypress.io/api/commands/get)

## Actions

#### Navigation
```javascript
// Zu URL navigieren
cy.visit('https://example.com')
cy.visit('/relativer-pfad')
```

#### Klicks und Interaktionen
```javascript
// Klicken
cy.get('button').click()
cy.get('button').dblclick() // Doppelklick

// Hover
cy.get('.menu').trigger('mouseover')

// Drag & Drop
cy.get('#source').drag('#target')
```

#### Formular-Interaktionen
```javascript
// Eingabefeld ausfüllen
cy.get('input').type('text')

// Eingabefeld leeren
cy.get('input').clear()

// Dropdown-Option auswählen
cy.get('select').select('value')
cy.get('select').select('Options-Text')
cy.get('select').select(2) // Auswahl nach Index

// Checkbox an-/abwählen
cy.get('input[type="checkbox"]').check()
cy.get('input[type="checkbox"]').uncheck()

// Datei hochladen
cy.get('input[type="file"]').selectFile('path/to/file.txt')
```

#### Tastatur und Maus
```javascript
// Tastenkombinationen
cy.get('input').type('{enter}')
cy.get('input').type('{ctrl+a}')
```

Weitere Informationen zu Actions: [Cypress Actions Dokumentation](https://docs.cypress.io/api/table-of-contents#Actions)

## Assertions

#### Seiten-Überprüfungen
```javascript
// Seiten-URL
cy.url().should('eq', 'https://example.com')
cy.url().should('include', '/beispiel')

// Seitentitel
cy.title().should('eq', 'Seitentitel')
cy.title().should('include', 'teil')
```

#### Element-Überprüfungen
```javascript
// Sichtbarkeit
cy.get(locator).should('be.visible')
cy.get(locator).should('not.be.visible')

// Textinhalt
cy.get(locator).should('have.text', 'exakter text')
cy.get(locator).should('contain.text', 'teil-text')

// Element-Eigenschaften
cy.get(locator).should('be.enabled')
cy.get(locator).should('be.disabled')
cy.get(locator).should('be.checked')
cy.get(locator).should('be.empty')

// Formular-Werte
cy.get(locator).should('have.value', 'input-value')

// Anzahl
cy.get(locator).should('have.length', 5)
```

#### Negationen
```javascript
// .not für negative Überprüfungen verwenden
cy.get(locator).should('not.be.empty')
cy.get(locator).should('not.contain.text', 'unerwünschter text')
```

Weitere Informationen zu Assertions: [Cypress Assertions Dokumentation](https://docs.cypress.io/app/references/assertions)

#### CLI-Befehle

```bash
# Alle Tests ausführen (headless)
npx cypress run

# Mit einem bestimmten Browser ausführen
npx cypress run --browser chrome

# Spezifischen Test ausführen
npx cypress run --spec cypress/e2e/login.cy.ts

# Cypress interaktiv öffnen
npx cypress open
```

Weitere Informationen zur Cypress CLI: [Cypress CLI Dokumentation](https://docs.cypress.io/app/references/command-line)

## Nützliche Links

- [Cypress Dokumentation](https://docs.cypress.io/)
- [Cypress API](https://docs.cypress.io/api/table-of-contents)
- [Test Debugging](https://docs.cypress.io/app/core-concepts/open-mode)
- [Best Practices](https://docs.cypress.io/app/core-concepts/best-practices)