/// <reference types="cypress" />

describe("E2E - Testy API", () => {
    it("Weryfikacja tagów API", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.log(res)
        })

    })

})