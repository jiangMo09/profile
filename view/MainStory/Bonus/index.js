import styled from 'styled-components'

import style from './style'

const Bonus = ({ className, callback }) => {
  return (
    <div className={className} onClick={callback}>
      <iframe
        className="bonus"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OQoxzDoAKz4?si=sDHyeyw-wxq_k1aJ&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  )
}

export default styled(Bonus)`
  ${style}
`
