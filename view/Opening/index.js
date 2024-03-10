import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import styled from 'styled-components'
import 'animate.css/animate.min.css'
import Parser from 'html-react-parser'

import style from './style'

const TEXT_STEP_1 = '拜託點我 QQ...'
const TEXT_STEP_2 =
  'Hi~ 我是一隻前端倉鼠，名字是 Leona。<br>我有一場渴望已久的冒險，正在試圖追求它。<br>你願意聽聽努力的前端倉鼠故事嗎？'
const TEXT_STEP_3 = '不要這樣啦QQ~~看一下~看一下啦~'
const TEXT_STEP_4 = '不管你的意願~永遠 Yes or Yes ~'

const Opening = ({ className }) => {
  const router = useRouter()
  const [showMouse, setShowMouse] = useState(false)
  const [text, setText] = useState(TEXT_STEP_1)
  const hamsterRef = useRef(null)
  const isStep1 = text == TEXT_STEP_1
  const isStep4 = text == TEXT_STEP_4

  const nextStep = (choose) => {
    if (choose) {
      router.push('/story')
    }

    if (!choose && text == TEXT_STEP_2) {
      setText(TEXT_STEP_3)
    }

    if (!choose && text == TEXT_STEP_3) {
      setText(TEXT_STEP_4)
    }
  }

  const hamsterAnimationEnd = () => {
    setShowMouse(true)
  }

  useEffect(() => {
    const hamsterElement = hamsterRef.current
    hamsterElement.addEventListener('animationend', hamsterAnimationEnd)
    return () => {
      hamsterElement.removeEventListener('animationend', hamsterAnimationEnd)
    }
  }, [])

  return (
    <div className={className}>
      <img
        ref={hamsterRef}
        className={classnames(
          'hamster animate__bounceInDown animate__animated',
          {
            pointer: isStep1,
          }
        )}
        src="/profile/images/opening/hamster.png"
        onClick={() => {
          if (isStep1) {
            setText(TEXT_STEP_2)
          }
        }}
      />
      {showMouse && (
        <>
          <img
            className={classnames(
              'click-mouse animate__animated animate__fadeIn',
              {
                pointer: isStep1,
              }
            )}
            src="/profile/images/opening/click-mouse.gif"
            onClick={() => {
              if (isStep1) {
                setText(TEXT_STEP_2)
              }
            }}
          />
          <div className="talk-box animate__animated animate__fadeIn">
            {Parser(text)}
            {!isStep1 && (
              <div className="buttons">
                <button
                  type="button"
                  className={classnames('btn ', {
                    'btn-outline-danger': !isStep4,
                    'btn-outline-success': isStep4,
                  })}
                  onClick={() => {
                    if (isStep4) {
                      nextStep(true)
                      return
                    }
                    nextStep(false)
                  }}
                >
                  {isStep4 ? '願意' : '不願意'}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => {
                    nextStep(true)
                  }}
                >
                  願意
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default styled(Opening)`
  ${style}
`
