import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > .title-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;

    & > .title {
      font-family: "ONE-Mobile-POP";
      font-size: 24px;
      background: linear-gradient(to right, #292c6d, #e82d46);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & > .subtitle {
      font-size: 14px;
      color: #242424;
    }
  }

  & > .content-box {
    width: 100%;
  }

  & > .btn-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    & > span {
      font-size: 12px;
      color: #e84a5f;
    }

    & > button {
      width: 100%;
      height: 35px;
      border-radius: 10px;
      font-family: "ONE-Mobile-POP";
      font-weight: 100;
      font-size: 14px;
      color: white;
      text-shadow: 1px 1px 2px #242424;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    & > .next {
      background: linear-gradient(135deg, #292c6d, #e84a5f);
    }
    & > .cancel {
      background-color: #404040;
    }
  }
`;

export const InputBox = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  margin-top: -10px;

  & > li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    & > label {
      font-size: 14px;
      font-weight: 600;
      color: black;
    }

    & > input {
      width: 93%;
      height: 30px;
      border: none;
      border-radius: 7px;
      background-color: white;
      padding: 0px 10px;
    }
  }
`;

export const ObjsBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

  & > input {
    display: none;
  }

  & > input[type="radio"]:checked + label {
    background-color: #4c6f81;
  }

  & > .obj-btn {
    padding: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4c6f8135;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }

    & > img {
      width: 80%;
    }
  }
`;

export const RecordBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & > button {
    width: 30%;
    aspect-ratio: 1/1;
    border: none;
    border-radius: 100%;
    background-color: #304652;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.25s;
    color: white;
    font-size: 42px;

    & > img {
      width: 65%;
    }

    &:hover {
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.98);
    }
  }

  & > span {
    font-size: 14px;
    white-space: pre-line;
    text-align: center;
    color: #304652;
  }

  & > audio {
    height: 40px;
  }

  & > .merry-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    & > .title {
      font-family: "ONE-Mobile-POP";
      color: #304652;
      font-size: 18px;
    }

    & > .subtitle {
      font-size: 15px;
      color: #304652;
    }
  }
`;
