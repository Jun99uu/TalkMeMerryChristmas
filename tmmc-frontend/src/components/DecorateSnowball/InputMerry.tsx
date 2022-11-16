import { Dispatch, SetStateAction } from "react";
import { Stage } from "../../interface/decorateInterface";

interface merryProps {
  setStage: Dispatch<SetStateAction<Stage>>;
  close: () => void;
}

export default function InputMerry(props: merryProps) {
  const { setStage } = props;
  return <></>;
}
