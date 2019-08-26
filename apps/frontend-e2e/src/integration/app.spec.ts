context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })
  it('Validate title', () => {
    cy.title().should('include', 'Depayser')
  })
})
context('Actions', () => {
  it('Show select genders', () => { 
    cy.get('#btnGenders').should('be.visible').click()
    cy.get('#mat-option-1').should('be.visible').type("{esc}")
  })
})

context('Viewport', () => {
  it('set the viewport size and dimension', () => {
    cy.get('#navbar').should('be.visible')
    cy.viewport(320, 480)
    cy.get('#sidenav').should('not.be.visible')
    cy.get('#btnMenu').should('be.visible').click()
    cy.get('mat-nav-list').find('a').should('be.visible')
    cy.viewport(2999, 2999)
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.viewport('iphone-5')
    cy.wait(200)
    cy.viewport('iphone-4')
    cy.wait(200)
    cy.viewport('iphone-3')
    cy.wait(200)
    cy.viewport('ipad-2', 'portrait')
    cy.wait(200)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(200)
  })
})
