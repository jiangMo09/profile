import Parser from 'html-react-parser'
import { memo, useState, useEffect, useRef } from 'react'

const Typing = ({ text, callback }) => {
  const [typedText, setTypedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index === text.length) {
      callback()
    }

    const timer = setTimeout(() => {
      const nextChar = text.charAt(index)
      const displayChar =
        nextChar === '<' ? text.slice(index, index + 4) : nextChar

      setTypedText((typed) => typed + displayChar)
      setIndex(index + (nextChar === '<' ? 4 : 1))
    }, 30)

    return () => clearTimeout(timer)
  }, [text, index])

  useEffect(() => {
    if (index == 0) {
      return
    }

    callback()
    setIndex(0)
    setTypedText('')
  }, [text])

  return <div>{Parser(typedText)}</div>
}

export default memo(Typing)
