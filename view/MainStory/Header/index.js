import { useRouter } from 'next/router'
import styled from 'styled-components'
import 'animate.css/animate.min.css'

import style from './style'

const Header = ({ className }) => {
  const router = useRouter()

  const goToOpening = () => {
    router.push('/')
  }

  return (
    <div className={className}>
      <img
        className="hamster pointer"
        src="/profile/images/mainStory/hamster.gif"
        onClick={goToOpening}
      />
      <span className="pointer" onClick={goToOpening}>
        Leona Jiang
      </span>
    </div>
  )
}

export default styled(Header)`
  ${style}
`
