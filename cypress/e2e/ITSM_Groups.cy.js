describe ('ITSM groups', () => {
     it('ITSM groups', () => {
     
     })
// Prevent Cypress from navigating away
 Cypress.on('window:before:load', (win) => {
win.onbeforeload = null;

})

 it('ITSM groups', () => {
cy.viewport(1920, 1080);
cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/');

cy.get("#username").type("admin@gmail.com")// add Username
cy.get("[placeholder='Password']").type("123456")// add Password
    
cy.wait(5000)

cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
cy.wait(5000)
cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/admin/settings/techniciangroups')// Navigate to ITSM groups page
cy.wait(2000)   
cy.get("[class='bg-[#3B59BA] rounded-md py-2.5 px-4 3xl:py-[0.521vw] 3xl:px-[0.833vw] border border-[#3B59BA] text-white text-sm font-normal leading-4 3xl:text-[0.833vw] 3xl:leading-[0.833vw] flex items-center gap-1.5 3xl:gap-[0.417vw]']").click()// Click on "Add New" button
cy.get("[class='placeholder:text-[#828A91] placeholder:text-[13px] w-full h-10 p-inputtext p-component']").type("Test ITSM group")// Add ITSM group name
cy.get("[class='p-dropdown-trigger']").eq(1).click()// Click on division dropdown button
cy.wait(2000)
cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select division from dropdown
cy.get("[class='p-dropdown-trigger']").eq(2).click()// Click on "Ticket Category" dropdown button
cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select "Ticket Category" from dropdown
cy.get("[class='p-multiselect-trigger']").eq(0).click()// Click on "Team lead" dropdown button
cy.get("[class='p-multiselect-checkbox']").eq(1).click()// Select "Team lead" from dropdown
cy.get("[class='p-inputtextarea p-inputtext p-component']").eq(0).type("Test ITSM groups")//Add description
cy.wait(5000)
cy.get("[class='px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] bg-[#3B59BA] rounded-[7px] text-[#fff] cursor-pointer p-button p-component']").click()// Click on "Add" button

   })
})
