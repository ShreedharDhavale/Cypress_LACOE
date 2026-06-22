import BusinessHoursCommon from "../PageObjects/BusinessHoursCommon";

describe('DemoLoginTest', () =>{

   Cypress.on('windown:before:load', (win) =>{

    win.onbeforeload = null;
    })

    it('DemoLogin',() => {
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/");

    cy.viewport(1920, 1080);
    BusinessHoursCommon.UsernameFunction("admin@gmail.com");
    BusinessHoursCommon.PasswordFunction("123456");
    BusinessHoursCommon.LoginButtonFunction();
    })
})