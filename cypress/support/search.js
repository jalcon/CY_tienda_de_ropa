Cypress.Commands.add("search", (value) => {
    cy.fixture('index').then((index) =>{
        cy.get(index.searchBox).type(value);
        cy.get(index.searchButton).click();
    })
})