describe('Create_System_User', () => {
     
Cypress.on('window:before:load', (win) => {
win.onbeforeload = null;
    });

it('Create_System_User', () =>{
cy.viewport(1920, 1080);
cy.visit('https://stagingsso.edbrix.info/admin/login')
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
cy.get("[class='top_ten']").click()
cy.get("[id='leftNavSystemUsers']").eq(0).click()
cy.get("[class='btn btn-secondary pull-right']").click()
cy.get("[class='select2-arrow']").eq(0).click()
cy.get('#title_id').select('6',{force : true})
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
username: generateRandomName(6),
email: `user${randomNumber}@example.com`
};
cy.log('Generated Test Data:', JSON.stringify(testData));
cy.get("[name='firstname']").type(testData.firstname)
cy.get("[name='lastname']").type(testData.lastname)
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("toLowerCase")) {
    // returning false here prevents Cypress from failing the test
    return false;
  }
});
cy.get("[id='email']").type(testData.email)
cy.get("[class='select2-arrow']").eq(1).click()
cy.get("[class='select2-result-label']").eq(2).click()
cy.get("[class='select2-arrow']").eq(2).click()
cy.get("[class='select2-result-label']").eq(1).click()
cy.get("[id='mobile_number']").type("7383898104")
cy.get("[id='userName']").type(testData.username)
cy.get("[id='submit']").click()
    });
});