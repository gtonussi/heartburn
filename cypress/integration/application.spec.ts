/* eslint-disable jest/no-export */
/* eslint-disable jest/expect-expect */
import heartburn from "data/heartburn.json"

/// <reference types="cypress" />

describe("Appplication", () => {
  const { questions, outcomes } = heartburn

  const doButton1Next = () => {
    cy.get(
      "[data-cy='question-card'] > div:nth-child(2) button:first-child",
    ).click()
    cy.get("[data-cy='question-card'] > div:nth-child(3) button").click()
  }

  const doButton2Next = () => {
    cy.get(
      "[data-cy='question-card'] > div:nth-child(2) button:nth-child(2)",
    ).click()
    cy.get("[data-cy='question-card'] > div:nth-child(3) button").click()
  }

  it("should render the main component", () => {
    cy.visit("/")
    cy.get("[data-cy='main'").should("be.visible")
  })

  it("should start with the first question", () => {
    cy.get("[data-cy='card-wrapper']").children().should("have.length", 1)
    cy.get("[data-cy='question-card']").should("be.visible")
    cy.get("[data-cy='outcome-card']").should("not.exist")
    cy.get("[data-cy='question-card'] h2").should(
      "have.text",
      questions[0].question_text,
    )
  })

  it("should be able to go back and forth one question", () => {
    // Clicks on "Yes"
    cy.get(
      "[data-cy='question-card'] > div:nth-child(2) button:first-child",
    ).click()

    // Clicks on "Next" aiming Question 2
    cy.get("[data-cy='question-card'] > div:nth-child(3) button").click()

    // Checks if text is from Question 2
    cy.get("[data-cy='question-card'] h2").should(
      "have.text",
      questions[1].question_text,
    )

    // Clicks on Arrow Back
    cy.get("[data-cy='question-card'] > div:nth-child(1) button").click()

    // Checks if text is from Question 1
    cy.get("[data-cy='question-card'] h2").should(
      "have.text",
      questions[0].question_text,
    )
  })

  it("should present different outcomes at the end of questionnaire", () => {
    // Answers 9 questions to get minimum score
    doButton2Next()
    doButton1Next()
    doButton1Next()
    doButton1Next()
    doButton1Next()
    doButton1Next()
    doButton2Next()
    doButton2Next()
    doButton2Next()

    // Checks if first outcome is presented
    cy.get("[data-cy='question-card']").should("not.exist")
    cy.get("[data-cy='outcome-card']").should("be.visible")
    cy.get("[data-cy='outcome-card'] p").should("have.text", outcomes[0].text)

    // Goes back 2 questions to increase score and get second outcome
    cy.get("[data-cy='outcome-card'] > div:nth-child(1) button").click()
    cy.get("[data-cy='question-card'] > div:nth-child(1) button").click()
    doButton1Next()
    doButton1Next()

    // Checks if second outcome is presented
    cy.get("[data-cy='question-card']").should("not.exist")
    cy.get("[data-cy='outcome-card']").should("be.visible")
    cy.get("[data-cy='outcome-card'] p").should("have.text", outcomes[1].text)

    // Goes back 3 questions to increase score and get third outcome
    cy.get("[data-cy='outcome-card'] > div:nth-child(1) button").click()
    cy.get("[data-cy='question-card'] > div:nth-child(1) button").click()
    cy.get("[data-cy='question-card'] > div:nth-child(1) button").click()
    doButton1Next()
    doButton1Next()
    doButton1Next()

    // Checks if third outcome is presented
    cy.get("[data-cy='question-card']").should("not.exist")
    cy.get("[data-cy='outcome-card']").should("be.visible")
    cy.get("[data-cy='outcome-card'] p").should("have.text", outcomes[2].text)
  })

  it("should be able to restart at the end of questionnaire", () => {
    // Clicks on Restart button
    cy.get("[data-cy='outcome-card'] > div:nth-child(3) button").click()

    // Checks if Question card is back and on first question
    cy.get("[data-cy='outcome-card']").should("not.exist")
    cy.get("[data-cy='question-card']").should("be.visible")
    cy.get("[data-cy='question-card'] h2").should(
      "have.text",
      questions[0].question_text,
    )
  })
})

export {}
