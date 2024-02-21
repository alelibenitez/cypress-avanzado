export class LoginPage {

    login(){
        cy.get('[data-cy="user"]').type('pushingit');
        cy.get('[data-cy="pass"]').type('123456!');
        cy.get('[data-cy="submitForm"]').click();
    }
};