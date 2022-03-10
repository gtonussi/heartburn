import { Outcome } from "interfaces"

export interface OutcomeCardProps {
  isActive: boolean
  outcome: Outcome
  title: string
}

export interface OutcomeCardContainer {
  isActive: boolean
}
