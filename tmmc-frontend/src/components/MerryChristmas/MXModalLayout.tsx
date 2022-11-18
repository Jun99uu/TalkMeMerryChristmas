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
      <audio
        src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
        controls
      >
        지원되지 않는 브라우저입니다.
      </audio>
      <span className="consolation">{`2022년도 고생 많았어요.\n22023년은 더 행복할거에요!`}</span>
      <ul className="btn-box">
        {/* <li>
          <button>
            <FontAwesomeIcon icon={faShare} />
          </button>
          <span>스노우볼 링크 공유하기</span>
        </li> */}
        <li>
          <button
            onClick={() =>
              window.open(
                "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
                "_blank"
              )
            }
          >
            <FontAwesomeIcon icon={faCircleDown} />
          </button>
          <span>저장하기</span>
        </li>
      </ul>
    </Container>
  );
}
