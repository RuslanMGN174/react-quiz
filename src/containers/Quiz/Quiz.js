import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

let questionNumber = 0

class Quiz extends Component{
  state = {
    quiz: [
      {
        questionNum: questionNumber++,
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зелёный', id: 4 }
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log(`Answer ID: ${answerId}`)
  }

  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            questionNum={this.state.quiz[0].questionNum}
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz