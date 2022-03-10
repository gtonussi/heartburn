import { ArrowBack, ArrowForward } from "icons"
import { Button } from "components"
import { useQuiz } from "hooks"

import * as I from "./OutcomeCard.interfaces"
import * as S from "./OutcomeCard.styles"

export const OutcomeCard: React.FC<I.OutcomeCardProps> = ({
  isActive,
  outcome,
  title,
}) => {
  const {
    setCurrentAnswer,
    setCurrentQuestion,
    breadcrumbs,
    setBreadcrumbs,
    setInitialValues,
    setResult,
  } = useQuiz()

  const getNewBreadcrumb = () => {
    const newBreadcrumbs = [...breadcrumbs]

    if (newBreadcrumbs.length > 0) {
      newBreadcrumbs.pop()
    }

    return newBreadcrumbs
  }

  const handlePreviousButton = () => {
    // Updates the breadcrumbs to register user's activity.
    setBreadcrumbs(getNewBreadcrumb())

    // Updates the currentQuestion passing the last item
    // of breadcrumb, and present it to user.
    setCurrentQuestion(breadcrumbs[breadcrumbs.length - 1].question)

    // Erases the result
    setResult("")

    // Finally, sets the currentAnswer to none,
    // so it is ready for a new interaction.
    setCurrentAnswer("")
  }

  return (
    <S.OutcomeCardContainer isActive={isActive}>
      <S.OutcomeCardHeader>
        <S.OutcomeCardTitle>
          <button
            type="button"
            onClick={handlePreviousButton}
            // eslint-disable-next-line prettier/prettier
          >
            <ArrowBack />
          </button>
          <h1>{title}</h1>
          <span />
        </S.OutcomeCardTitle>

        <S.OutcomeCardProgress>
          <hr />
          <hr />
        </S.OutcomeCardProgress>
      </S.OutcomeCardHeader>

      <S.OutcomeCardBody>
        <h2>Thank you for answering the questions!</h2>
        <hr />
        <p>{outcome.text}</p>
        {outcome.show_booking_button && (
          <Button icon={<ArrowForward />}>Book a meeting</Button>
        )}
      </S.OutcomeCardBody>

      <S.OutcomeCardFooter>
        <button type="button" onClick={setInitialValues}>
          Back to the start screen
        </button>
      </S.OutcomeCardFooter>
    </S.OutcomeCardContainer>
  )
}
