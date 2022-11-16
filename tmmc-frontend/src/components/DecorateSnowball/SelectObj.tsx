import { Dispatch, SetStateAction, useState } from "react";
import { Stage } from "../../interface/decorateInterface";
import { Container, ObjsBox } from "../../styles/DecorateStyle";
import { useRecoilState } from "recoil";
import { recoilDecoState, Decoration } from "../../states/recoilDecorateState";

interface objProps {
  setStage: Dispatch<SetStateAction<Stage>>;
  close: () => void;
}

const tmpItems = [
  "https://cdn-icons-png.flaticon.com/512/74/74558.png",
  "https://cdn-icons-png.flaticon.com/512/642/642012.png",
  "https://cdn-icons-png.flaticon.com/512/2077/2077008.png",
  "https://cdn-icons-png.flaticon.com/512/290/290441.png",
  "https://clipartart.com/images/babybwith-mittens-clipart-8.png",
  "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914438/winter-icon-sm.png",
  "https://cdn-icons-png.flaticon.com/512/74/74558.png",
  "https://cdn-icons-png.flaticon.com/512/642/642012.png",
  "https://cdn-icons-png.flaticon.com/512/2077/2077008.png",
  "https://cdn-icons-png.flaticon.com/512/290/290441.png",
  "https://clipartart.com/images/babybwith-mittens-clipart-8.png",
  "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914438/winter-icon-sm.png",
  "https://cdn-icons-png.flaticon.com/512/74/74558.png",
  "https://cdn-icons-png.flaticon.com/512/642/642012.png",
  "https://cdn-icons-png.flaticon.com/512/2077/2077008.png",
  "https://cdn-icons-png.flaticon.com/512/290/290441.png",
  "https://clipartart.com/images/babybwith-mittens-clipart-8.png",
  "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914438/winter-icon-sm.png",
];

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
          {tmpItems.map((item, index) => (
            <>
              <input
                key={`${item}-${index}`}
                type="radio"
                id={`${index}`}
                checked={objId === index ? true : false}
                onChange={() => setObjId(index)}
              />
              <label key={item} className="obj-btn" htmlFor={`${index}`}>
                <img src={item} alt={`${index}`} />
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
