describe('My First Test', () => {
  it('Visits the login page', () => {
    cy.visit('/')
    cy.contains('Pharmacy Medicine Supply Management')
    cy.contains('We Supply Medicines with Love and Humanity')
    cy.get('a.first-link').click()
  })
})
describe('Second Test', () => {
  it('After the login page', () => {
    cy.visit('login')
    cy.url().should('include','login')
    cy.get('[name="username"]').type('Shanmukh')
    cy.get('[name="password"]').type('shanmukh@123')
    cy.get('button').click()
    
  })
})


describe('Fifth Test', () => {
  it('After the login page supply check', () => {
    cy.visit('login')
    cy.url().should('include','login')
    cy.get('[name="username"]').type('Shanmukh')
    cy.get('[name="password"]').type('shanmukh@123')
    cy.get('button').click()
    
  })
})
describe('Sixth Test', () => {
  it('Input  date page', () => {
    cy.url().should('include','schedule-supply')
    cy.get('[name="Supply"]').click()
    
  })
})

describe('Eight Test', () => {
  it('Login Page error', () => {
    cy.visit('login')
    cy.url().should('include','login')
    cy.get('[name="username"]').type('Shanmukh')
    cy.get('[name="password"]').type('shanmukh@12')
    cy.get('button').click()
    cy.contains("Invalid Username/Password!!!!")
    
    
  })
})
describe('Nine Test', () => {
  it(' un-authorized error', () => {
    cy.visit('schedule-supply')
    cy.url().should('include','un-authorized')
 })
})






