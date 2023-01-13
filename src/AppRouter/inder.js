import { QuizScreen } from "../View/QuizScreen"
import {Routes , Route} from "react-router-dom"
import { ResultScreen } from "../View/Result"
export const AppRouter = (props) => {
  return(
    <div>
        <Routes>
            <Route path="/" element={<QuizScreen />} />
            <Route path="/result" element={<ResultScreen />} />
        </Routes>
    </div>
   )

 }