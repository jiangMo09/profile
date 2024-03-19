import { css } from 'styled-components'
import { pxToVw } from '/helper/size'

const style = css`
  display: flex;
  align-items: center;
  background-color: #dcfaf9;
  padding: 1vh calc((100vw - 1000px) / 2);
  font-size: 20px;

  .hamster {
    width: 2.5vw;
  }

  @media (max-width: 768px) {
    padding: 10px 40px;
    font-size: 20px;

    .hamster {
      width: 50px;
    }
  }

  @media (max-width: 480px) {
    padding: 1vh ${pxToVw(20)};
    font-size: ${pxToVw(14)};

    .hamster {
      width: ${pxToVw(30)};
    }
  }
`

export default style
