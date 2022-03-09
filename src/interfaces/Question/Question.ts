export interface Question {
  id: string
  question_text: string
  answers: [
    {
      id: string
      label: string
      score: number
    },
  ]
  next: [
    {
      next_question: string
    },
  ]
}
