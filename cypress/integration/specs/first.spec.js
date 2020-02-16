describe('Specs for First Page', function() {
	it('first spec', function() {
		cy.visit('http://localhost:8080/first.html')
		cy.get('h1.title').should('have.text', 'First Page');
	})
})