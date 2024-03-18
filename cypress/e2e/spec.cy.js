
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
            cy.verificarEdicion('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-premium%2Fcarteras-mujer-tienda-creada-tecnologia-generative-ai_49285113.htm&psig=AOvVaw3gvFMABruKIzvcni2YgbDx&ust=1710513873835000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCnofH-84QDFQAAAAAdAAAAABAE', 'Carteras 2', 56677 );        
        });       
    });       
});


