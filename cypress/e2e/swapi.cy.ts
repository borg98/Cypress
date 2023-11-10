describe("swapi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should show characters", () => {
    cy.get("button#characterBtn").click();

    cy.get("section#resultSec").should("exist");
    cy.get("section#resultSec").should("have.length", 3);
  });

  it("should present characters", () => {
    cy.intercept("http swapi.dev/api/*", {
      name: "Luke",
      birth_year: "2020",
    });

    cy.get("button#characterBtn").click();
    cy.get("section#resultSec").should("have.length", 3);
    cy.get("section#resultSec > div > p#name").contains("Luke");
    cy.get("section#result > div > p#birthYear").contains("2020");
  });

  it("should present movies", () => {
    cy.intercept("http swapi.dev/api/*", {
      title: "A new hope",
      release_date: "2020-05-23",
    });

    cy.get("button#characterBtn").click();
    cy.get("section#resultSec").should("have.length", 3);
    cy.get("section#resultSec > div > p#title").contains("A new hope");
    cy.get("section#result > div > p#releaseDate").contains("2020-05-23");
  });

  it("should present starships", () => {
    cy.intercept("http swapi.dev/api/*", {
      name: "x-wing",
      crew: "202012",
    });

    cy.get("button#characterBtn").click();
    cy.get("section#resultSec").should("have.length", 3);
    cy.get("section#resultSec > div > p#starshipName").contains("x-wing");
    cy.get("section#result > div > p#crew").contains("202012");
  });
});
