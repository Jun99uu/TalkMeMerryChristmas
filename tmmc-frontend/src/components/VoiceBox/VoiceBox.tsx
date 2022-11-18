import { Voice } from "../../interface/voiceBoxInterface";
import { VoiceBoxContainer } from "../../styles/VoiceBoxStyle";

interface voiceProps {
  voice: Voice;
}

export default function VoiceBox(props: voiceProps) {
  const { voice } = props;
  return (
    <VoiceBoxContainer>
      <div className="letter-box">
        <span className="writer">from. {voice.writer}님</span>
        <span className="comment">{voice.comment}</span>
      </div>
      <audio src={voice.personalVoice} controls>
        지원되지 않는 브라우저입니다.
      </audio>
    </VoiceBoxContainer>
  );
}
