/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

interface IQuizProviderProps {
  children: ReactNode
}

interface IQuizContext {
  breadcrumbs: Breadcrumb[]
  setBreadcrumbs: Dispatch<SetStateAction<Breadcrumb[]>>

  currentAnswer: string
  setCurrentAnswer: Dispatch<SetStateAction<string>>

  currentQuestion: string
  setCurrentQuestion: Dispatch<SetStateAction<string>>

  outcome: string
  setOutcome: Dispatch<SetStateAction<string>>

  score: number
  setScore: Dispatch<SetStateAction<number>>
}

interface Breadcrumb {
  question: string
  answer?: string
}

const QuizContext = createContext<IQuizContext>({} as IQuizContext)

export const QuizProvider = ({ children }: IQuizProviderProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([])
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [outcome, setOutcome] = useState("")
  const [score, setScore] = useState(0)

  return (
    <QuizContext.Provider
      value={{
        breadcrumbs,
        setBreadcrumbs,
        currentAnswer,
        setCurrentAnswer,
        currentQuestion,
        setCurrentQuestion,
        outcome,
        setOutcome,
        score,
        setScore,
      }}
      // eslint-disable-next-line prettier/prettier
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) throw new Error("Quiz hook must be wrapped in a Provider!")

  return context
}
