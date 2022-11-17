import { SnowballInterface, Object } from "../../interface/snowballInterface";
import styled from "styled-components";
import basetree from "../../res/tree4.png";

interface objInterface {
  objs: Array<Object>;
}

export default function BaseSnowball(props: objInterface) {
  const { objs } = props;
  return (
    <>
      <Container>
        <Snowball>
          <SnowballTop />
          <SnowballBottom />
        </Snowball>
        <img src={basetree} alt="base-tree" className="base-tree" />
      </Container>
      {objs.map((obj, index) => (
        <Obj
          x={obj.left}
          y={obj.top}
          className="object"
          key={`${obj.objectUrl}-${index}`}
        >
          <img src={obj.objectUrl} alt={obj.writer} />
          <span>{obj.writer}</span>
        </Obj>
      ))}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 0px;

  & > .base-tree {
    position: absolute;
    width: 35%;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Snowball = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const SnowballBottom = styled.div`
  width: 100%;
  height: 5vh;
  background: linear-gradient(to bottom, #e82d46, #551720);
`;

const SnowballTop = styled.div`
  width: 100%;
  min-width: 500px;
  height: 60vh;
  border-radius: 50% 50% 0px 0px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
`;

const Obj = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 80px;
  transform: ${(props) => `translate(${props.x}px, ${props.y}px)`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (max-height: 855px) {
    transform: ${(props) =>
      `translate(${props.x}px, ${props.y > 510 ? 510 : props.y}px)`};
  }
  @media screen and (max-height: 760px) {
    transform: ${(props) =>
      `translate(${props.x}px, ${props.y > 440 ? 440 : props.y}px)`};
  }
  @media screen and (max-height: 680px) {
    transform: ${(props) =>
      `translate(${props.x}px, ${props.y > 380 ? 380 : props.y}px)`};
  }
  @media screen and (max-height: 550px) {
    transform: ${(props) =>
      `translate(${props.x}px, ${props.y > 300 ? 300 : props.y}px)`};
  }
  @media screen and (max-height: 520px) {
    transform: ${(props) =>
      `translate(${props.x}px, ${props.y > 250 ? 250 : props.y}px)`};
  }

  & > img {
    width: 100%;
  }

  & > span {
    font-size: 14px;
    font-weight: 600;
    color: white;
    text-align: center;
    text-shadow: 1px 1px 2px #242424;
  }
`;
