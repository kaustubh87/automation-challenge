const { Section2 } = require('../objects/section-2')

describe('Http: Waiting for network calls', () => {
  it('Click on the following button to trigger an abnormally long network call (+10sec)', () =>{
      cy.visit("http://localhost:8080/section-2")
      cy.server();
      cy.route('GET', '/api/').as('route1');
      cy.get('#network-call-button').click()
  });
  
})
