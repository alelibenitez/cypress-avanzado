
/// <reference types="cypress" />

describe('Desafío 2', () => {
  
   before(() => {
    cy.login(Cypress.env().user, Cypress.env().password)
    })

    it("Buscar un producto, si existe eliminarlo para luego crearlo y si no existe crearlo", () => {
        cy.fixture('datos').then((data)=> {
            cy.eliminarProducto(data.product.id);
            cy.crearProducto(data.product);
            cy.editarProducto(data.product.id);
            cy.visit('');
            cy.onLineShopLink();
            cy.searchProductId(data.product.id);
            cy.verificarEdicion();        
        });       
    });       
});


