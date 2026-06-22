describe ('Create_Module',() => {

Cypress.on('window:before:load',(win) => {
win.onbeforeload = null;    
});

it('Create_Module',() => {
cy.viewport(1920, 1080);
cy.fixture('Inspire_Test_Data').then(   (data) => {

cy.visit('https://dev.mylearningportal.org/')
cy.get("#username-6").type("jacob12")// add Username
cy.get('#user_password-6').type("Mangesh@123")// add Password
cy.get("[class='um-button']").click()// Click on "Sign In" button
cy.get("[class='harmonySubmit']").click()// Click on harmony option
// you probably did cy.visit('https://dev.mylearningportal.org/...')

cy.origin('https://stagingharmony.edbrix.info/harmony/dashboard', () => {
  // wait for header to render
  cy.get('#userNameLable').should('be.visible');

  // click the user menu (avatar/name/caret block)
  cy.get('#userNameLable')//
    .parent()       // div with "Jacob" + "Teacher"
    .parent()       // wrapper containing avatar + name + caret
    .click({ force: true });
cy.get("[id='view-ProfileNew-opn-btn']").click()//Click on profile option
cy.wait(10000)

const getIframeBody = (iframeSelector) => {// Switch to Profile ifrmae
  return cy
    .get(iframeSelector, { timeout: 15000 })   // get the iframe
    .its('0.contentDocument.body')             // get the body
    .should('not.be.empty')                    // ensure it's loaded
    .then(cy.wrap);                            // wrap for Cypress chaining
};

    // switch into iframe and interact
    getIframeBody('#profileIframe')
      .find('input#first_name')   // or use [placeholder="First Name"]
      .should('be.visible')
      .clear()
      .type('James');// Update first name

    getIframeBody('#profileIframe')
      .find('input#last_name')   // or use [placeholder="First Name"]
      .should('be.visible')
      .clear()
      .type('Bond');// Update last name  
      
    getIframeBody('#profileIframe')
      .find("[id='profileId']")   
      .should('be.visible')
      .click()// Click on "Next" button

      });
    });
  });
});


