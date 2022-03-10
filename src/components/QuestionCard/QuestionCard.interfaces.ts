import { Question } from "interfaces"

export interface QuestionCardProps {
  isActive: boolean
  question: Question
  title: string
  total: number
}

export interface QuestionCardContainer {
  isActive: boolean
}
