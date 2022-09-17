describe('My First Test', () => {
  it('Visits the login page', () => {
    cy.visit('/')
    cy.contains('Pharmacy Medicine Supply Management')
    cy.contains('We Supply Medicines with Love and Humanity')
    cy.get('a.first-link').click()
    cy.visit('login')
    cy.url().should('include','login')
    
  
  })
})
