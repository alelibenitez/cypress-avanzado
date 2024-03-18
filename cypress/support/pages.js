Cypress.Commands.add('onLineShopLink', ()=>{
    cy.get('[data-cy="onlineshoplink"]').click();    
})

Cypress.Commands.add('searchProductId', (id)=>{
    cy.get('[data-cy="search-type"]').select('ID');
            cy.get('[data-cy="search-bar"]').type(id + '{enter}');
})

Cypress.Commands.add('verificarEdicion', (img, name, price)=>{
    cy.get('img').should('have.attr', 'src').and('include', img);
    cy.get('[data-cy="name"]').should('have.text', name);
    cy.get('[data-cy="price"]').should('have.text', price);
})

