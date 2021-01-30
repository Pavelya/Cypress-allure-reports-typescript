describe('google search', () => {
    it('should work', () => {
        cy.visit('http://www.google.com');
        cy.clearCookies();
        cy.wait(1000);
    });
});
