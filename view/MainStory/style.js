import { css } from 'styled-components'

const style = css`
  width: 100vw;
  height: 100vh;
  background-image: url('/profile/images/mainStory/background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  .book {
    min-height: 60vh;
    background-color: #fffae6;
    border-radius: 5px;
    margin: 10vh calc((100vw - 1000px) / 2) 0;
    color: #41416e;
    padding: 2.5vw 5vw;
    position: relative;

    .question {
      width: fit-content;
      font-size: 24px;
      font-weight: 400;
      border-bottom: 2px solid #41416e;
    }

    .answer {
      font-size: 16px;
      font-weight: lighter;
      line-height: 32px;
      letter-spacing: 1px;
      margin-top: 2.5vh;
    }

    .buttons {
      position: absolute;
      bottom: 2.5vh;
      right: 2.5vw;

      .next {
        margin-left: 2.5vh;
      }
    }
  }
`

export default style
