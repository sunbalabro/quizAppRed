import {createSlice} from "@reduxjs/toolkit"
export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questions: [
            {
                question:
                    'Which function is used to serialize an object into a JSON string in Javascript?',
                choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
                type: 'MCQs',
                correctAnswer: 'stringify()',
            },
            {
                question:
                    'Which of the following keywords is used to define a variable in Javascript?',
                choices: ['var', 'let', 'var and let', 'None of the above'],
                type: 'MCQs',
                correctAnswer: 'var and let',
            },
            {
                question:
                    'Which of the following methods can be used to display data in some form using Javascript?',
                choices: [
                    'document.write()',
                    'console.log()',
                    'window.alert',
                    'All of the above',
                ],
                type: 'MCQs',
                correctAnswer: 'All of the above',
            },
            {
                question: 'How can a datatype be declared to be a constant type?',
                choices: ['const', 'var', 'let', 'constant'],
                type: 'MCQs',
                correctAnswer: 'const',
            },
        ],
        result: {
            score: 0,
            correctAns: 0,
            wrongAnswer: 0,
        }
    },
    reducers:{
        resIncrement: state =>{
            state.result.score += 5
            state.result.correctAns += 1
        },
        wrIncrement: state =>{
            state.result.wrongAnswer += 1
        }
    }
})
export const {resIncrement , wrIncrement} = quizSlice.actions