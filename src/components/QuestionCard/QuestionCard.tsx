import { ArrowBack, ArrowForward } from "icons"
import { Button } from "components"

import * as I from "./QuestionCard.interfaces"
import * as S from "./QuestionCard.styles"

export const QuestionCard: React.FC<I.QuestionCardProps> = ({
  isActive,
  title,
}) => {
  return (
    <S.QuestionCardContainer isActive={isActive}>
      <S.QuestionCardHeader>
        <div>
          <ArrowBack />
          <h1>{title}</h1>
          <span />
        </div>
        <hr />
      </S.QuestionCardHeader>

      <S.QuestionCardBody>
        <h2>Question Sollicitudin Etiam Magna Sem</h2>
        <hr />
        <div>
          <Button buttonType="secondary" borderRadius="round" shouldCheck>
            Option 1
          </Button>
          <Button buttonType="secondary" borderRadius="round" shouldCheck>
            Option 2
          </Button>
        </div>
      </S.QuestionCardBody>

      <S.QuestionCardFooter>
        <Button icon={<ArrowForward />}>Next</Button>
      </S.QuestionCardFooter>
    </S.QuestionCardContainer>
  )
}
