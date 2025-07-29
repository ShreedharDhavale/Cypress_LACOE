describe('template spec', () => {
it('Check_in', () => {

})    
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});

it('check_in', () => {
   cy.viewport(1920, 1080);
   cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/');
   cy.get("#username").type("admin@gmail.com")// add Username
   cy.get("[placeholder='Password']").type("123456")// add Password

   cy.wait(5000)
 
    cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
    cy.wait(5000)

     cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/commoncheckin");// Navigate to check-in page
     cy.get("[class='p-dropdown-trigger']").eq(2).click()// Click on location dropdown button
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select location from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(3).click()// Click on User Type dropdown button
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select User Type from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(4).click()// Click on User name dropdown button
     cy.get("[class='p-dropdown-item-label']").eq(2).click()// Select User name from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(5).click()// Click on Asset tag dropdown button
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Asset tag from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(7).click()// Click on Asset condition - Current dropdown button
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Asset condition from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(8).click()// Click on Check-in action dropdown button
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Check-in action from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(9).click()// Click on Check-In Location/Room button
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Check-In Location/Room from dropdown
     cy.get("[class='w-full placeholder:text-[#2C363F] p-inputtextarea p-inputtext p-component']").type("Check-in test")// Add notes
     cy.wait(5000)
     cy.get("[class='border   rounded-lg px-[16px] xl:px-[12px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw] text-[#fff]  text-[16px] xl:text-[13px] 3xl:text-[0.833vw] font-normal bg-[#3D65C9]']").eq(0).click() //Click on "Add to list" button
     cy.get("[class='border   rounded-lg px-[16px] xl:px-[12px] 3xl:px-[0.833vw] py-[10px] xl:py-[6px] 3xl:py-[0.521vw] text-[#fff]  text-[16px] xl:text-[13px] 3xl:text-[0.833vw] font-normal bg-[#3D65C9]']").eq(1).click() //Click on "Submit" button
     cy.get("[class='bg-[#3D65C9] justify-center rounded-md py-2.5 px-4 text-white text-sm font-normal flex items-center gap-1.5']").click()//Click on "Yes" button on popup
    })
})