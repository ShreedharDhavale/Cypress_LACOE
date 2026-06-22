class BusinessHoursCommon{

    LoginUsername = "#username";
    LoginPassword = "[placeholder='Password']";
    LoginButton = "[class='w-full text-white text-[16px] xl:text-[16px] 3xl:text-[0.885vw] font-medium flex justify-center bg-[#768fb5] py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]   cursor-pointer']";

    UsernameFunction(username1)
    {
      cy.get(this.LoginUsername).type(username1);
    }

    PasswordFunction(password1)
    {
      cy.get(this.LoginPassword).type(password1);
    }

    LoginButtonFunction()
    {
       cy.get(this.LoginButton).click();
    }
}

export default new BusinessHoursCommon();