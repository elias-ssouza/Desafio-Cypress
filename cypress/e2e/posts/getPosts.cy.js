describe('GET /posts', () => {
  it('should return all posts', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100);
      });
  });

  it('should return a single post by ID', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });

  it('should return 404 for non-existing post', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/posts/9999',
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404);
    });
  });
});