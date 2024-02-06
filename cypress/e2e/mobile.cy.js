describe("Nav Menus", () => {
  context("iphone-xr resolution", () => {
    beforeEach(() => {
        cy.viewport("iphone-xr");
        cy.visit("http://localhost:8080");
    });

    it("shows hamburger menu icon", () => {
        cy.get("nav .navbar-toggler").should("be.visible");
    });

    it("expanded menu is hidden", () => {
        cy.get("nav .collapse").should("not.be.visible");
    });

    it("confirms hamburger menu is not visible", () => {
        cy.get("nav .collapse")
            .should("not.be.visible")
    });

    // not working, need to get dom for the button
    it("expands hamburger menu", () => {
        cy.get('[data-cy="navBarBtn"]')
            .click();

        cy.get("nav .collapse").should("be.visible");
    });

    // not working, need to get dom for the button
    it("navigates to bag tags", () => {
        cy.get('[data-cy="navBarBtn"]')
            .click();
        
        cy.get("a").contains("Memorabilia").click();
        cy.get("a").contains("Bag Tags").click();
        cy.url().should("include", "/memorabilia/bag_tags");
        cy.contains("h3", "Bag Tags");
    });

    it("opens bag tag #2 and confirms visibility", () => {
        cy.visit("http://localhost:8080/memorabilia/bag_tags/");
        cy.get("#1").click();
        cy.get("div.carousel-item.active")
            .should("be.visible");
    });

    it("confirms bag tag size", () => {
        cy.visit("http://localhost:8080/memorabilia/bag_tags/");
        cy.get("#1").click();
        cy.get("div.carousel-item.active img")        
            .invoke("width")
            .should('be.greaterThan', 400).and('be.lessThan',415);
    });

    it ("confirms file name", () => {
        cy.visit("http://localhost:8080/memorabilia/bag_tags/");
        cy.get("#1").click();
        cy.get("div.carousel-item.active img")        
            .should("have.attr", "src", "../../../images/bag_tag/acvtag.jpg");
    });
  });
});
