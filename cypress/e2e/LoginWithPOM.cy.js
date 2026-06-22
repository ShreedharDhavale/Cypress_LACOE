import CommonElecments from "../PageObjects/CommonElecments";

describe('LoginWithPOM', () =>{

    Cypress.on('window:before:load', (win) =>{
    win.onbeforeload = null;
    })

it('LoginWithPOM', () =>{

cy.fixture('LACOE_Test_Data').then ((data) =>{


cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/");

CommonElecments.SetUserName("admin@gmail.com");
CommonElecments.SetPassword("123456");
CommonElecments.ClickOnSubmit();
    })
    });
});