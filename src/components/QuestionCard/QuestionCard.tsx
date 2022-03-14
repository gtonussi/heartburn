/* eslint-disable no-plusplus */
import { ArrowBack, ArrowForward } from "icons"
import { Button } from "components"
import { useQuiz } from "hooks"

import * as I from "./QuestionCard.interfaces"
import * as S from "./QuestionCard.styles"

export const QuestionCard: React.FC<I.QuestionCardProps> = ({
  question,
  title,
  total,
}) => {
  const {
    currentAnswer,
    setCurrentAnswer,
    setCurrentQuestion,
    breadcrumbs,
    setBreadcrumbs,
    score,
    setResult,
  } = useQuiz()

  const getNextQuestion = () => {
    if (!question.next[0].next_question) return ""

    if (question.next.length === 1) return question.next[0].next_question

    let nextQuestion = ""

    question.next.forEach((n) => {
      if (n.answered === currentAnswer) {
        nextQuestion = n.next_question as string
      }
    })

    return nextQuestion
  }

  const getNewBreadcrumb = () => {
    const newBreadcrumbs = [...breadcrumbs]

    if (newBreadcrumbs.length > 0) {
      newBreadcrumbs.pop()
    }

    return newBreadcrumbs
  }

  const getAnswerScore = () => {
    let questionScore = 0

    question.answers.forEach((a) => {
      if (a.id === currentAnswer) {
        questionScore += a.score
      }
    })

    return questionScore
  }

  const handleNextButton = () => {
    setBreadcrumbs((prev) => [
      ...prev,
      {
        question: question.id,
        answer: currentAnswer,
        score: getAnswerScore(),
      },
    ])

    setCurrentQuestion(getNextQuestion())

    if (getNextQuestion() === "") {
      // Was the last question.
      question.next.some((q) => {
        if (q.max_score !== undefined && score <= q.max_score) {
          setResult(q.outcome as string)
          return true
        }

        if (q.max_score === undefined) {
          setResult(q.outcome as string)
          return true
        }

        return false
      })
    }

    setCurrentAnswer("")
  }

  const handlePreviousButton = () => {
    setBreadcrumbs(getNewBreadcrumb())

    setCurrentQuestion(breadcrumbs[breadcrumbs.length - 1].question)

    setCurrentAnswer("")
  }

  return (
    <S.QuestionCardContainer data-cy="question-card">
      <S.QuestionCardHeader>
        <S.QuestionCardTitle isFirst={!(breadcrumbs.length >= 1)}>
          <button type="button" onClick={handlePreviousButton}>
            <ArrowBack />
          </button>
          <h1>{title}</h1>
          <span />
        </S.QuestionCardTitle>

        <S.QuestionCardProgress>
          <hr />
          <hr style={{ width: `${total * breadcrumbs.length}%` }} />
        </S.QuestionCardProgress>
      </S.QuestionCardHeader>

      <S.QuestionCardBody>
        <h2>{question.question_text}</h2>
        <hr />

        <div>
          {question.answers.map((answer) => (
            <Button
              key={answer.id}
              buttonType="secondary"
              borderRadius="round"
              onClick={() => setCurrentAnswer(answer.id)}
              checked={currentAnswer === answer.id}>
              {answer.label}
            </Button>
          ))}
        </div>
      </S.QuestionCardBody>

      <S.QuestionCardFooter>
        <Button
          disabled={currentAnswer.length === 0}
          icon={<ArrowForward />}
          onClick={handleNextButton}>
          Next
        </Button>
      </S.QuestionCardFooter>
    </S.QuestionCardContainer>
  )
}
