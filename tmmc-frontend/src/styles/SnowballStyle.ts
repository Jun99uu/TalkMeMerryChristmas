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
