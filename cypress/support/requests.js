Cypress.Commands.add('eliminarProducto', (id)=>{
    cy.request({
        method: "GET",
        url: `${Cypress.env().baseUrlAPI}/products?id=${id}`,
        headers:{
            Authorization: `Bearer ${Cypress.env().token}`
        }
    }).its('body.products.docs').each((product)=>{
        cy.request({
            method: "DELETE",
            url:`${Cypress.env().baseUrlAPI}/product/${product._id}`,
            headers:{
                Authorization: `Bearer ${Cypress.env().token}` 
            }
        });
    });    
})

Cypress.Commands.add('crearProducto', (body)=>{
    cy.request({
        method: "POST",
        url:`${Cypress.env().baseUrlAPI}/create-product`,
        body:body
    });
})

Cypress.Commands.add('editarProducto', (id)=>{
    cy.request({
        method: "GET",
        url: `${Cypress.env().baseUrlAPI}/products?id=${id}`,
        headers:{
            Authorization: `Bearer ${Cypress.env().token}`
        } 
    }).its('body.products.docs').each((product)=>{
        cy.request({
            method: "PUT",
            url:`${Cypress.env().baseUrlAPI}/product/${product._id}`,
            headers:{
                Authorization: `Bearer ${Cypress.env().token}`
            },
            body:{
                "name" : "Carteras 2",
                "price": 56677,
                "img" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-premium%2Fcarteras-mujer-tienda-creada-tecnologia-generative-ai_49285113.htm&psig=AOvVaw3gvFMABruKIzvcni2YgbDx&ust=1710513873835000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCnofH-84QDFQAAAAAdAAAAABAE"
            }
        });
})
})


