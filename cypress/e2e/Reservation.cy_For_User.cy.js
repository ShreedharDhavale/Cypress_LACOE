describe('template spec', () => {
it('Reservation_User', () => {

})    
// Prevent Cypress from navigating away
Cypress.on('window:before:load', (win) => {
  win.onbeforeunload = null;
});

it('Reservation_User', () => {
   cy.viewport(1920, 1080);
   cy.visit('https://uat-assetfusion360-lacoe.hexalytics.ai/');
   cy.get("#username").type("admin@gmail.com")// add Username
   cy.get("[placeholder='Password']").type("123456")// add Password

   cy.wait(5000)
 
    cy.get("[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']").click() //Click on login button
    cy.wait(5000)

     cy.visit("https://uat-assetfusion360-lacoe.hexalytics.ai/admin/reserve/create");// Navigate to check-in page
     cy.get("[class='bg-[#3B59BA] rounded-md py-[13px] px-4 3xl:py-[0.677vw] 3xl:px-[0.833vw] text-white text-sm font-normal leading-4 3xl:text-[0.833vw] 3xl:leading-[0.833vw] flex items-center gap-1.5 3xl:gap-[0.417vw]']").click()// Click on "Add Asset" button
     cy.wait(2000)
     cy.get("[class='p-dropdown-trigger']").eq(6).click()// Click on Location/Room dropdown button
     cy.wait(2000)
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Location/Room from dropdown
     cy.get("[class='p-dropdown-trigger']").eq(7).click()// Click on Asset Category dropdown button
     cy.wait(2000)
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Asset Category from dropdown
     cy.wait(5000)
     cy.get("[class='p-dropdown-trigger']").eq(8).click()//Click on Asset Group dropdown button
     cy.wait(5000)
     cy.get("[class='p-dropdown-item-label']").eq(0).click()// Select Asset Group from dropdown
     cy.wait(5000)
     cy.contains('button', 'Apply').click();// Click on "Apply" button
     cy.get("[class='p-checkbox-input']").eq(3).click()// Select select box for Asset reservation 
     cy.get("[class='loco-plus']").eq(1).click()// Click on "Add to list" button
     cy.wait(5000)
     cy.get("[class='bg-[#3D65C9]  rounded-md py-[8px] xl:py-[8px] 3xl:py-[0.521vw] px-4 xl:px-[14px] 3xl:px-[0.833vw] border border-[#3B59BA] text-white text-[14px] xl:text-[15px] 3xl:text-[0.833vw] font-normal ']").click()// Click on "Submit" button
     cy.wait(2000)
     cy.get("[class='p-datepicker-trigger p-button p-component p-button-icon-only']").eq(0).click()// Click on "Reserve From" date picker
     cy.wait(2000)
     cy.get("[data-pc-section='nextbutton']").click()
     cy.get("[data-pc-section='day']").eq(5).click();// Select date for "Reserve From"
     cy.wait(2000)
     cy.get("[class='p-datepicker-trigger p-button p-component p-button-icon-only']").eq(1).click()// Click on "Reserve Till" date picker
     cy.wait(2000)
     cy.get("[data-pc-section='day']").eq(7).click();// Select date for "Reserve Till"
     cy.wait(2000)
     cy.get("[class='text-[#fff] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-normal px-[14px] xl:px-[16px] 3xl:px-[0.833vw] py-[6px] xl:py-[8px] 3xl:py-[0.421vw] bg-[#3B59BA] border-[#3B59BA] border rounded-[6px] 3xl:rounded-[0.313vw] flex items-center 3xl:gap-[0.521vw] gap-2 p-button p-component']").click()// Click on "Reserve" button
     cy.get("[title='Edit']").eq(0).click();// Ckick on edit button
    })
})