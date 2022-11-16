import { Dispatch, SetStateAction, useState } from "react";
import { Stage } from "../../interface/decorateInterface";
import { Container, InputBox } from "../../styles/DecorateStyle";
import { useRecoilState } from "recoil";
import { recoilDecoState, Decoration } from "../../states/recoilDecorateState";

interface infoProps {
  setStage: Dispatch<SetStateAction<Stage>>;
  close: () => void;
}

export default function InputInfo(props: infoProps) {
  const { setStage, close } = props;
  const [deco, setDeco] = useRecoilState(recoilDecoState);
  const [name, setName] = useState(deco.name);
  const [comment, setComment] = useState(deco.comment);
  const [err, setErr] = useState(false);

  const nextStage = () => {
    if (name !== "" && comment !== "") {
      const newDecoInfo: Decoration = {
        name: name,
        comment: comment,
        objectId: deco.objectId,
        commonVoice: deco.commonVoice,
        personalVoice: deco.personalVoice,
        top: deco.top,
        left: deco.left,
      };
      setDeco(newDecoInfo);
      setStage(Stage.SelectObj);
    } else {
      setErr(true);
    }
  };

  return (
    <Container>
      <div className="title-box">
        <span className="title">스노우볼 꾸미기 (1/4)</span>
        <span className="subtitle">이름과 함께 짧은 편지를 적어보아요.</span>
      </div>
      <div className="content-box">
        <InputBox>
          <li>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              type="text"
              placeholder="당신의 이름을 적어주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={5}
            />
          </li>
          <li>
            <label htmlFor="msg">짧은 편지</label>
            <input
              id="msg"
              type="text"
              placeholder="짧은 편지를 작성해주세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={30}
            />
          </li>
        </InputBox>
      </div>
      <div className="btn-box">
        {err ? <span>모든 정보를 입력해주세요!</span> : <></>}
        <button className="next" onClick={() => nextStage()}>
          오브제 선택하기
        </button>
        <button className="cancel" onClick={() => close()}>
          꾸미지 않고 창 닫기
        </button>
      </div>
    </Container>
  );
}
