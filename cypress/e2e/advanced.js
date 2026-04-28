import login, { login2 } from "../support/login "

describe('Advanced examples', () => {
  it('test fixtures', () => {
    cy.fixture('user1').as('user1');
    cy.fixture('user2').as('user2');

    cy.then(function () {
      const users = this.user1;
      // debugger;
    })

    cy.get('@user1').then((user1) => {
      cy.get('@user2').then((user2) => {
        const _user1 = user1;
        const _user2 = user2;

        debugger;     
      })
    })
  })

  it('test custom functions', () => {
    cy.login('Testing fixtures');
    login.login2();
  })

})
