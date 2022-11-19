import { Container } from "../../styles/MXStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import present from "../../res/present.png";
import { useState, useEffect } from "react";

interface modalProps {
  sId: string;
  name: string;
  close: () => void;
  cnt: number;
}

interface MxMasInterface {
  name: string;
  messages: Array<Message>;
}

interface Message {
  messageId: number;
  writer: string;
  comment: string;
  commonVoice: string;
}

export default function MXModalLayout(props: modalProps) {
  const { sId, close, cnt, name } = props;
  const [mx, setMx] = useState<MxMasInterface>();

  const getVoices = () => {
    axios
      .get(`http://www.tmmc.shop/api/mysnowball/${sId}/merryChristmas`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setMx(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const returnPath = (): string => {
    const url =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      window.location.pathname;
    return url;
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(returnPath());
    alert("클립보드에 복사가 완료 되었습니다.");
  };

  useEffect(() => {
    getVoices();
  }, []);

  return (
    <Container>
      <button className="close" onClick={() => close()}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="title-box">
        <span className="title">메리 크리스마스!</span>
        <span className="subtitle">{`${cnt}명의 친구들이 ${name}님을 위해 외쳐준\n"메리 크리스마스" 입니다.`}</span>
      </div>
      <div className="audio-box">
        {mx ? (
          mx.messages.map((m, index) => (
            <audio
              key={`${m.messageId}-${index}`}
              src={m.commonVoice}
              controls
              autoPlay
            >
              지원되지 않는 브라우저입니다.
            </audio>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="present-box">
        <img src={present} alt="present" />
        <span className="consolation">{`2022년도 고생 많았어요.\n22023년은 더 행복할거에요!`}</span>
      </div>
      <ul className="btn-box">
        {/* <li>
          <button>
            <FontAwesomeIcon icon={faShare} />
          </button>
          <span>스노우볼 링크 공유하기</span>
        </li> */}
        <li>
          {/* <button
            onClick={() =>
              window.open(
                "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
                "_blank"
              )
            }
          >
            <FontAwesomeIcon icon={faCircleDown} />
          </button>
          <span>저장하기</span> */}
          <span onClick={() => copyClipboard()}>
            스노우볼을 공유하려면 이곳을 클릭하세요!
          </span>
        </li>
      </ul>
    </Container>
  );
}
