describe ('Create_Module',() => {

Cypress.on('window:before:load',(win) => {
win.onbeforeload = null;    
});

it('Create_Module',() => {
cy.viewport(1920, 1080);
cy.fixture('Inspire_Test_Data').then(   (data) => {

cy.visit('https://dev.mylearningportal.org/')// Navigate to user portal
cy.get("#username-6").type("jacob12")// add Username
cy.get('#user_password-6').type("Mangesh@123")// add Password
cy.get("[class='um-button']").click()// Click on "Sign In" button
cy.get("[class='inspireSubmit']").click()// Click on inspire option

cy.origin('https://stagingcampus.edbrix.info/evalbrix/inspire/dashboard', () => {
  // wait for header to render
  cy.get("[id='closeFeedbackModal']").eq(2).click()// Click on "Close" button of pop up
  cy.get("[id='userNameLable']").should('be.visible');// Click on username button for open profile

  // click the user menu (avatar/name/caret block)
  cy.get("[id='userNameLable']")//
    .parent()       // div with "Jacob" + "Teacher"
    .parent()       // wrapper containing avatar + name + caret
    .click({ force: true });
cy.get("[id='profileButton']").click()//Click on profile option
cy.wait(20000)

      });
    });
  });
});