import { SnowballInterface } from "../../interface/snowballInterface";
import BaseSnowball from "./BaseSnowball";
import {
  CanvasObject,
  CanvasTitle,
  CanvasModal,
} from "../../styles/SnowballStyle";
import { useState, useRef } from "react";
import Draggable from "react-draggable";
import { useRecoilState } from "recoil";
import { recoilDecoState, Decoration } from "../../states/recoilDecorateState";
import {
  recoilCanvasStage,
  CanvasStage,
  FinalStage,
} from "../../states/recoilDecorateState";
import BasicModal from "./../BasicModal";

interface placementProps {
  info: SnowballInterface;
}

const tmpImg = "https://cdn-icons-png.flaticon.com/512/2077/2077008.png";

export default function Placement(props: placementProps) {
  const { info } = props;
  const nodeRef = useRef(null);
  const [deco, setDeco] = useRecoilState(recoilDecoState);
  const [canvasStage, setCanvasStage] = useRecoilState(recoilCanvasStage);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [over, setOver] = useState(false);
  const [Opacity, setOpacity] = useState(false);

  const [open, setOpen] = useState(false);

  const trackPos = (data: any) => {
    if (data.y >= 0) {
      setOver(false);
      setPosition({ x: data.x, y: data.y });
    } else {
      setOver(true);
      setPosition({ x: data.x, y: 0 });
    }
  };
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  const saveResult = () => {
    const newDecoInfo: Decoration = {
      name: deco.name,
      comment: deco.comment,
      objectId: deco.objectId,
      commonVoice: deco.commonVoice,
      personalVoice: deco.personalVoice,
      top: Number(position.y.toFixed(0)),
      left: Number(position.x.toFixed(0)),
    };
    setOpen(false);
    setDeco(newDecoInfo);
    const complete: CanvasStage = { isCanvasStage: FinalStage.Complete };
    setCanvasStage(complete);
  };

  return (
    <>
      <CanvasTitle>
        <span className="title">{`내 목소리가 담긴 장식으로\n스노우볼을 예쁘게 꾸며봐요.`}</span>
        <button onClick={() => setOpen(true)}>저장할래요!</button>
      </CanvasTitle>
      <Draggable
        nodeRef={nodeRef}
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
      >
        <CanvasObject ref={nodeRef} style={{ opacity: Opacity ? "0.6" : "1" }}>
          <img src={tmpImg} alt="object" />
          <span>
            {over ? `잘못된\n위치입니다.` : `끌어서 위치를\n옮겨보세요`}
          </span>
        </CanvasObject>
      </Draggable>
      <BaseSnowball objs={info.objectList} />
      <BasicModal open={open}>
        <CanvasModal>
          <div className="title-box">
            <span className="title">정말 저장하실거죠?</span>
            <span className="subtitle">
              따뜻한 크리스마스를 만들어주셔서 감사해요!
            </span>
          </div>
          <div className="btn-box">
            <button onClick={() => saveResult()} className="yes-btn">
              네!
            </button>
            <button onClick={() => setOpen(false)} className="no-btn">
              아니요.
            </button>
          </div>
        </CanvasModal>
      </BasicModal>
    </>
  );
}
