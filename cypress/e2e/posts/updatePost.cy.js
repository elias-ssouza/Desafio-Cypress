describe('PUT /posts/1', () => {
  it('should update an existing post', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1
      }
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'updated title');
    });
  });
});

describe('PATCH /posts/1', () => {
  it('should partially update a post', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        title: 'patched title'
      }
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'patched title');
    });
  });
});