describe('GET /users', () => {
  it('should return all users', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
      });
  });

  it('should return a user by ID', () => {
    cy.request('https://jsonplaceholder.typicode.com/users/1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });

  it('should return 404 for invalid user ID', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/users/9999',
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404);
    });
  });
});