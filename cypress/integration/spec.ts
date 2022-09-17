describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Pharmacy Medicine Supply Management')
    cy.contains('We Supply Medicines with Love and Humanity')
  })
})
