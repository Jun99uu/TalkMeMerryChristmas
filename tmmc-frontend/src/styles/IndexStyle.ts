import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  color: white;
  text-align: center;
  position: absolute;
  z-index: 10;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 400px) {
    transform: translate(-50%, -50%) scale(0.85);
  }

  @media screen and (max-width: 290px) {
    transform: translate(-50%, -50%) scale(0.7);
  }

  & > .logo {
    width: 45%;
  }

  & > .info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: pre-line;
    gap: 25px;

    & > .title {
      font-size: 40px;
      font-family: "ONE-Mobile-POP";
      text-shadow: 2px 2px 4px #242424;
    }

    & > .btn-box {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      width: 100%;

      & > button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        transition: all 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;

        & > span {
          font-family: "ONE-Mobile-POP";
          font-size: 16px;
          background: linear-gradient(to right, #292c6d, #66363d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &:active {
          transform: scale(0.98);
        }
      }
    }

    & > .copyright {
      font-size: 14px;
      font-weight: 200;
      line-height: 18px;
    }
  }
`;

export const SignUpContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const SignUpBox = styled.div`
  width: 85%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  white-space: pre-line;

  @media screen and (max-width: 290px) {
    transform: scale(0.85);
  }

  & > .title-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    color: white;

    margin-bottom: -10px;

    & > .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      font-size: 28px;
      font-family: "ONE-Mobile-POP";
    }

    & > .subtitle {
      font-size: 15px;
      font-weight: 200;

      @media screen and (max-width: 420px) {
        font-size: 14px;
      }
      @media screen and (max-width: 290px) {
        font-size: 13px;
      }
    }
  }

  & > ul {
    list-style-type: none;
    margin: -10px 0px 0px 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;

    & > li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      width: 100%;
      padding-right: 10px;

      & > label {
        color: white;
        font-size: 14px;
        font-weight: 200;
      }

      & > input {
        width: 100%;
        background-color: white;
        border: none;
        height: 35px;
        padding-left: 10px;
        border-radius: 10px;
      }

      & > span {
        color: white;
        align-self: flex-end;
        text-align: end;
        font-size: 12px;
        font-weight: 200;
      }
    }
  }

  & > .btn-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    & > .btn {
      width: 100%;
      text-decoration: none;
      & > button {
        width: 100%;
        height: 35px;
        border: none;
        border-radius: 10px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        transition: all 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;

        & > span {
          font-family: "ONE-Mobile-POP";
          font-size: 14px;
          background: linear-gradient(to right, #292c6d, #66363d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &:active {
          transform: scale(0.98);
        }
      }
    }

    & > button {
      width: 100%;
      height: 35px;
      border: none;
      border-radius: 10px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      cursor: pointer;
      transition: all 0.25s;
      display: flex;
      justify-content: center;
      align-items: center;

      & > span {
        font-family: "ONE-Mobile-POP";
        font-size: 14px;
        background: linear-gradient(to right, #292c6d, #66363d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
`;

export const CompleteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  color: white;
  text-align: center;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 400px) {
    transform: translate(-50%, -50%) scale(0.85);
  }

  & > .logo {
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    width: 50%;
    animation: spin 15s linear infinite;
  }

  & > .info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    white-space: pre-line;
    gap: 25px;

    & > .title-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      & > .title {
        font-size: 28px;
        font-family: "ONE-Mobile-POP";
      }
      & > .subtitle {
        font-size: 14px;
        font-weight: 200;
        line-height: 18px;
      }
    }

    & > .btn-box {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      width: 90%;

      & > button {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
        transition: all 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;

        & > span {
          font-family: "ONE-Mobile-POP";
          font-size: 16px;
          background: linear-gradient(to right, #292c6d, #66363d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &:active {
          transform: scale(0.98);
        }
      }
    }
  }
`;
