describe('Search elements', ()=>{

    beforeEach(() => {
        cy.visit('/');
    });

    it('Search for elements with multiple results', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain','dress');
        })
    });

    it('Search for elementos with no results', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('querty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    });

    it('search for elements with special code', () => {
        cy.readFile('cypress/support/text/search.txt').then((text)=>{
            cy.search(text);
        })
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })
})