class CommonElecments{
   txtUsername = "#username";
   txtPassword = "[placeholder='Password']";
   txtSubmit = "[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']"
   BusinessHourTitle = "[class='w-full p-inputtext p-component']";
   BusinessHourDes = "[class='w-full p-inputtextarea p-inputtext p-component']";
   ClickOnAddHolidays = "[class='text-[14px] xl:text-[0.729vw] text-[#fff] bg-[#3D65C9]']";
   ClickOnExecutiveHolidays = "[class='py-2 px-4 transition-colors bg-[#f2f6fc] text-gray-800  ']";
   AddHolidaysTitle = "[class='w-full p-inputtext p-component']";
   ClickOnDatePicker = "[class='p-datepicker-trigger p-button p-component p-button-icon-only']";

   SetUserName(username)
   {
      cy.get(this.txtUsername).type(username);// add Username
   }

   SetPassword(password)
   {
      cy.get(this.txtPassword).type(password);// add Password
   }

   ClickOnSubmit()
   {
      cy.get(this.txtSubmit).click() //Click on login button
   }

   BusinessHourTitle(BusinessHourTitle1)
   {
      cy.get(this.BusinessHourTitle).type(userdata.BusinessHoursTitle)
   }
   
   BusinessHourDes(BusinessHourDes1)
   {
      cy.get(this.BusinessHourDes).type(BusinessHourDes1)
   }

   ClickOnAddHolidays()
   {
      cy.get(this.ClickOnAddHolidays).click();
   }

   ClickOnExecutiveHolidays()
   {
      cy.get(this.ClickOnExecutiveHolidays).click()
   }

   AddHolidaysTitle()
   {
      cy.get().type(userdata.Holidays_Title)// Add holidays "Title"
   }

   ClickOnDatePicker()
   {
      cy.get(this.ClickOnDatePicker).click()
   }

}
export default new CommonElecments();