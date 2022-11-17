import { Dispatch, SetStateAction, useState } from "react";
import { Stage } from "../../interface/decorateInterface";
import { Container, ObjsBox } from "../../styles/DecorateStyle";
import { useRecoilState } from "recoil";
import { recoilDecoState, Decoration } from "../../states/recoilDecorateState";
import { objList } from "../../res/objects";

interface objProps {
  setStage: Dispatch<SetStateAction<Stage>>;
  close: () => void;
}

export default function SelectObj(props: objProps) {
  const { setStage, close } = props;
  const [deco, setDeco] = useRecoilState(recoilDecoState);
  const [objId, setObjId] = useState(0);

  const nextStage = () => {
    const newDecoInfo: Decoration = {
      name: deco.name,
      comment: deco.comment,
      objectId: objId,
      commonVoice: deco.commonVoice,
      personalVoice: deco.personalVoice,
      top: deco.top,
      left: deco.left,
    };
    setDeco(newDecoInfo);
    setStage(Stage.InputVoice);
  };

  return (
    <Container>
      <div className="title-box">
        <span className="title">스노우볼 꾸미기 (2/4)</span>
        <span className="subtitle">오브제를 선택해주세요.</span>
      </div>
      <div className="content-box">
        <ObjsBox>
          {objList.map((item, index) => (
            <>
              <input
                key={`${item.id}-${index}`}
                type="radio"
                id={`${index}`}
                checked={objId === item.id ? true : false}
                onChange={() => setObjId(item.id)}
              />
              <label key={item.id} className="obj-btn" htmlFor={`${index}`}>
                <img src={item.url} alt={`${index}`} />
              </label>
            </>
          ))}
        </ObjsBox>
      </div>
      <div className="btn-box">
        <button className="next" onClick={() => nextStage()}>
          목소리 편지 담기
        </button>
        <button className="cancel" onClick={() => close()}>
          꾸미지 않고 창 닫기
        </button>
      </div>
    </Container>
  );
}
