import { Button } from 'antd'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resIncrement, wrIncrement } from '../../store/reducer'
import "../../Style/quiz.css"
export const QuizScreen = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questionsState = useSelector(state => state.questions)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log({ questionsState })
    const nextQuestion = (answer) => {
        const corAns = questionsState[currentQuestion].correctAnswer
        if (answer === corAns) {
            dispatch(resIncrement())
        } else {
            dispatch(wrIncrement())
        }
        if (currentQuestion !== questionsState.length - 1) {
            setCurrentQuestion(prv => prv + 1)
        } else {
            navigate('/result')
        }
    }
    return (
        <div>
            <h1>Quiz</h1>
            <div className='qz'>
                <h3>{questionsState[currentQuestion].question}</h3>
                <div className='opt'>
                    <ul>
                        {
                            questionsState[currentQuestion].choices.map((answer, index) => (
                                <li onClick={() => nextQuestion(answer)} key={index}>{answer}</li>
                            ))
                        }
                    </ul>

                </div>

            </div>

        </div>
    )

}