import Notice from "../Notice";
import BasicModal from "../BasicModal";
import ModalLayout from "../DecorateSnowball/ModalLayout";
import { SnowballInterface } from "../../interface/snowballInterface";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recoilAuthState, AuthState } from "../../states/recoilAuthState";
import {
  recoilCanvasStage,
  FinalStage,
  CanvasStage,
} from "../../states/recoilDecorateState";
import { TitleBox } from "../../styles/SnowballStyle";
import BaseSnowball from "./BaseSnowball";
import MXModalLayout from "../MerryChristmas/MXModalLayout";
import { useNavigate, useLocation } from "react-router-dom";

interface nonProps {
  sId: string;
  info: SnowballInterface;
}

export default function NonFinal(props: nonProps) {
  const { sId, info } = props;
  const [authState, setAuthState] = useRecoilState(recoilAuthState);
  const [cansvasStage, setCanvasStage] = useRecoilState(recoilCanvasStage);
  const [over, setOver] = useState(false);
  const [overMsg, setOverMsg] = useState("크리스마스 정각에 공개됩니다!🎄");
  const [open, setOpen] = useState(false); //꾸미기 모달 state
  const [mXmasOpen, setmXmasOpen] = useState(false); //메리크리스마스 모달 state
  const navigate = useNavigate();
  const location = useLocation();

  const christmas = new Date("2022-11-18");
  const now = new Date();

  const openVoiceBox = () => {
    if (now >= christmas) {
      const voiceStage: CanvasStage = { isCanvasStage: FinalStage.VoiceBox };
      setCanvasStage(voiceStage);
    } else {
      setOverMsg("크리스마스 정각에 공개됩니다!🎄");
      setOver(true);
    }
  };

  const openMXModal = () => {
    if (now >= christmas) {
      const voiceStage: CanvasStage = { isCanvasStage: FinalStage.VoiceBox };
      setOverMsg("메리 크리스마스!🎄");
      setOver(true);
      setmXmasOpen(true);
    } else {
      setOverMsg("크리스마스 정각에 공개됩니다!🎄");
      setOver(true);
    }
  };

  const returnPath = (): string => {
    const url =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      window.location.pathname;
    return url;
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(returnPath());
    alert("클립보드에 복사가 완료 되었습니다.");
  };

  return (
    <>
      <Notice over={over} setOver={setOver} content={overMsg} />
      <TitleBox>
        <span className="title">{`${info.name}님의\n스노우볼이에요.`}</span>
        <span className="subtitle">{`현재까지 ${info.messages.length}명이 목소리를 담아줬어요.`}</span>
        <div className="btn-box">
          {authState === AuthState.Auth ? (
            <>
              <button onClick={() => openMXModal()}>메리크리스마스!</button>
              <button onClick={() => openVoiceBox()}>목소리 듣기</button>
              {/* 도메인 추가 */}
              <button onClick={() => copyClipboard()}>공유하기</button>
            </>
          ) : (
            <>
              <button onClick={() => setOpen(true)}>스노우볼 꾸미기</button>
              <button onClick={() => navigate("/")}>내 스노우볼 만들기</button>
            </>
          )}
        </div>
      </TitleBox>
      <BaseSnowball objs={info.messages} />
      <BasicModal open={open}>
        <ModalLayout close={() => setOpen(false)} />
      </BasicModal>
      <BasicModal open={mXmasOpen}>
        <MXModalLayout
          sId={sId}
          close={() => setmXmasOpen(false)}
          cnt={info.messages.length}
          name={info.name}
        />
      </BasicModal>
    </>
  );
}
