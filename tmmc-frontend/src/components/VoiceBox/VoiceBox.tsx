import { Voice } from "../../interface/voiceBoxInterface";
import { VoiceBoxContainer } from "../../styles/VoiceBoxStyle";

interface voiceProps {
  voice: Voice;
}

export default function VoiceBox(props: voiceProps) {
  const { voice } = props;
  const downloadAudio = () => {
    fetch("url here", {
      method: "GET",
      // content-type은 따로 지정하지 않았습니다.
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.setAttribute("href", url);
        link.setAttribute("download", "audio.mp3");

        document.body.appendChild(link);

        link.click();

        link.parentNode?.removeChild(link);

        window.URL.revokeObjectURL(url);
      });
  };
  return (
    <VoiceBoxContainer>
      <div className="letter-box">
        <span className="writer">from. {voice.writer}님</span>
        <span className="comment">{voice.comment}</span>
      </div>
      <audio src={voice.personalVoice} controls>
        지원되지 않는 브라우저입니다.
      </audio>
      <button onClick={() => downloadAudio()}>
        <span>음성 파일 다운로드</span>
      </button>
    </VoiceBoxContainer>
  );
}
