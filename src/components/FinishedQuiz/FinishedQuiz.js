import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total ,key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fas',
            props.results[quizItem.id] === 'success' ? 'fas fa-check' : 'fas fa-times',
            classes[props.results[quizItem.id]]
          ]

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}/>
            </li>
          )
        })}
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Button type="success">Перейти в список тестов</Button>
      </div>
    </div>
  )
}

export default FinishedQuiz