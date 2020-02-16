describe('this spec is created to check retryability of should callback', function() {
	it('loads 3 elements', function() {
		cy.visit('http://localhost:8080/index.html')
		cy.get('#app div').should('have.length', 3)
	})

	it.only('loads 3 elements', () => {
		cy.visit('http://localhost:8080/index.html')
		cy.get('#app div')
			.should(($div) => {
				debugger;
				console.log($div);
				expect($div.eq(0)).to.contain('first child')
				expect($div.eq(1)).to.contain('second child')
				expect($div.eq(2)).to.contain('third child')
				return $div
			})
			.invoke('text')
			.should('equal', 'third child')
	})
})