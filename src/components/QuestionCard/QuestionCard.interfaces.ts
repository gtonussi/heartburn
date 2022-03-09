import { Question } from "interfaces"

export interface QuestionCardProps {
  title: string
  question: Question
  isActive: boolean
}

export interface QuestionCardContainer {
  isActive: boolean
}
