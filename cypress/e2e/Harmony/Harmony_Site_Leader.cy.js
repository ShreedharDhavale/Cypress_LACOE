describe('Harmony_Site_Leader', () => {

Cypress.on('window:before:load',(win) => {
win.onbeforeload = null;
});

it('Harmony_Site_Leader', () =>{
cy.viewport(1920, 1080);

cy.visit('https://stagingharmony.edbrix.info/harmony/teacher/auth/create')
cy.get("[type='submit']").click()
cy.get("[id='view-siteleader-opn-btn']").click()
cy.get("[class='form-control pb-[10px]']").type("James School")
cy.get("[type='button']").eq(3).click()
cy.get("[id='view-ProfileNew-opn-btn']").click()//Click on profile option
cy.contains('a','Logout').click({force: true});
    });

it('Reject_Site_Leader', () =>{
//cy.origin('https://stagingsso.edbrix.info/admin/login')
cy.visit('https://stagingsso.edbrix.info/admin/login')
cy.get("[class='w-full admininputresp text-[#667085] text-[14px] xl:text-[0.833vw] font-normal py-[0.521vw] px-[0.729vw] border rounded-lg border-[#D0D5DD] max-h-[45px]']").eq(0).type("admin@gmail.com")
cy.get("[type='password']").type("12345678")
cy.get("[class='custmBtn red radius8 w-full text-center']").click()
cy.get("[id='leftNavSiteLeader']").click()

   })
});
