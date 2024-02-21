export class RegistroPage {

    iniciarSesion(){
        cy.get('[data-cy="registertoggle"]').dblclick();
    }    
};