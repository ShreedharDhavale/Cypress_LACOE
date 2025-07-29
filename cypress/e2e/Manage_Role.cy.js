describe('template spec', () => {
  it('Manage_role', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});
 
 
  it('Manage_role', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx
    cy.get("#username").type("admin@gmail.com")// add Username
    cy.get("[placeholder='Password']").type("123456")// add Password
    
    cy.wait(5000)
 
    cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
    cy.wait(5000)
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/settings/titles")

    cy.contains('button', 'Add New').click();
    cy.wait(2000)
    cy.get("[class='placeholder:text-[#828A91] placeholder:text-[13px] w-full h-10 p-inputtext p-component']").type("Dev")// Add title field
    cy.get("[class='p-inputtextarea p-inputtext p-component']").type("Test role")// Add description
    cy.get("[class='px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]  border-transparent bg-[#3B59BA] rounded-[7px] text-[#fff] cursor-pointer p-button p-component']").click()// Click on "Save" button
  })
})