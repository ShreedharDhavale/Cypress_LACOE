describe ('Business Hours', () => {
     it('Business Hours', () => {
     
     })
// Prevent Cypress from navigating away
 Cypress.on('window:before:load', (win) => {
win.onbeforeload = null;

})

 it('Business Hours', () => {
cy.viewport(1920, 1080);
cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/');

cy.get("#username").type("admin@gmail.com")// add Username
cy.get("[placeholder='Password']").type("123456")// add Password
    
cy.wait(5000)

cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
cy.wait(5000)
cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/admin/settings/manageHours/create')// Navigate to Create Business Hours page
cy.wait(2000)   
cy.get("[class='w-full p-inputtext p-component']").type("Test Business Hours")// Add Business Hours "Title"
cy.get("[class='w-full p-inputtextarea p-inputtext p-component']").type("Test Business Hours Depreciation")// Add Business Hours Depreciation
cy.get("[class='text-[#fff] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[14px] xl:px-[16px] 3xl:px-[0.833vw] py-[6px] xl:py-[8px] 3xl:py-[0.421vw] bg-[#3B59BA] border-[#3B59BA] border rounded-[6px] 3xl:rounded-[0.313vw] flex items-center 3xl:gap-[0.521vw] gap-2']").click()// Click on "Next" button
cy.wait(2000)
cy.get("[class='text-[14px] xl:text-[0.729vw] text-[#fff] bg-[#3D65C9]']").click()// Click on "Add Holidays" button
cy.wait(4000)
cy.get("[class='py-2 px-4 transition-colors bg-[#f2f6fc] text-gray-800  ']").click()// Click on "Exclusive Holidays" tab
cy.wait(2000)
cy.get("[class='w-full p-inputtext p-component']").type("Test holidays")// Add holidays "Title"
cy.wait(2000)
cy.get("[class='p-datepicker-trigger p-button p-component p-button-icon-only']").click()// Click on "Date picker"
cy.get("[data-pc-section='daylabel']").eq(31).click()// Select date
cy.get("[class='bg-[#3D65C9] rounded-md py-[10px] px-4 text-white text-[16px]']").eq(0).click()// Click on "Add" button 
cy.get("[class='bg-[#3D65C9] rounded-md py-[10px] px-4 text-white text-[16px]']").eq(1).click()// Click on "Add" button
cy.get("[class='text-[#fff] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[14px] xl:px-[16px] 3xl:px-[0.833vw] py-[6px] xl:py-[8px] 3xl:py-[0.421vw] bg-[#3B59BA] border-[#3B59BA] border rounded-[6px] 3xl:rounded-[0.313vw] flex items-center 3xl:gap-[0.521vw] gap-2']").click()// Click on "Next" button
cy.get("[class='text-[#fff] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[14px] xl:px-[16px] 3xl:px-[0.833vw] py-[6px] xl:py-[8px] 3xl:py-[0.421vw] bg-[#3B59BA] border-[#3B59BA] border rounded-[6px] 3xl:rounded-[0.313vw] flex items-center 3xl:gap-[0.521vw] gap-2']").click()// Click on "Next" button
cy.get("[class='p-checkbox-input']").eq(2).click()// Select "Applicable Groups" select box
cy.get("[class='text-[#fff] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[14px] xl:px-[16px] 3xl:px-[0.833vw] py-[6px] xl:py-[8px] 3xl:py-[0.421vw] bg-[#3B59BA] border-[#3B59BA] border rounded-[6px] 3xl:rounded-[0.313vw] flex items-center 3xl:gap-[0.521vw] gap-2 p-button p-component']").click()// Click on "Submit" button
   })
})
