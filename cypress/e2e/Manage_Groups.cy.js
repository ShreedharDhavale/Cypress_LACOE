describe ('Manage groups', () => {
     it('Manage groups', () => {
     
     })
// Prevent Cypress from navigating away
 Cypress.on('window:before:load', (win) => {
win.onbeforeload = null;

})

 it('Manage groups', () => {
cy.viewport(1920, 1080);
cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/');

cy.get("#username").type("admin@gmail.com")// add Username
cy.get("[placeholder='Password']").type("123456")// add Password
    
cy.wait(5000)

cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
cy.wait(5000)
cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/admin/settings/groups')// Navigate to manage group page
cy.wait(2000)   
cy.get("[class='bg-[#3B59BA] rounded-md py-2.5 px-4 3xl:py-[0.521vw] 3xl:px-[0.833vw] border border-[#3B59BA] text-white text-sm font-normal leading-4 3xl:text-[0.833vw] 3xl:leading-[0.833vw] flex items-center gap-1.5 3xl:gap-[0.417vw]']").click()// Click on "Add New" button
cy.get("[class='placeholder:text-[#041c4f] text-[#000] placeholder:text-[13px] w-full h-10 p-inputtext p-component']").type("Test group")// Add group name
cy.get("[class='p-inputtextarea p-inputtext p-component']").type("Test new group")// Add description
cy.wait(2000)
cy.get("[class='px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] border-transparent bg-[#3B59BA] rounded-[7px] text-[#fff] cursor-pointer p-button p-component']").click()// Click on "Add" button
//cy.get("[class='p-inputtextarea p-inputtext p-component']").eq(1).click()// Select all site access
cy.get("[class='flex items-center gap-[8px] xl:gap-[0.417vw] border border-[#3B59BA] bg-[#3B59BA] rounded-[6px] 3xl:rounded-[0.313vw] py-[10px] 3xl:py-[0.521vw] px-[13px] 3xl:px-[0.625vw] leading-none text-[14px] xl:text-[12px] 3xl:text-[0.729vw] text-white']").click()// Click on "Save" button
cy.get("[class='disable_tabs_bottomline px-[16px] xl:px-[10px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] cursor-pointer text-[12px]']").eq(0).click()// Click on asset access tab
cy.get("[class='flex items-center gap-[8px] xl:gap-[0.417vw] border border-[#3B59BA] bg-[#3B59BA] rounded-[6px] 3xl:rounded-[0.313vw] py-[10px] 3xl:py-[0.521vw] px-[13px] 3xl:px-[0.625vw] leading-none text-[14px] xl:text-[12px] 3xl:text-[0.729vw] text-white']").click()// Click on "Save" button
cy.get("[class='disable_tabs_bottomline px-[16px] xl:px-[10px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw] cursor-pointer text-[12px]']").eq(1).click()// Click on asset 360 access tab
cy.wait(5000)
cy.get("[class='p-checkbox-input']").eq(0).click()// Click on select all permission
cy.get("[class='text-[#27313B] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[14px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[10px]  3xl:py-[0.421vw]  border border-[#BECDE3] rounded-[6px] 3xl:rounded-[0.313vw] 3xl:gap-[0.521vw]']").click()

   })
})
