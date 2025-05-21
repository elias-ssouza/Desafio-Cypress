describe('POST /posts', () => {
  it('should create a new post', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });

  it('should create post with missing field', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'title-only'
      }
    }).should((response) => {
      expect(response.status).to.eq(201);
    });
  });
});