const { Section1 } = require("../objects/section-1");

describe("DOM: Tables", () => {
  /**
   * Example:
   * To access assertSampleApiResponse() from Section1, you can do: Section1.actions.assertSampleApiResponse();
   *
   * Test away!
   */
  it("Assert table is not visible", () => {
    cy.visit("http://localhost:8080/section-1")

    // Checking the property type if hidden which indicates table is not shown on the page
    cy.get("#alaya-table").should("be.hidden")
  });

  it("Assert table is visible", () => {
    cy.visit("http://localhost:8080/section-1")

    // Clicking the button
    cy.get("#table-toggle-button").trigger("click")

    // Checking if the table is visible
    cy.get("#alaya-table").should("be.visible")
  });

  it("Assert that the table is 5 columns wide", () => {
    cy.visit("http://localhost:8080/section-1")
    cy.get("#alaya-table > tbody > tr:eq(0) > th").should("have.length", 5)
  });

  it("Assert that the table is 10 rows long, excluding the first (header) row", () => {
    cy.visit("http://localhost:8080/section-1")
    cy.get("#alaya-table > tbody > tr")
      .not(".table-header")
      .should("have.length", 10)
  });

  it("Assert that at least 5 entries have the role user", () => {
    cy.visit("http://localhost:8080/section-1");
    // cy.get("#alaya-table").get("li:contains(14 May, 2018)").should("have.length", 3);
    cy.get("#alaya-table > tbody > tr:eq(0) > th")

  });
});



describe("DOM: Forms", () => {

  it("Assert that the form is not visible", () => {
    cy.visit("http://localhost:8080/section-1")

    // Checking the property type if hidden which indicates table is not shown on the page
    cy.get("#alaya-form").should("be.hidden")
  });

  it("After clicking the Show form button, assert that the form is visible", () => {
    cy.visit("http://localhost:8080/section-1")

    // Clicking the button
    cy.get("#form-toggle-button").trigger("click")

    // Checking if the table is visible
    cy.get("#alaya-form").should("be.visible")
  });


  it("After clicking the Show form button, assert that the form is visible", () => {
    cy.visit("http://localhost:8080/section-1")

    // Clicking the button
    cy.get("#form-toggle-button").trigger("click")

    // Checking if the table is visible
    cy.get("#alaya-form").should("be.visible")
  });

  it("Select Female from the select option, and assert that the value is female", () => {

    cy.visit("http://localhost:8080/section-1")
    cy.get("#form-toggle-button").trigger("click")

    cy.get('#alaya-form > #gender').select("female")
    cy.get('#gender').should('have.value', 'female')

  });


  it("Tick the Nurse checkbox and assert that the value nurse is true", () => {

    cy.visit("http://localhost:8080/section-1")
    cy.get("#form-toggle-button").trigger("click")
    cy.get('#nurse').check()

  });

  it("Click on the Submit button and assert that there is an alert window showing with the text Form submitted!", () => {

    cy.visit("http://localhost:8080/section-1")
    cy.get("#form-toggle-button").trigger("click")
    cy.get('button#submit').click()
    cy.on('window:alert',(txt)=>{
         expect(txt).to.contains('Form submitted!');
    })

  });



});
