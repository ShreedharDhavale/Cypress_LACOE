describe('Harmony_New_User_Registration', () => {

Cypress.on('window:before:load',(win) => {
win.onbeforeload = null;
});

it('Harmony_New_User_Registration', () =>{
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
/*document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#um-submit-btn');
  if (el) el.addEventListener('click', onSubmit);
});*/
Cypress.on('uncaught:exception', (err) => {
  // ignore specific, known benign error
  if (err && err.message && err.message.includes('addEventListener')) {
    return false; // prevents Cypress from failing the test
  }
  // allow other errors to fail
});

cy.get("[class='um-button']").click()// Click on "Submit" button
cy.get("[class='harmonySubmit']").click()// Click on harmony option
cy.origin('https://stagingharmony.edbrix.info/harmony/teacher/auth',() => {
cy.wait(5000)

cy.get("[class='btn btn-info margin_bottom_twenty']").click()// Click on continue on pop up
cy.get("[class='cbr-replaced cbr-radio cbr-secondary']").eq(0).click()// Click on radio(Choose role) button
cy.get("[class='default-btn btn-success next-step nextbutton btn-next-wizard']").click()// Click on "Next" button
cy.get("[class='form-control secondTabElement']").eq(0).type("Michigan")// Add City
cy.get("[class='select2-arrow']").eq(2).click()// Click on "Time zone" dropdown button
cy.get("[class='select2-result-label']").eq(2).click()// Select time zone
cy.get("[class='default-btn next-step btn-next-wizard']").click()// Click on Next button
cy.get("[type='checkbox']").eq(8).click({ force: true });// Select Grades
cy.get("[type='checkbox']").eq(21).click({ force: true });// Select privacy policy selection
cy.get("[class='default-btn button next-step disabled']").click()// Click on get started
// cy.contains('a','Unit 1 Being My Best Self').click({force: true});// Click on lession
cy.contains('a','Curriculum').click({force: true});// Click on "Curriculum" module
cy.contains('a','Grade 1').click({force: true});// Click on grade
cy.contains('a','Building Community').click({force: true});// Click on lession
          
        });
    });
});

