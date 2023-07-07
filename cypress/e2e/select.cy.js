/// <reference types="cypress" />

import selectPage from "../support/page-object/selectPage";

describe("E2E - Akcja wybrania opcji selekt", () => {
    it("Wybieranie opcji", () => {
        cy.visit("/index.php?id_category=3&controller=category")

        //Po nazwie
        cy.get("#selectProductSort").select("In stock");

        //Po value
        cy.get("#selectProductSort").select("price:asc");

        //Po indeksach
        cy.get("#selectProductSort").select(7);
        
    })
    
    it.only("Wybieranie wszystkich opcji", () => {
        cy.visit("/index.php?id_category=3&controller=category")
        selectPage.selectAllOption();

        // cy.get("#selectProductSort").then(select => {
        //     cy.wrap(select).find("option").each(opcja => {
        //         cy.wrap(select).select(opcja.text())
        //     })

        // })

    })
})
