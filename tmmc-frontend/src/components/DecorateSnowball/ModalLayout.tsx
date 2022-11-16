import { useState } from "react";
import { Stage } from "../../interface/decorateInterface";
import styled from "styled-components";
import InputInfo from "./InputInfo";
import InputVoice from "./InputVoice";
import SelectObj from "./SelectObj";
import InputMerry from "./InputMerry";
import { useResetRecoilState } from "recoil";
import { recoilDecoState } from "../../states/recoilDecorateState";

interface modalProps {
  close: () => void;
}

export default function ModalLayout(props: modalProps) {
  const { close } = props;
  const [stage, setStage] = useState(Stage.InputInfo);
  const reset = useResetRecoilState(recoilDecoState);

  const closeModal = () => {
    reset();
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
        <InputMerry setStage={setStage} close={closeModal} />
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
