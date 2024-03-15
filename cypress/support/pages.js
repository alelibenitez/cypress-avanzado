Cypress.Commands.add('onLineShopLink', ()=>{
    cy.get('[data-cy="onlineshoplink"]').click();    
})

Cypress.Commands.add('searchProductId', (id)=>{
    cy.get('[data-cy="search-type"]').select('ID');
            cy.get('[data-cy="search-bar"]').type(id + '{enter}');
})

Cypress.Commands.add('verificarEdicion', ()=>{
    cy.get('img').should('have.attr', 'src').and('include', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-premium%2Fcarteras-mujer-tienda-creada-tecnologia-generative-ai_49285113.htm&psig=AOvVaw3gvFMABruKIzvcni2YgbDx&ust=1710513873835000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCnofH-84QDFQAAAAAdAAAAABAE');
    cy.get('[data-cy="name"]').should('have.text', 'Carteras 2');
    cy.get('[data-cy="price"]').should('have.text', '56677');
})