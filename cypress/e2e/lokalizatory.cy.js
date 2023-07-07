/// <reference types="cypress" />

describe("E2E - Lesson", () => {
    it("Lokalizatorach", () => {
        cy.visit("/")

        //Po znaczniku
        cy.get("a");

        //Identyfikator
        cy.get("#search_query_top")

        //Po klasie
        cy.get(".form-control")

        //Po atrybutach
        cy.get('[name="submit_search"]')
    })

    it.only("Lokalizatory część 2", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").eq(1)
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
    })
})