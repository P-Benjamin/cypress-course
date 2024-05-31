/// <reference types="cypress" />

describe('First Test', () => {
    beforeEach(() => {
      cy.visit('../../app/lightbox.html')
    })
  
    /*it('Contains hello world', () => {
      
      cy.get('p').should('have.text', "Hello World!")
  
      })

      it('ceasar compute should be correct', () => {
        cy.get('#shift').type('6');
        cy.get('#text').type('Hello World!');
        cy.dataCy('CypherButton')
        cy.get('#result').should('have.text', 'Nkrru Cuxrj!');
    });*/
    
    it('Open Image', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=imgResize]').should("be.visible")
    })

    it('Close Image', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=imgResize]').should("be.visible")
      cy.get('body').click(0, 0) 
      cy.get('[data-cy=imgResize]').should('not.be.visible')
    })

    it('Like Count +1', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=LikeCountButton]').click()
      cy.get('body').click(0, 0) 
      cy.get('[data-cy=likeCount]').should("contain",'1')
    })

    it('Like Count -1', () =>{

      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=LikeCountButton]').click()
      cy.get('body').click(0, 0) 
      cy.get('[data-cy=likeCount]').contains('1')

      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=LikeDisCountButton]').click()
      cy.get('body').click(0, 0) 
      cy.get('[data-cy=likeCount]').contains('0')
    })
    

    it('Add Comment', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=addComment]').type("Cypress is awesome!")
      cy.get('[data-cy=publishComment]').click()
      cy.get('[data-cy=comment]').find('div').should('contain',"Cypress is awesome!")
    })

    it('Cannot add empty comment', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=publishComment]').should('be.disabled')
    })

    it('Hide Comment', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=addComment]').type("Cypress is awesome!")
      cy.get('[data-cy=publishComment]').click()
      cy.get('[data-cy=comment]').find('div').should('contain',"Cypress is awesome!")

      cy.get('[data-cy=hideComment]').click()
      cy.get('[data-cy=comment]').find('div').should('not.be.visible')

    })

    it('Comment Count +1', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=addComment]').type("Cypress is awesome!")
      cy.get('[data-cy=publishComment]').click()
      
      cy.get('body').click(0, 0) 
      cy.get('[data-cy=commentCount]').should("contain",'1')
    })

    it('Pluriel>', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=addComment]').type("Cypress is awesome!")
      cy.get('[data-cy=publishComment]').click()

      cy.get('[data-cy=addComment]').type("Cypress is awesome!")
      cy.get('[data-cy=publishComment]').click()

      cy.get('[data-cy=hideComment]').should('contain', 'comments')
    })

    it('Delete>', () =>{
      cy.get('[data-cy=imgToClick]').click()
      cy.get('[data-cy=lightboxOpen]').scrollTo('bottom')
      cy.get('[data-cy=addComment]').type("Cypress is awesome!1")
      cy.get('[data-cy=publishComment]').click()

      cy.get('[data-cy=addComment]').type("Cypress is awesome!2")
      cy.get('[data-cy=publishComment]').click()

      cy.get('[data-cy=addComment]').type("Cypress is awesome!3")
      cy.get('[data-cy=publishComment]').click()

      cy.get('[data-cy=commentList]').find('div').contains('Cypress is awesome!2').parent().parent().find('[data-cy=deleteCommentButton]').click()
      cy.get('[data-cy=commentList]').find('div').contains('Cypress is awesome!2').should('not.exist', "Cypress is awesome!2")
    })

  })