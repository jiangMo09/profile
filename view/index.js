import { useState } from 'react'

import MainStory from './MainStory'
import Opening from './Opening'

const Main = () => {
  const [showStory, setShowStory] = useState(false)

  const changeComponent = () => {
    setShowStory(!showStory)
  }

  return showStory ? (
    <MainStory callback={changeComponent} />
  ) : (
    <Opening callback={changeComponent} />
  )
}

export default Main
