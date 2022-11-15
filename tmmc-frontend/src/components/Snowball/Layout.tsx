import { SnowballInterface, Object } from "../../interface/snowballInterface";
import { useRecoilState } from "recoil";
import { recoilAuthState, AuthState } from "../../states/recoilAuthState";
import BaseSnowball from "./BaseSnowball";
import { Container, TitleBox } from "../../styles/SnowballStyle";

interface layoutProps {
  info: SnowballInterface;
}

export default function Layout(props: layoutProps) {
  const { info } = props;
  const [authState, setAuthState] = useRecoilState(recoilAuthState);

  return (
    <Container>
      <TitleBox>
        <span className="title">{`${info.name}님의\n스노우볼이에요.`}</span>
        <span className="subtitle">{`현재까지 ${info.cnt}명이 목소리를 담아줬어요.`}</span>
        <div className="btn-box">
          <button>메리크리스마스!</button>
          {authState === AuthState.Auth ? (
            <>
              <button>목소리 듣기</button>
              <button>공유하기</button>
            </>
          ) : (
            <>
              <button>스노우볼 꾸미기</button>
            </>
          )}
        </div>
      </TitleBox>
      <BaseSnowball objs={info.objectList} />
    </Container>
  );
}
