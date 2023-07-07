/// <reference types="cypress" />

import AlertPage from "../support/page-object/AlertPage";

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("http://testowanie-oprogramowania.pl/lekcje/alerty/")
        AlertPage.clickOnBtnAlert1();
        AlertPage.verifyAlertText("Przykładowa treść alertu");
        AlertPage.acceptAlert();
        // AlertPage.clickOnBtnAlert2();
        // AlertPage.verifyAlertConfirmText();
    

    })

})