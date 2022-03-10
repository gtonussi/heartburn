/* eslint-disable no-console */
import { useEffect } from "react"

import { CenterBox, QuestionCard } from "components"
import { Questionnaire, Question } from "interfaces"
import { useQuiz } from "hooks"

import heartburn from "data/heartburn.json"
import * as S from "./App.styles"

export const App = () => {
  const { questions } = heartburn as Questionnaire

  const { currentQuestion, setCurrentQuestion } = useQuiz()

  useEffect(() => {
    setCurrentQuestion(questions[0].id)
  }, [questions, setCurrentQuestion])

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
        </S.QuestionCardWrapper>
      </CenterBox>
    </main>
  )
}
