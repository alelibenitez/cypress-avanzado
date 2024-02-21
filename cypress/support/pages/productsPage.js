export class ProductsPage {

    addProduct(){
        cy.get('[data-cy="add-product"]').click();
    }

    productName(name){
        cy.get('[data-cy="productName"]').type(name);
    }

    productPrice(price){
        cy.get('[data-cy="productPrice"]').type(price);  
    }

    productCard(card){
        cy.get('[data-cy="productCard"]').type(card);
    }

    productID(id){
        cy.get('[data-cy="productID"]').type(id);
    }
    createProduct(){
        cy.get('[data-cy="createProduct"]').click();   
    }

    searchSelectType(){
        cy.get('[data-cy="search-type"]').select('ID');  
    }

    searchProductId(id){
        cy.get('[data-cy="search-bar"]').type(id + '{enter}');
        
    }

    deleteProduct(id){
        cy.get(`[data-cy='delete-${id}']`).click();
        cy.get('#saveEdit').click();
    }

    createdProduct(name){
        cy.get('.chakra-text').should('include.text', name + ' '+ 'has been added');
        cy.get('#closeModal').click();    
    }

    deletedProduct(name){
        cy.get('.chakra-text').should('include.text', name + ' '+ 'has been deleted');
        cy.get('#closeModal').click();
    }
    
    noProduct(){
        cy.url().should('include', 'https://pushing-it.vercel.app/home/onlineshop');
    }
};



