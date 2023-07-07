/// <reference types="cypress" />

describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => {
        cy.visit("/")

        //Weryfikacja tekstu
        cy.get('a[title="Contact us"]').should("contain", "Contact us");
        cy.get('a[title="Contact us"]').then(zakladka => {
            expect(zakladka).to.contain("Contact us")
        })

        //Sprawdzenie czy nie zawiera tekstu
        cy.get('a[title="Contact us"]').should("not.contain", "Contact US");
        cy.get('a[title="Contact us"]').then(zakladka => {
            expect(zakladka).not.contain("Contact USA")
        })

        //Weryfikacja czy znacznik posiada klasę
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control") 
        })

        //Weryfikacja czy element jest widoczny
        cy.get("#search_query_top").should("be.visible");
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible
        })

        //Weryfikacja ilości pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length", 16)
        cy.get("ul.sf-menu").find("li").then(zakladki => {
            expect(zakladki).to.have.length(16)
        })

        //Weryfikacja wartość css danego elementu
        cy.get("#search_query_top").should("have.css", "height", "45px")
        cy.get("#search_query_top").then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.css("height", "45px")
        })
    })


})