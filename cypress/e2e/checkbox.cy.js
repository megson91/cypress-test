/// <reference types="cypress" />

describe("E2E - Akcje kliknięcie checkbox", () => {
    it("Checkbox", () => {
        cy.visit("/index.php?id_category=3&controller=category")
        cy.get("#ul_layered_category_0").find("input").then(checkbox => {
            cy.log(checkbox).eq(0).check();
        cy.get("#layered_category_8").then(checkbox => {
            cy.log(checkbox).check({force: true}).invoke("prop", "checked").then(zaznaczony => {
                cy.log(zaznaczony)});
            })
        })

        cy.get("#ul_layered_id_attribute_group_1").find("input").check();

    })
})  