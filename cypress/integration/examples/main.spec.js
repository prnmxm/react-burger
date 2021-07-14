const dnd = (type, index) => {
    cy.get(`[data-test="product"][data-type=${type}]`).eq(index).trigger('dragstart');
    cy.get('[data-test="selected-items"]').trigger('drop');
};
describe('service is available', function() {
    it('should be available on localhost:3000', function() {
      cy.visit('http://localhost:3000');
    });
    it('product bun dran&drop', function() {
        dnd('bun', 0);
        cy.get('[data-test="selected-items"]').find('[data-type="bun"]').should('have.length', 2)
    });
    it('product main dran&drop', function() {
        dnd('main', 3);
        cy.get('[data-test="selected-items"]').find('[data-type="main"]').should('have.length', 1)
        dnd('main', 0);
        cy.get('[data-test="selected-items"]').find('[data-type="main"]').should('have.length', 2)
    });
}); 