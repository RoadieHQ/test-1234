describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to testing-1234').click();
  })
})
