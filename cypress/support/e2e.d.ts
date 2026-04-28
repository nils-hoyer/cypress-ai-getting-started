declare namespace Cypress {
  interface Chainable {
    login(user: string): Chainable<void>;
  }
}
