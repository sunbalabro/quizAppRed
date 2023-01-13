import { useSelector } from "react-redux"
import "../../Style/result.css"
export const ResultScreen = (props) => {
    const results = useSelector(state => state.result)

  return(
    <div className="result">
        <h3>Result</h3>
        <h2>Your Score : <span> {results.score}</span></h2>
        <h2>Correct Answers : <snap> {results.correctAns}</snap></h2>
        <h2>Wrong Answer : <span> {results.wrongAnswer}</span></h2>
    </div>
   )

 }