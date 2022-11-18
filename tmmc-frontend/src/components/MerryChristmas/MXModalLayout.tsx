import { Container } from "../../styles/MXStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faCircleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface modalProps {
  close: () => void;
  cnt: number;
}

export default function MXModalLayout(props: modalProps) {
  const { close, cnt } = props;
  return (
    <Container>
      <button className="close" onClick={() => close()}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="title-box">
        <span className="title">메리 크리스마스!</span>
        <span className="subtitle">{`${cnt}명의 친구들이 나를 위해 외쳐준\n"메리 크리스마스" 입니다.`}</span>
      </div>
      <audio src="" controls>
        지원되지 않는 브라우저입니다.
      </audio>
      <ul className="btn-box">
        <li>
          <button>
            <FontAwesomeIcon icon={faShare} />
          </button>
          <span>인스타그램으로 공유하기</span>
        </li>
        <li>
          <button>
            <FontAwesomeIcon icon={faCircleDown} />
          </button>
          <span>저장하기</span>
        </li>
      </ul>
    </Container>
  );
}
