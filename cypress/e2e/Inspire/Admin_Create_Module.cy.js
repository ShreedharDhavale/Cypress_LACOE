describe ('Create_Module',() => {

Cypress.on('window:before:load',(win) => {
win.onbeforeload = null;    
});

it('Create_Module',() => {
cy.viewport(1920, 1080);
cy.fixture('Inspire_Test_Data').then(   (data) => {

cy.visit('https://staginginspire.edbrix.info/login')
cy.get("#email").type("admin@staginginspire.com")// add Username
cy.get("[id='password']").type("123456")// add Password
cy.get("[id='submitlogin']").click()
cy.visit('https://staginginspire.edbrix.info/evalbrix/welcome')// Navigate to Inspire module  
cy.visit('https://staginginspire.edbrix.info/evalbrix/courses')// Navigate to modules module
cy.get("[class='course-list-border create-quick-course']").click()/// Click on "Create Module" module
cy.get("[name='title']").type("Test Module")// Add title
cy.get("[class='select2-choices']").eq(0).click()// Select topic
cy.get('#category_id')
  .select(['3'], { force: true })   // bypass the overlay
cy.get("[class='form-control']").eq(11).type("https://staginginspire.edbrix.info/evalbrix/courses/create")
cy.get("[name='intro_points[]']").type("1")// Add intro points
//cy.get("[class='input-group-addon']").eq(2).click()//Click on date ciker
cy.get("[id='approximate_time_to_complete']").type("120")// Add approximate time
cy.get("[id='description']").type("Test module description")// Add description
cy.get("[class='btn btn-success']").click()// Click on "Next"button
/*cy.get("[class='btn btn-success margin_right_ten']").click()// Click on "Import scorm package"
cy.wait(5000)
cy.get("[data-placement='top'] ").eq(0).click()// Click on "Upload" button
cy.get('input#file_name', { timeout: 10000 })
      .should('exist')               // it’s in the DOM
      .and('have.attr', 'accept', '.zip') // sanity check
      .selectFile('D:\\Cypress_LACOE\\cypress\\fixtures\\sample-1.zip', { force: true });
cy.get("[class='form-control']").eq(1).type("Test file upload")
cy.get('#submitButton').click()
cy.go('back');*/
cy.get("[class='btn btn-success']").eq(1).click()//Click on next button
cy.get("[name='supplement_video[]']").type("https://staginginspire.edbrix.info/evalbrix/course/149/supplement/video?")// Add supplement link
cy.get("[name='supplement_desciption[]']").type("Test supplement_desciption")// Add supplement desciption
cy.get("[class='btn btn-success']").eq(1).click()//Click on next button
cy.get("[class='btn btn-success']").eq(1).click()

    });
  })
})