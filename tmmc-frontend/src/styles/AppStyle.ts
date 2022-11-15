import styled from "styled-components";

export const Container = styled.div`
  width: 31.2vw;
  min-width: 500px;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const Glass = styled.div`
  width: 100.2%;
  height: 100%;
  background: rgba(41, 44, 109, 0.2);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
`;

export const QrBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
  gap: 15px;

  & > .qr-code {
    width: 140px;
    height: 140px;
    background-color: white;
    position: relative;
    margin-bottom: 20px;

    & > img {
      width: 130px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  & > .title {
    font-size: 16px;
    font-weight: 700;
  }

  & > .subtitle {
    font-weight: 100;
    font-size: 16px;
  }

  & > .team {
    font-size: 15px;
    font-weight: 100;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
