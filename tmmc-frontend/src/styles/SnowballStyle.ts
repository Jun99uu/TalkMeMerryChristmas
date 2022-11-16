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
