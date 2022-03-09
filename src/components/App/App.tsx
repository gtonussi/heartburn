/* eslint-disable no-console */
import { useState, useEffect } from "react"

import { CenterBox, QuestionCard } from "components"
import { FormData, Question } from "interfaces"

import heartburn from "data/heartburn.json"

import * as S from "./App.styles"

export const App = () => {
  const { questions } = heartburn as FormData

  const [currentQuestion] = useState(questions[0].id)

  useEffect(() => {
    console.log(heartburn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            />
          ))}
        </S.QuestionCardWrapper>
      </CenterBox>
    </main>
  )
}
