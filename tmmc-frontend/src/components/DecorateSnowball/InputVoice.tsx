import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Stage } from "../../interface/decorateInterface";
import { Container, RecordBox } from "../../styles/DecorateStyle";
import { useRecoilState } from "recoil";
import { recoilDecoState, Decoration } from "../../states/recoilDecorateState";
import useRecorder from "./useRecorder";
import { useInterval } from "./useInterval";
import logo from "../../res/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop } from "@fortawesome/free-solid-svg-icons";

interface voiceProps {
  setStage: Dispatch<SetStateAction<Stage>>;
  close: () => void;
}

export default function InputVoice(props: voiceProps) {
  const { setStage, close } = props;
  const [deco, setDeco] = useRecoilState(recoilDecoState);
  const [err, setErr] = useState(false);
  const [timer, setTimer] = useState(10);

  let { audioURL, isRecording, startRecording, stopRecording } = useRecorder();

  const recordStop = () => {
    stopRecording();
    setTimer(10);
  };

  const timerHandler = () => {
    timer === 0
      ? recordStop()
      : setTimer((prev) => (prev === 0 ? prev : prev - 1));
  };

  useInterval(() => {
    if (isRecording) timerHandler();
  }, 1000);

  const getAudioFile = (): File => {
    const sound = new File([audioURL], "soundBlob", {
      lastModified: new Date().getTime(),
      type: "audio",
    });
    return sound;
  };

  const nextStage = () => {
    if (audioURL === "") {
      setErr(true);
    } else {
      setErr(false);
      const newDecoInfo: Decoration = {
        name: deco.name,
        comment: deco.comment,
        objectId: deco.objectId,
        commonVoice: deco.commonVoice,
        personalVoice: getAudioFile(),
      };
      setDeco(newDecoInfo);
      setStage(Stage.SelectObj);
    }
  };

  return (
    <Container>
      <div className="title-box">
        <span className="title">스노우볼 꾸미기 (3/4)</span>
        <span className="subtitle">내 목소리로 소중한 편지를 담아보아요.</span>
      </div>
      <div className="content-box">
        <RecordBox>
          {isRecording ? (
            <button onClick={recordStop} className="stop-btn">
              <FontAwesomeIcon icon={faStop} />
            </button>
          ) : (
            <button onClick={startRecording} className="record-btn">
              <img src={logo} alt="play" />
            </button>
          )}
          <span>
            {isRecording
              ? `정지 버튼을 터치하여 녹음 종료!\n${timer}초 후 자동으로 종료됩니다.`
              : "루돌프를 터치하여 녹음 시작!"}
          </span>
          <audio src={audioURL} controls />
        </RecordBox>
      </div>
      <div className="btn-box">
        {err ? <span>음성 녹음을 완료해주세요!</span> : <></>}
        <button className="next" onClick={() => nextStage()}>
          메리 크리스마스!
        </button>
        <button className="cancel" onClick={() => close()}>
          꾸미지 않고 창 닫기
        </button>
      </div>
    </Container>
  );
}
