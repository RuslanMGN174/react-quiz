import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
  state = {
    isFinished: true,
    questionNumber: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        questionId: 1,
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зелёный', id: 4 }
        ]
      },
      {
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        questionId: 2,
        answers: [
          { text: '1700', id: 1 },
          { text: '1702', id: 2 },
          { text: '1703', id: 3 },
          { text: '1803', id: 4 }
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.questionNumber]
    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: 'success' }
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            questionNumber: this.state.questionNumber + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: { [answerId]: 'error' }
      })
    }
  }

  isQuizFinished () {
    return this.state.questionNumber + 1 === this.state.quiz.length
  }

  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz/>
              : <ActiveQuiz
                questionNumber={this.state.questionNumber + 1}
                question={this.state.quiz[this.state.questionNumber].question}
                answers={this.state.quiz[this.state.questionNumber].answers}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

export default Quiz