import { Outcome } from "interfaces/Outcome"
import { Question } from "interfaces/Question"

export interface Questionnaire {
  outcomes: Outcome[]
  questions: Question[]
}
