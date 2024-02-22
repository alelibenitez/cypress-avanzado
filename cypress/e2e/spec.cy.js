/// <reference types="cypress" />

import { RegistroPage } from "../support/pages/registroPage";
import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";

describe('Desafío 1', () => {
   let datosFixture
   const registroPage = new RegistroPage();
   const loginPage = new LoginPage();
   const homePage = new HomePage();
   const productsPage = new ProductsPage();
   

   before(() => {
        cy.fixture('datos').then((data)=> {
            datosFixture = data
        })      
    })

    it("Desafío 1", () => {
        
        cy.visit('/');
        
        registroPage.iniciarSesion();
        loginPage.login();
        homePage.onlineShop();
        productsPage.addProduct();
        productsPage.productName(datosFixture.product.name);
        productsPage.productPrice(datosFixture.product.price);
        productsPage.productCard(datosFixture.product.card);
        productsPage.productID(datosFixture.product.id);
        productsPage.createProduct();
        productsPage.createdProduct(datosFixture.product.name);
        productsPage.searchSelectType();
        productsPage.searchProductId(datosFixture.product.id);
        productsPage.deleteProduct(datosFixture.product.id);
        productsPage.deletedProduct(datosFixture.product.name);
        productsPage.searchSelectType();
        productsPage.searchProductId(datosFixture.product.id);
        productsPage.noProduct(datosFixture.product.card, datosFixture.product.name, datosFixture.product.price);   
    });
       
});
