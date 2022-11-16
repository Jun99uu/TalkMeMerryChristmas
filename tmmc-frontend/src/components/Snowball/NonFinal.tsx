import Notice from "../Notice";
import BasicModal from "../BasicModal";
import ModalLayout from "../DecorateSnowball/ModalLayout";
import { SnowballInterface } from "../../interface/snowballInterface";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recoilAuthState, AuthState } from "../../states/recoilAuthState";
import { TitleBox } from "../../styles/SnowballStyle";
import BaseSnowball from "./BaseSnowball";

interface nonProps {
  info: SnowballInterface;
}

export default function NonFinal(props: nonProps) {
  const { info } = props;
  const [authState, setAuthState] = useRecoilState(recoilAuthState);
  const [over, setOver] = useState(false);
  const [overMsg, setOverMsg] = useState("크리스마스 정각에 공개됩니다!🎄");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Notice over={over} setOver={setOver} content={overMsg} />
      <TitleBox>
        <span className="title">{`${info.name}님의\n스노우볼이에요.`}</span>
        <span className="subtitle">{`현재까지 ${info.cnt}명이 목소리를 담아줬어요.`}</span>
        <div className="btn-box">
          <button onClick={() => setOver(true)}>메리크리스마스!</button>
          {authState === AuthState.Auth ? (
            <>
              <button onClick={() => setOver(true)}>목소리 듣기</button>
              <button>공유하기</button>
            </>
          ) : (
            <>
              <button onClick={() => setOpen(true)}>스노우볼 꾸미기</button>
            </>
          )}
        </div>
      </TitleBox>
      <BaseSnowball objs={info.objectList} />
      <BasicModal open={open}>
        <ModalLayout close={() => setOpen(false)} />
      </BasicModal>
    </>
  );
}
