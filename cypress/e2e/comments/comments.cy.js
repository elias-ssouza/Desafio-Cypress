describe('GET /comments', () => {
  it('should return all comments', () => {
    cy.request('https://jsonplaceholder.typicode.com/comments')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
      });
  });

  it('should return comments for post ID 1', () => {
    cy.request('https://jsonplaceholder.typicode.com/comments?postId=1')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
      });
  });

  it('should create a new comment', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/comments',
      body: {
        name: 'test',
        email: 'test@example.com',
        body: 'Nice post!',
        postId: 1
      }
    }).should((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('should delete a comment', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/comments/1'
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  })
});