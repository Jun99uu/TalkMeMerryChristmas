import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > button {
    align-self: center;
    width: 80%;
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
    margin-top: 30px;

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
`;

export const FriendCarousel = styled.div`
  width: 100%;
  height: 120px;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4c6f81;
  }
  &::-webkit-scrollbar-track {
    background-color: #00ff0000;
  }

  & > .first-item {
    margin-left: 30px;
  }

  & > .last-item {
    margin-right: 30px;
  }

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: flex-start;

    & > div {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s;
      cursor: pointer;

      & > img {
        width: 80%;
        object-fit: scale-down;
      }
    }

    & > .selected {
      transform: scale(1.02);
      border: 3px solid #e84a5f;
      background-color: white;
    }

    & > .non-selected {
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    & > .non-selected:hover {
      transform: scale(1.02);
      background: rgba(255, 255, 255, 0.5);
    }

    & > .non-selected:active {
      transform: scale(0.98);
    }

    & > span {
      text-align: center;
      cursor: pointer;
    }

    & > .selected-name {
      font-size: 14px;
      color: white;
    }

    & > .non-selected-name {
      font-size: 12px;
      color: #ffffff56;
    }
  }
`;

export const VoiceBoxContainer = styled.div`
  width: 90%;
  align-self: center;
  height: 40vh;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.786);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and (min-height: 750px) {
    height: 45vh;
  }

  & > .letter-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: pre-line;
    word-break: keep-all;
    text-align: center;
    gap: 10px;
    color: #242424;

    & > .writer {
      font-family: "ONE-Mobile-POP";
      font-size: 20px;
    }
  }

  & > audio {
    height: 40px;
    color: #4c6f81;
  }

  & > button {
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    background: linear-gradient(135deg, #166214, #e82d46, #3439af);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 0.25s;

    & > span {
      font-family: "ONE-Mobile-POP";
      font-size: 16px;
      color: white;
      font-weight: 100;
      /* background: linear-gradient(to right, #166214, #e82d46, #3439af); */
      /* -webkit-background-clip: text; */
      /* -webkit-text-fill-color: transparent; */
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
