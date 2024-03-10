import Parser from 'html-react-parser'
import styled from 'styled-components'
import { useState, useRef } from 'react'

import * as QA from './Q&A'

import Bonus from './Bonus'
import Header from './Header'
import Typing from './Typing'
import style from './style'

const MainStory = ({ className }) => {
  const [showButtons, setShowButtons] = useState(false)
  const [showBonus, setShowBonus] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const [question, setQuestion] = useState(QA.QUESTION_1)
  const [answer, setAnswer] = useState(QA.ANSWER_1)
  const step = useRef(1)

  const previousStep = () => {
    if (step.current === 1) {
      return
    }
    setShowButtons(false)
    setIsTyping(true)

    step.current -= 1

    setQuestion(QA[`QUESTION_${step.current}`])
    setAnswer(QA[`ANSWER_${step.current}`])
  }

  const nextStep = () => {
    if (step.current === 8) {
      setShowBonus(true)
      return
    }
    setShowButtons(false)
    setIsTyping(true)

    step.current += 1

    setQuestion(QA[`QUESTION_${step.current}`])
    setAnswer(QA[`ANSWER_${step.current}`])
  }

  const skip = () => {
    setIsTyping(false)
    setShowButtons(true)
  }

  const closeBonus = () => {
    setShowBonus(false)
  }

  return (
    <div className={className}>
      <Header />
      <div className="book">
        <div className="question">{Parser(question)}</div>
        <div className="answer">
          {isTyping && <Typing text={answer} callback={skip} />}
          {!isTyping && Parser(answer)}
        </div>
        {!showButtons && isTyping && (
          <div className="buttons">
            <button
              type="button"
              className="skip btn btn-outline-danger"
              onClick={skip}
            >
              Skip
            </button>
          </div>
        )}
        {showButtons && (
          <div className="buttons">
            {step.current != 1 && (
              <button
                type="button"
                className="previous btn btn-outline-warning"
                onClick={previousStep}
              >
                上一題
              </button>
            )}
            <button
              type="button"
              className="next btn btn-outline-success"
              onClick={nextStep}
            >
              {step.current != 8 ? '下一題' : '看彩蛋ヽ(=^･ω･^=)丿'}
            </button>
          </div>
        )}
      </div>
      {showBonus && <Bonus callback={closeBonus} />}
    </div>
  )
}

export default styled(MainStory)`
  ${style}
`
