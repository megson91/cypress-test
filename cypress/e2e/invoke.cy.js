/// <reference types="cypress" />

describe("E2E - Metoda Invoke", () => {
    it("Invoke", () => {
        cy.visit("/")

        //Pobieranie wartości z danego elementu
        cy.get('[title="Contact us"]').invoke("text").then(tekst => {
            cy.log(tekst)
        })

        //Uzyskanie dostępu do wartości atrybutu
        cy.get('[title="Contact us"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })
        cy.get('[title="Contact us"]').invoke("attr", "title").then(tekst => {
            cy.log(tekst)
        })

        //Pobieranie wartości value
        cy.get("#search_query_top").type("Przykładowa wartość").invoke("prop", "value").then(wartosc => {
            cy.log(wartosc)
        })

    })

})