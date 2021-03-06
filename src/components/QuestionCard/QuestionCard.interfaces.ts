import { Question } from "interfaces"

export interface QuestionCardProps {
  question: Question
  title: string
  total: number
}

export interface QuestionCardTitle {
  isFirst: boolean
}
