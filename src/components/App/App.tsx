/* eslint-disable no-console */
import { useLayoutEffect } from "react"

import { CenterBox, OutcomeCard, QuestionCard } from "components"
import { Questionnaire, Question } from "interfaces"
import { useQuiz } from "hooks"

import heartburn from "data/heartburn.json"
import * as S from "./App.styles"

export const App = () => {
  const { questions, outcomes } = heartburn as Questionnaire

  const { currentQuestion, setCurrentQuestion, setFirstQuestion, result } =
    useQuiz()

  useLayoutEffect(() => {
    setCurrentQuestion(questions[0].id)
    setFirstQuestion(questions[0].id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderQuestions =
    result.length === 0 &&
    questions
      .filter((q) => q.id === currentQuestion)
      .map((question: Question) => (
        <QuestionCard
          key={question.id}
          question={question}
          title="Heartburn Checker"
          total={questions.length}
        />
      ))

  const renderOutcome =
    result.length > 0 &&
    outcomes
      .filter((o) => o.id === result)
      .map((outcome) => (
        <OutcomeCard
          key={outcome.id}
          outcome={outcome}
          title="Heartburn Checker"
        />
      ))

  return (
    <main data-cy="main">
      <CenterBox>
        <S.CardWrapper data-cy="card-wrapper">
          {renderQuestions}
          {renderOutcome}
        </S.CardWrapper>
      </CenterBox>
    </main>
  )
}
