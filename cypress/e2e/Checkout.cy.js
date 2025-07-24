describe('template spec', () => {
  it('Test Start', () => {
   
  })
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});
 
 
  it('Checkoutset add', () => {
 
    cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/'); // This will npx
    cy.get("#username").type("admin@gmail.com")// add Username
    cy.get("[placeholder='Password']").type("123456")// add Password
    
    cy.wait(5000)
 
    cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
    cy.wait(5000)
    cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/commoncheckout")

    cy.get("[class='p-multiselect-trigger']").eq(0).click()// Click on locstion dropdown button
    cy.get("[class='p-checkbox-input']").eq(0).click()// Select "Select all" select box
    cy.wait(2000)
    cy.get("[class='p-multiselect-trigger']").eq(1).click()// Click on Asset Category dropdown button
    cy.wait(2000)
    cy.get("[class='p-checkbox-input']").eq(0).click()// Select "Select all" select box
    cy.wait(5000)
    cy.get("[class='p-multiselect-trigger']").eq(2).click()//  Click on Asset Group dropdown button
    cy.get("[class='p-checkbox-input']").eq(0).click()//Select "Select all" select box
    cy.wait(2000)
    cy.get("[class='p-multiselect-trigger']").eq(3).click()//  Click on Asset Code dropdown button
    cy.wait(5000)
    cy.get("[class='p-multiselect-checkbox']").eq(0).click()//Select "First asset code" select box
    cy.wait(2000)
    cy.get("[class='p-dropdown-trigger']").eq(2).click()// Select user type dropdown button
    cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select user type
    cy.get("[class='p-dropdown-trigger']").eq(3).click()// Select user name dropdown button
    cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select user name
    cy.get("[class='border   rounded-lg px-[16px] xl:px-[12px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw] text-[#fff]  text-[16px] xl:text-[13px] 3xl:text-[0.833vw] font-normal cursor-pointer bg-[#3D65C9]']").eq(0).click()// Click on "Add to list" button
    cy.get("[class='border   rounded-lg px-[16px] xl:px-[12px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw] text-[#fff]  text-[16px] xl:text-[13px] 3xl:text-[0.833vw] font-normal cursor-pointer bg-[#3D65C9]']").eq(1).click()// Click on "Submit" button
    cy.get("[class='bg-[#3D65C9] justify-center rounded-md py-2.5 px-4 text-white text-sm font-normal flex items-center gap-1.5']").click()// Click on "Yes" on pop up
  })
})