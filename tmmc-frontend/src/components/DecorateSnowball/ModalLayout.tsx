import { useState } from "react";
import { Stage } from "../../interface/decorateInterface";
import styled from "styled-components";
import InputInfo from "./InputInfo";
import InputVoice from "./InputVoice";
import SelectObj from "./SelectObj";
import InputMerry from "./InputMerry";
import { useResetRecoilState, useRecoilState } from "recoil";
import {
  recoilDecoState,
  recoilCanvasStage,
  CanvasStage,
  FinalStage,
} from "../../states/recoilDecorateState";

interface modalProps {
  close: () => void;
}

export default function ModalLayout(props: modalProps) {
  const { close } = props;
  const [stage, setStage] = useState(Stage.InputInfo);
  const reset = useResetRecoilState(recoilDecoState);
  const [canvasStage, setCanvasStage] = useRecoilState(recoilCanvasStage);

  const closeModal = () => {
    reset();
    close();
  };

  const toFinalStage = () => {
    const final: CanvasStage = { isCanvasStage: FinalStage.Placement };
    setCanvasStage(final);
    close();
  };

  return (
    <Container>
      {stage === Stage.InputInfo ? (
        <InputInfo setStage={setStage} close={closeModal} />
      ) : stage === Stage.SelectObj ? (
        <SelectObj setStage={setStage} close={closeModal} />
      ) : stage === Stage.InputVoice ? (
        <InputVoice setStage={setStage} close={closeModal} />
      ) : stage === Stage.InputMerry ? (
        <InputMerry close={closeModal} toFinalStage={toFinalStage} />
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;
