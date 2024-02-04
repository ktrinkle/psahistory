describe("Page - Homepage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080");
    });

    it("has the correct headline", () => {
        cy.contains("h1", "The PSA History Page");
    });

    it("has the memorabilia link", () => {
        cy.contains("nav", "Memorabilia");
    });

    it("has the oldtimer link", () => {
        cy.contains("nav", "Oldtimers");
    });

    it("has the history link", () => {
        cy.contains("nav", "History");
    });

    it("has the home link", () => {
        cy.contains("nav", "Home");
    });

    it("navigates to /oldtimer", () => {
        cy.get("a").contains("Oldtimers").click();
        cy.get("a").contains("Oldtimers Home").click();
        cy.url().should("include", "/oldtimer");
        cy.contains("h3", "PSA Party");
    });
});