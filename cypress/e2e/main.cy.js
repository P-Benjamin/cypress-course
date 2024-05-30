/// <reference types="cypress" />

describe('First Test', () => {
    beforeEach(() => {
      cy.visit('../../app/index.html')
    })
  
    it('Contains hello world', () => {
      
      cy.get('p').should('have.text', "Hello World!")
  
      })
  
  })
  