import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 0px;

  & > .consolation {
    white-space: pre-line;
    word-break: keep-all;
    text-align: center;
  }

  & > .close {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background-color: #242424;
    width: 25px;
    height: 25px;
    color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .title-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: pre-line;
    word-break: keep-all;
    text-align: center;
    gap: 5px;

    & > .title {
      font-family: "ONE-Mobile-POP";
      font-size: 22px;
      background: linear-gradient(to right, #166214, #e82d46, #3439af);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  & > .btn-box {
    display: flex;
    gap: 5px;
    list-style-type: none;
    flex-direction: column;
    margin: 0px;
    padding: 0px;

    & > li {
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      & > button {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #242424;
        width: 25px;
        height: 25px;
        border: none;
        border-radius: 5px;
        background-color: white;
        transition: all 0.15s;
      }

      & > span {
        font-size: 14px;
        color: #242424;
        transition: all 0.15s;
      }
    }

    & > li:hover {
      & > button {
        background-color: #242424;
        color: white;
      }
      & > span {
        color: black;
      }
    }
  }
`;
