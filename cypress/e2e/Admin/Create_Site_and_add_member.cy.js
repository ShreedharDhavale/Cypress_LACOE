describe('Create_Site',() =>{

Cypress.on('window:before:load',(win) => {
win.onbeforeload = null;
});

it('Create_Site', () =>{
cy.viewport(1920, 1080);
cy.visit('https://stagingsso.edbrix.info/admin/login')// Navigate to admin login
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('inspdistrict is not defined')) {
    // returning false here prevents Cypress from failing the test
    return false
  }
  // let other errors fail
})
cy.get("[class='w-full admininputresp text-[#667085] text-[14px] xl:text-[0.833vw] font-normal py-[0.521vw] px-[0.729vw] border rounded-lg border-[#D0D5DD] max-h-[45px]']").eq(0).type("admin@gmail.com")// Add username
cy.get("[type='password']").type("12345678")// Add password
cy.get("[class='custmBtn red radius8 w-full text-center']").click()// Click on submit button
cy.get("[id='leftNavSites']").click()// Click on site bar
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('query function not defined for Select2 s2id_districtListInspire')) {
    // Ignore this specific Select2 error
    return false
  }
  // Let other errors fail
})
cy.visit('https://stagingsso.edbrix.info/site/create')// Navigate to "Create site" page
cy.get("[class='select2-arrow']").eq(0).click()// Click on district dropdown button
cy.get("[class='select2-result-label']").eq(3).click()// Select district from dropdown
cy.get("[class='select2-arrow']").eq(1).click()// Click on school dropdown button
cy.get("[class='select2-result-label']").click()// Select school from dropdown
/*const randomNumber = Math.floor(Math.random() * 100000);

const testData = {
sitename: `TestUser${randomNumber}`,
};
cy.log('Generated Test Data:', JSON.stringify(testData));
cy.get("[id='site_name']").clear();
cy.get("[id='site_name']").type(testData.sitename)*/
cy.get("[id='address_1']").type("Dallas")// Add address 1
cy.get("[id='address_2']").type("Michigan")// Add address 2
cy.get("[id='city']").type("Michigan City")// Add City
cy.get("[id='zip']").type("98123")// Add Zip
cy.get("[id='site_email']").type("newadmin@gmail.com")// Add email address
cy.get("[class='select2-arrow']").eq(3).click()// Click on state dropdown button
cy.get('#state_id')
  .select(['1'], { force: true }) // Select state from dropdown
cy.get("[id='phone_no']").type("9867889657")// Add phone_no
cy.get("[id='website_url']").type("https://stagingsso.edbrix.info/__/#/specs/runner?file=cypress/e2e/Admin/Create_Site.cy.js")// // Add URL
cy.get("[class='input-group-addon']").click()
cy.get("[data-handler='selectDay']").eq(28).click()
cy.get("[id='about_site']").type("No any")// Add about site
cy.get("[id='submit']").click()// Click on submit button
cy.get("[type='search']").type("1st Class Montessori School")// Search school in global search
cy.contains('a','0').click({force: true});// Click on module
cy.get("[id=addUserButton]").click()
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
FirstName:generateRandomName(6),
LastName :generateRandomName(6),
email: `user${randomNumber}@example.com`
};
cy.log('Generated Test Data:', JSON.stringify(testData));
cy.get("[name='firstname[]']").type(testData.FirstName)// Add first name for member
cy.get("[name='lastName[]']").type(testData.LastName)// Add last name for member
cy.get("[name='email[]']").type(testData.email)// // Add email id for member
cy.get("[type='submit']").click()// Click on "Invite" button
cy.get("[class='customBtnClass btn btn-secondary']").eq(1).click()// Click on "Join" button
cy.get("[data-bb-handler='confirm']").click()// Click on confirm on pop up
    });
});