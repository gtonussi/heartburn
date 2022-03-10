/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"

interface IQuizProviderProps {
  children: ReactNode
}

interface IBreadcrumb {
  question: string
  answer: string
  score: number
}

interface IQuizContext {
  breadcrumbs: IBreadcrumb[]
  setBreadcrumbs: Dispatch<SetStateAction<IBreadcrumb[]>>

  currentAnswer: string
  setCurrentAnswer: Dispatch<SetStateAction<string>>

  currentQuestion: string
  setCurrentQuestion: Dispatch<SetStateAction<string>>

  firstQuestion: string
  setFirstQuestion: Dispatch<SetStateAction<string>>

  result: string
  setResult: Dispatch<SetStateAction<string>>

  score: number
  setScore: Dispatch<SetStateAction<number>>

  setInitialValues: () => void
}

const QuizContext = createContext<IQuizContext>({} as IQuizContext)

export const QuizProvider = ({ children }: IQuizProviderProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([])
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [firstQuestion, setFirstQuestion] = useState("")
  const [result, setResult] = useState("")
  const [score, setScore] = useState(0)

  const setInitialValues = () => {
    setBreadcrumbs([])
    setCurrentAnswer("")
    setCurrentQuestion(firstQuestion)
    setResult("")
    setScore(0)
  }

  useEffect(() => {
    const newScore = breadcrumbs.map((i) => i.score).reduce((a, b) => a + b, 0)
    setScore(newScore)
  }, [breadcrumbs])

  return (
    <QuizContext.Provider
      value={{
        breadcrumbs,
        setBreadcrumbs,
        currentAnswer,
        setCurrentAnswer,
        currentQuestion,
        setCurrentQuestion,
        firstQuestion,
        setFirstQuestion,
        result,
        setResult,
        score,
        setScore,
        setInitialValues,
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
