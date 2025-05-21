describe('DELETE /posts/1', () => {
  it('should delete a post', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});