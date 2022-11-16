import { SnowballInterface } from "../../interface/snowballInterface";
import BaseSnowball from "./BaseSnowball";
import { CanvasTitle } from "../../styles/SnowballStyle";

interface placementProps {
  info: SnowballInterface;
}

export default function Placement(props: placementProps) {
  const { info } = props;
  return (
    <>
      <CanvasTitle>
        <span className="title">{`내 목소리가 담긴 장식으로,\n스노우볼을 예쁘게 꾸며봐요.`}</span>
        <button>저장할래요!</button>
      </CanvasTitle>
      <BaseSnowball objs={info.objectList} />
    </>
  );
}
