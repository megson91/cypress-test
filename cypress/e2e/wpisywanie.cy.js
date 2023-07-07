/// <reference types="cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartości w pole", () => {
        cy.visit("/")
        cy.searchPhrase("Nowy tekst{backspace}", 1200);
    //    cy.get("#search_query_top").type("Przykładowy produkt{backspace}",  {delay: 500})
    })
    // it("Czyszczenie wartości z pola input", () => {
    //     cy.get("#search_query_top").clear();
        cy.deletePhrase(clear, 1200);

    })

// })