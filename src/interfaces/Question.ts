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
      answered?: string
      max_score?: number
      next_question?: string
      outcome?: string
    },
  ]
}
