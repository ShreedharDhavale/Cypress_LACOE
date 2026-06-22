describe('Move_Site', () => {
    Cypress.on('window:before:load',(win) =>{
    win.onbeforeload = null;    
    });

it('Move_Site', () =>{
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
cy.wait(5000)
cy.get("[type='password']").type("12345678")// Add password
cy.get("[class='custmBtn red radius8 w-full text-center']").click()// Click on submit button
cy.get("[id='leftNavSites']").click()// Click on site bar
cy.get("[class='onoffswitch2-label']").eq(0).click()// Click on "status" button 
cy.get("[class='delete delete-testimonial']").eq(0).click()// Click on "Delete" button
cy.get("[class='select2-arrow']").click()// Click on site dropdown button
cy.get("[class='select2-result-label']").eq(1).click()// Select site from site dropdown
cy.get("[data-bb-handler='confirm']").click()// Click on "Confirm" button
    });
});