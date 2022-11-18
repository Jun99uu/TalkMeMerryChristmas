import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  padding: 10vh 0px 0px 30px;

  & > .title {
    font-family: "ONE-Mobile-POP";
    font-size: 24px;
    color: white;
    text-shadow: 2px 2px 4px #242424;
  }

  & > .subtitle {
    font-size: 16px;
    color: white;
    text-shadow: 2px 2px 4px #242424;
  }

  & > .btn-box {
    display: flex;
    gap: 5px;
    margin-top: 10px;

    & > button {
      background-color: white;
      border: none;
      border-radius: 5px;
      font-family: "ONE-Mobile-POP";
      font-size: 15px;
      color: #242424;
      padding: 8px 10px;
      cursor: pointer;
    }
  }
`;

export const CanvasBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CanvasTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10vh 0px 0px 0px;

  & > .title {
    font-family: "ONE-Mobile-POP";
    font-size: 24px;
    color: white;
    text-shadow: 2px 2px 4px #242424;
    white-space: pre-line;
  }

  & > button {
    width: 55%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #292c6d, #e84a5f);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 16px;
    font-weight: 800;
    color: #eaeaea;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const CanvasObject = styled.div`
  position: absolute;
  cursor: move;
  color: black;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  padding: 1em;
  margin: auto;
  user-select: none;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > img {
    width: 100%;
    height: 100%;
  }

  & > span {
    color: white;
    font-size: 14px;
    text-align: center;
    white-space: pre-line;
  }
`;

export const CanvasModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  gap: 30px;

  & > .title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;

    & > .title {
      font-family: "ONE-Mobile-POP";
      font-size: 24px;
      background: linear-gradient(to right, #292c6d, #e82d46);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: pre-line;
    }

    & > .subtitle {
      font-size: 14px;
      color: #242424;
    }
  }

  & > .btn-box {
    display: flex;
    flex-direction: row;
    gap: 10px;

    & > button {
      width: 100px;
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

    & > .yes-btn {
      background: linear-gradient(135deg, #292c6d, #e84a5f);
    }

    & > .no-btn {
      background-color: #575757;
    }
  }
`;
