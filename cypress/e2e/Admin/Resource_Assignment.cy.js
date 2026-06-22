describe('Resource_Assignment', () => {
    Cypress.on('window:before:load', (win) =>{
    win.onbeforeload = null;
    });

it('Resource_Assignment', () =>{
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
cy.get("[id='leftNavSites']").click()// Click on site bar
cy.get("[class='onoffswitch2-label']").eq(1).click()// Click on "status" button
cy.contains('a','2').click({force: true});// Click on Members column link
//cy.get("[class='customBtnClass btn btn-secondary']").eq(1).click()// Click on "Join" button
//cy.get("[class='btn btn-success']").click()// Click on "Ok" on pop up
cy.get("[type='button']").eq(1).click()// Click on "Resources" button
cy.wait(4000)
cy.get("[type='checkbox']").eq(1).click()// Select user for assignment
cy.get("[class='select2-search-field']") // CLick on search box
  .type('Test User (testuser3@gmail.com){enter}');// Search user in search and select's it
cy.wait(5000)
cy.get("[id='assignButton']").click()// CLick on "Assign" button
cy.wait(2000)
cy.get("[type='button']").eq(1).click()// CLick on "Confirm" on pop up
    })
})