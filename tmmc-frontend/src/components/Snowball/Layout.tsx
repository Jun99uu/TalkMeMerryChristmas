import { SnowballInterface } from "../../interface/snowballInterface";
import { useRecoilState } from "recoil";
import {
  recoilCanvasStage,
  CanvasStage,
  FinalStage,
} from "../../states/recoilDecorateState";
import { Container } from "../../styles/SnowballStyle";
import NonFinal from "./NonFinal";
import Placement from "./Placement";

interface layoutProps {
  info: SnowballInterface;
}

export default function Layout(props: layoutProps) {
  const { info } = props;
  const [canvasStage, setCanvasStage] = useRecoilState(recoilCanvasStage);

  return (
    <Container>
      {canvasStage.isCanvasStage === FinalStage.NonFinal ? (
        <NonFinal info={info} />
      ) : canvasStage.isCanvasStage === FinalStage.Placement ? (
        <Placement info={info} />
      ) : (
        <></>
      )}
    </Container>
  );
}
