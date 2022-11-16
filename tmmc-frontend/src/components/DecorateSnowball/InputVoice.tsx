import { Dispatch, SetStateAction } from "react";
import { Stage } from "../../interface/decorateInterface";

interface voiceProps {
  setStage: Dispatch<SetStateAction<Stage>>;
  close: () => void;
}

export default function InputVoice(props: voiceProps) {
  const { setStage } = props;
  return <></>;
}
