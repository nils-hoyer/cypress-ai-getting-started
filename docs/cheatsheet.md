# Cypress AI Cheat Sheet

Übersichtliche Referenz der wichtigsten Cypress- und Cypress AI-Befehle.

## cy.prompt (Cypress AI)

`cy.prompt` ist der KI-gesteuerte Befehl in Cypress AI. Er nimmt eine natürlichsprachliche Anweisung entgegen und übersetzt sie automatisch in Cypress-Aktionen.

#### Grundlegende Verwendung
```typescript
// Einzelne Aktion
cy.prompt('Click the login button')

// Mehrere Aktionen in einem Schritt
cy.prompt('Fill the email field with max@mail.de and the password field with 12345, then click login')

// Navigation
cy.prompt('Navigate to the login page')
```

#### cy.prompt im Test
```typescript
describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('/')
    cy.prompt('Click the login icon, fill email with max@mail.de and password with 12345, then click the login button')
    cy.get('[data-testid="user-avatar"]').should('contain.text', 'MM')
  })
})
```

## Test-Struktur

#### Grundlegender Test
```typescript
describe('Test-Suite', () => {
  it('Test-Beschreibung', () => {
    cy.visit('https://test-boutique.vercel.app')
    cy.get('[data-testid="product-1"]').click()
    cy.title().should('eq', 'Test-Boutique')
  })
})
```

#### Test deaktivieren
```typescript
// Test überspringen
it.skip('defekter Test', () => {
  // ...
})
```

## Locators

#### Grundlegende Locators
Das sind die empfohlenen Selektoren. Priorität in der angegebenen Reihenfolge.

```typescript
// Nach TestId
cy.get('[data-testid="login-form"]')

// Nach Role (mit @testing-library/cypress)
cy.findByRole('button', { name: 'Senden' })
cy.findByRole('link', { name: 'Startseite' })

// Nach Text
cy.contains('Willkommen')
cy.contains(/willkommen/i) // Groß-/Kleinschreibung ignorieren
```

#### CSS Locators
Falls notwendig könnt ihr auf CSS Selektoren zurückgreifen.

```typescript
// CSS-Selektoren
cy.get('.class-name')
cy.get('#id-name')
cy.get('input[type="email"]')

// Locators kombinieren (scope)
cy.get('#container').find('.item')
cy.get('.form').find('input[type="submit"]')
```

#### Locators filtern
```typescript
// Nach Text filtern
cy.get('.items').contains('Item 3')

// Nach Kind-Element filtern
cy.get('.items').find('.selected')

// Erstes/letztes/n-tes Element abrufen
cy.get('.item').first()
cy.get('.item').last()
cy.get('.item').eq(2)
```

Weitere Informationen zu Locators: [Cypress Selectors Dokumentation](https://docs.cypress.io/app/guides/element-selection)

## Actions

#### Navigation
```typescript
// Zu URL navigieren
cy.visit('https://example.com')
cy.visit('/relativer-pfad')
```

#### Klicks und Interaktionen
```typescript
// Klicken
cy.get('button').click()
cy.get('button').dblclick() // Doppelklick

// Hover
cy.get('.menu').trigger('mouseover')

// Drag & Drop
cy.get('#source').drag('#target')
```

#### Formular-Interaktionen
```typescript
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
```typescript
// Tastenkombinationen
cy.get('input').type('{enter}')
cy.get('input').type('{ctrl+a}')
```

Weitere Informationen zu Actions: [Cypress Actions Dokumentation](https://docs.cypress.io/app/core-concepts/interacting-with-elements)

## Assertions

#### Seiten-Überprüfungen
```typescript
// Seiten-URL
cy.url().should('eq', 'https://example.com')
cy.url().should('include', '/beispiel')

// Seitentitel
cy.title().should('eq', 'Seitentitel')
cy.title().should('include', 'teil')
```

#### Element-Überprüfungen
```typescript
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
```typescript
// .not für negative Überprüfungen verwenden
cy.get(locator).should('not.be.empty')
cy.get(locator).should('not.contain.text', 'unerwünschter text')
```

Weitere Informationen zu Assertions: [Cypress Assertions Dokumentation](https://docs.cypress.io/app/references/assertions)


## Page Object Pattern

#### Page Object
```typescript
// cypress/pages/login-page.ts
export class LoginPage {
  // Locators
  emailInput = '[data-testid="login-email"]'
  passwordInput = '[data-testid="login-password"]'
  loginButton = '[data-testid="login-button"]'

  // Actions
  goto() {
    cy.visit('/login')
  }

  login(email: string, password: string) {
    cy.get(this.emailInput).type(email)
    cy.get(this.passwordInput).type(password)
    cy.get(this.loginButton).click()
  }
}
```

#### Page Object im Test verwenden
```typescript
import { LoginPage } from '../pages/login-page'

describe('Login mit Page Object', () => {
  it('should login', () => {
    const loginPage = new LoginPage()

    loginPage.goto()
    loginPage.login('max@mail.de', '12345')

    cy.url().should('eq', '/')
  })
})
```

Weitere Informationen zu Page Object: [Cypress Custom Commands Dokumentation](https://docs.cypress.io/app/core-concepts/best-practices)

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
- [Cypress AI Dokumentation](https://docs.cypress.io/ai)
- [Test Debugging](https://docs.cypress.io/app/core-concepts/open-mode)
- [HTML Aria Roles](https://www.w3.org/TR/html-aria/#docconformance)
- [Best Practices](https://docs.cypress.io/app/core-concepts/best-practices)