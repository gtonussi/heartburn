import { ArrowBack, ArrowForward } from "icons"
import { Button } from "components"
import { useQuiz } from "hooks"

import * as I from "./OutcomeCard.interfaces"
import * as S from "./OutcomeCard.styles"

export const OutcomeCard: React.FC<I.OutcomeCardProps> = ({
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
    setBreadcrumbs(getNewBreadcrumb())

    setCurrentQuestion(breadcrumbs[breadcrumbs.length - 1].question)

    setResult("")

    setCurrentAnswer("")
  }

  return (
    <S.OutcomeCardContainer data-cy="outcome-card">
      <S.OutcomeCardHeader>
        <S.OutcomeCardTitle>
          <button type="button" onClick={handlePreviousButton}>
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
          <Button
            icon={<ArrowForward />}
            onClick={() => window.open("https://www.kry.se/", "_blank")}>
            Book a meeting
          </Button>
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
