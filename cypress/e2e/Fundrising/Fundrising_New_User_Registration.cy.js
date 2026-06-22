describe('Fundrising_New_User_Registration', () => {

Cypress.on('window:before:load',(win) => {
win.onbeforeload = null;
});

it('Fundrising_New_User_Registration', () =>{
cy.viewport(1920, 1080);

function generateRandomName(length = 8) {
let result = '';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const randomNumber = Math.floor(Math.random() * 100000);

const testData = {
firstname : generateRandomName(6),
lastname : generateRandomName(6),
username: `TestUser${randomNumber}`,
email: `user${randomNumber}@example.com`
};
cy.log('Generated Test Data:', JSON.stringify(testData));
cy.visit('https://dev.mylearningportal.org/')// Navigate to login page
cy.visit('https://dev.mylearningportal.org/register/')// Navigate to user regestration page
cy.get("[class='um-form-field valid ']").eq(0).type(testData.firstname)// Add first name
cy.get("[class='um-form-field valid ']").eq(1).type(testData.lastname)// Add last name
cy.get("[class='um-form-field valid ']").eq(2).type(testData.email)// Add email id
cy.get("[class='um-form-field valid ']").eq(3).type(testData.username)// Add username
cy.get("[id='user_password-5']").type("James@1234")// Add password
cy.get("[id='confirm_user_password-5']").type("James@1234")// Add confirm password
cy.get("[class='select2-selection__rendered']").eq(0).click()// Click on Primary program of interest dropdown button
cy.get('.select2-results__option').contains('Harmony Curriculum (Harmony SEL)').click();// Select Primary program of interest from dropdown
cy.get("[class='select2-selection__rendered']").eq(2).click()// Click on state dropdown button
cy.get('#state').select('Alabama', { force: true })// Select state from dropdown
cy.get("[class='um-form-field valid not-required ']").eq(1).type("416006")// Add postal code
Cypress.on('uncaught:exception', (err) => {
  // ignore specific, known benign error
  if (err && err.message && err.message.includes('addEventListener')) {
    return false; // prevents Cypress from failing the test
  }
  // allow other errors to fail
});

cy.get("[class='um-button']").click()// Click on "Submit" button
cy.get("[class='fundraisingSubmit']").click()// Click on fundrising option
cy.wait(5000)

cy.origin('https://stagingfundraising.edbrix.info/fundraising/user/auth',() => {
cy.wait(5000)

cy.get("[class='cbr updatevalue secondTabElement cbr-done']").eq(0).click({force: true})// Click on radio(Choose role name) button
cy.get("[id='professional_title']").type("Tester")// Add professional_title
cy.get("[class='select2-arrow']").eq(0).click()// Click on title dropdown button
cy.get("[class='select2-result-label']").eq(1).click()// Select title from dropdown
cy.get("[class='default-btn btn-success next-step nextbutton btn-next-wizard']").click()// Click on "Next" button
cy.get("[class='form-control secondTabElement']").eq(1).type("Michigan")// Add City
cy.get("[class='select2-arrow']").eq(2).click()// Click on "State" dropdown button
cy.get("[class='select2-result-label']").eq(1).click()// Select State from dropdown
cy.get("[class='select2-arrow']").eq(3).click()// Click on "Years of experiance" dropdown button
cy.get("[class='select2-result-label']").eq(1).click()// Select "Years of experiance" from dropdown
cy.get("[class='default-btn next-step btn-next-wizard']").click()// Click on Next button
cy.get("[class='cbr-replaced cbr-radio cbr-secondary']").eq(6).click({ force: true })// Select radio button
cy.get("[class='cbr-replaced cbr-radio cbr-secondary']").eq(7).click({ force: true })// Select radio button
cy.get("[id='ischecked']").click({ force: true });// Select privacy policy selection
cy.get("[id='isSubmitBtn']").click()// Click on get started
cy.contains('a','Webinars').click({force: true});// Click on "Webinars" module
cy.contains('a','Test sample webinar 001').click({force: true});// Click on Webinar
        });
    });
});
