/* eslint-disable no-console */
import { useEffect } from "react"

import { CenterBox, OutcomeCard, QuestionCard } from "components"
import { Questionnaire, Question } from "interfaces"
import { useQuiz } from "hooks"

import heartburn from "data/heartburn.json"
import * as S from "./App.styles"

export const App = () => {
  const { questions, outcomes } = heartburn as Questionnaire

  const { currentQuestion, setCurrentQuestion, setFirstQuestion, result } =
    useQuiz()

  useEffect(() => {
    setCurrentQuestion(questions[0].id)
  }, [questions, setCurrentQuestion])

  useEffect(() => {
    setFirstQuestion(questions[0].id)
  }, [questions, setFirstQuestion])

  return (
    <main>
      <CenterBox>
        <S.QuestionCardWrapper>
          {questions.map((question: Question) => (
            <QuestionCard
              key={question.id}
              isActive={question.id === currentQuestion}
              question={question}
              title="Heartburn Checker"
              total={questions.length}
            />
          ))}
          {result.length > 0 &&
            outcomes
              .filter((o) => o.id === result)
              .map((outcome) => (
                <OutcomeCard
                  key={outcome.id}
                  isActive
                  outcome={outcome}
                  title="Heartburn Checker"
                />
              ))}
        </S.QuestionCardWrapper>
      </CenterBox>
    </main>
  )
}
