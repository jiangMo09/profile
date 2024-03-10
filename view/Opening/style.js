import { css } from 'styled-components'

const style = css`
  width: 100vw;
  height: 100vh;
  background-image: url('/profile/images/opening/background.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  .hamster {
    position: absolute;
    height: 25vh;
    bottom: 5vh;
    left: calc(50% - 15vh);
  }

  .click-mouse {
    height: 10vh;
    position: absolute;
    bottom: 15vh;
    left: 50%;
  }

  .talk-box {
    max-width: 30vh;
    whitespace: 'pre-line';
    position: absolute;
    left: calc(50% - 10vh);
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 5px;
    bottom: 32vh;
    padding: 2vh 3vh;

    &:before {
      border: 10px solid transparent;
      border-top-color: #888;
      bottom: -20px;
      content: '';
      height: 0;
      left: 30px;
      position: absolute;
      width: 0;
    }

    &:after {
      border: 10px solid transparent;
      border-top-color: #fff;
      bottom: -19px;
      content: '';
      height: 0;
      left: 30px;
      position: absolute;
      width: 0;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1vh;
  }
`

export default style
