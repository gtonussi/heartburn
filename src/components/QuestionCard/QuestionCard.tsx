import { ArrowBack, ArrowForward } from "icons"
import { Button } from "components"
import { useQuiz } from "hooks"

import * as I from "./QuestionCard.interfaces"
import * as S from "./QuestionCard.styles"

export const QuestionCard: React.FC<I.QuestionCardProps> = ({
  isActive,
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
  } = useQuiz()

  const getNextQuestion = () => {
    // Function will check for the the number of 'nexts' and,
    // if there's only one, it will be returned.
    // Else, a loop will pull out the correct one based
    // on user's answer and return it.

    // First, returns empty if it is the last one.
    if (!question.next[0].next_question) return ""

    if (question.next.length === 1) return question.next[0].next_question

    let nextQuestion = ""

    question.next.forEach((n) => {
      if (n.answered === currentAnswer) {
        nextQuestion = n.next_question
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

  const handleNextButton = () => {
    // Adds the question to an array with all questions
    // so there is a register of user activity.
    setBreadcrumbs((prev) => [
      ...prev,
      {
        question: question.id,
        answer: currentAnswer,
      },
    ])

    // Changes the question to be presented to user,
    // based on the 'next' key.
    setCurrentQuestion(getNextQuestion())

    // Finally, sets the currentAnswer to none,
    // so it is ready for a new interaction.
    setCurrentAnswer("")
  }

  const handlePreviousButton = () => {
    // Updates the breadcrumbs to register user's activity.
    setBreadcrumbs(getNewBreadcrumb())

    // Updates the currentQuestion passing the last item
    // of breadcrumb, and present it to user.
    setCurrentQuestion(breadcrumbs[breadcrumbs.length - 1].question)

    // Finally, sets the currentAnswer to none,
    // so it is ready for a new interaction.
    setCurrentAnswer("")
  }

  return (
    <S.QuestionCardContainer isActive={isActive}>
      <S.QuestionCardHeader>
        <S.QuestionCardTitle>
          {/* Changing opacity instead of rendering only if true
          prevents the title from moving horizontally on second slide */}
          <button
            style={{
              opacity: `${breadcrumbs.length >= 1 ? 100 : 0}%`,
              pointerEvents: `${breadcrumbs.length >= 1 ? "auto" : "none"}`,
            }}
            type="button"
            onClick={handlePreviousButton}
            // eslint-disable-next-line prettier/prettier
          >
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
              isChecked={currentAnswer === answer.id}
              // eslint-disable-next-line prettier/prettier
            >
              {answer.label}
            </Button>
          ))}
        </div>
      </S.QuestionCardBody>

      <S.QuestionCardFooter>
        <Button
          disabled={currentAnswer.length === 0}
          icon={<ArrowForward />}
          onClick={handleNextButton}
          // eslint-disable-next-line prettier/prettier
        >
          Next
        </Button>
      </S.QuestionCardFooter>
    </S.QuestionCardContainer>
  )
}
