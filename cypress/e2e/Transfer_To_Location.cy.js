describe('template spec', () => {
it('Transfer_To_Location', () => {

})    
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});

it('Transfer_To_Location', () => {

   cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/');
   cy.get("#username").type("admin@gmail.com")// add Username
   cy.get("[placeholder='Password']").type("123456")// add Password

   cy.wait(5000)
 
    cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
    cy.wait(5000)

     cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/transfer");// Navigate to transfer page
     cy.get("[class='p-multiselect-trigger']").eq(0).click()// Click on location/romm dropdown button
     cy.wait(2000)
     cy.get("[class='p-multiselect-checkbox']").eq(0).click()// Select location/romm from dropdown
     cy.get("[class='p-multiselect-trigger']").eq(1).click()// Click on Asset Category dropdown button
     cy.wait(2000)
     cy.get("[class='p-checkbox-input']").eq(0).click()// Select Asset Category from dropdown
     cy.get("[class='p-multiselect-trigger']").eq(2).click()// Click on Asset Group dropdown button
     cy.wait(2000)
     cy.get("[class='p-checkbox-input']").eq(0).click()// Select Asset Group from dropdown
     cy.get("[class='p-multiselect-trigger']").eq(3).click()// Click on Asset tag dropdown button
     cy.wait(2000)
     cy.get("[class='p-multiselect-checkbox']").eq(0).click()// Select Asset tag from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(2).click()// Click on Transfer to Location/Room dropdown button
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Transfer to Location/Room from dropdown
     cy.get("[class='border rounded-lg px-[16px] xl:px-[12px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw] text-[#fff]  text-[16px] xl:text-[13px] 3xl:text-[0.833vw] font-normal cursor-pointer bg-[#3D65C9]']").click()// Click on "Add to list" button
     cy.get("[class='border   rounded-lg px-[16px] xl:px-[12px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw] text-[#fff]  text-[16px] xl:text-[13px] 3xl:text-[0.833vw] font-normal cursor-pointer bg-[#3D65C9]']").click()// Click on "Submit" button
     cy.get("[class='bg-[#3D65C9] justify-center rounded-md py-2.5 px-4 text-white text-sm font-normal flex items-center gap-1.5']").click()// Select Check-In Location/Room from dropdown
    })
})