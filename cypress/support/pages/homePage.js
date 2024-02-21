export class HomePage {

    onlineShop(){
        cy.get('[data-cy="onlineshoplink"]').click();
    }
};