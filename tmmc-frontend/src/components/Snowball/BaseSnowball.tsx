import { SnowballInterface, Object } from "../../interface/snowballInterface";
import styled from "styled-components";
import basetree from "../../res/basetree.png";

interface objInterface {
  objs: Array<Object>;
}

export default function BaseSnowball(props: objInterface) {
  const { objs } = props;
  return (
    <Container>
      <Snowball>
        <SnowballTop />
        <SnowballBottom />
      </Snowball>
      <img src={basetree} alt="base-tree" className="base-tree" />
    </Container>
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
