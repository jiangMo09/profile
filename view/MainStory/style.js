import { css } from 'styled-components';
import { pxToVw } from '/helper/size';

const style = css`
  width: 100vw;
  min-height: 100vh;
  background-image: url('/profile/images/mainStory/background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  .book {
    min-height: 62vh;
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

  @media (max-width: 768px) {
    .book {
      height: 50vh;
      margin: 5vh ${pxToVw(20)};
      padding-bottom: 5vh;

      .question {
        font-size: 20px;
      }

      .answer {
        font-size: 16px;
        font-weight: lighter;
        line-height: 32px;
        letter-spacing: 1px;
        margin-top: 2vh;
        overflow: scroll;
        height: 46vh;
      }

      .last-answer {
        box-shadow: inset 0 ${pxToVw(-10)} ${pxToVw(10)} ${pxToVw(-10)}
          rgba(0, 0, 0, 0.2);
      }

      .btn {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    .book {
      height: 70vh;
      margin: 5vh ${pxToVw(20)};
      padding-bottom: 5vh;

      .question {
        font-size: ${pxToVw(14)};
      }

      .answer {
        font-size: ${pxToVw(12)};
        font-weight: lighter;
        line-height: ${pxToVw(24)};
        letter-spacing: 1px;
        margin-top: 2vh;
        overflow: scroll;
        height: 55vh;
      }

      .last-answer {
        box-shadow: inset 0 ${pxToVw(-10)} ${pxToVw(10)} ${pxToVw(-10)}
          rgba(0, 0, 0, 0.2);
      }

      .btn {
        font-size: ${pxToVw(12)};
      }
    }
  }
`;

export default style;
