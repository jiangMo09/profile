import styled from 'styled-components'
import 'animate.css/animate.min.css'

import style from './style'

const Header = ({ className, callback }) => {
  return (
    <div className={className}>
      <img
        className="hamster pointer"
        src="/profile/images/mainStory/hamster.gif"
        onClick={callback}
      />
      <span className="pointer" onClick={callback}>
        Leona Jiang
      </span>
    </div>
  )
}

export default styled(Header)`
  ${style}
`
