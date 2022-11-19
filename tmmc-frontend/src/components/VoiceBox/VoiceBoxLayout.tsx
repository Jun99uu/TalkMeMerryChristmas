import { SnowballInterface } from "../../interface/snowballInterface";
import { TitleBox } from "../../styles/SnowballStyle";
import { VoiceInfo, Voice } from "../../interface/voiceBoxInterface";
import { useState, useEffect } from "react";
import { FriendCarousel, Container } from "../../styles/VoiceBoxStyle";
import { useHorizontalScroll } from "./useHorizontalScroll";
import VoiceBox from "./VoiceBox";
import { useRecoilState } from "recoil";
import {
  recoilCanvasStage,
  CanvasStage,
  FinalStage,
} from "../../states/recoilDecorateState";
import Notice from "../Notice";
import axios from "axios";

interface voiceProps {
  info: SnowballInterface;
  sId: string;
}

export default function VoiceBoxLayout(props: voiceProps) {
  const { info, sId } = props;
  const [voices, setVoices] = useState<VoiceInfo>();
  const [curItem, setCurItem] = useState(0);
  const scrollRef = useHorizontalScroll();
  const [over, setOver] = useState(true);
  const [canvasStage, setCanvasStage] = useRecoilState(recoilCanvasStage);

  const getVoices = () => {
    //   //통신으로 음성정보 받아오기
    axios
      .get(`http://www.tmmc.shop/api/mysnowball/${sId}/messages`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setVoices(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //   //아래는 임시데이터
    // const tmp: VoiceInfo = {
    //   name: "이준규",
    //   messages: [
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //     {
    //       writer: "산타",
    //       messageId: 0,
    //       comment:
    //         "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
    //       personalVoice:
    //         "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
    //       Objet: {
    //         objetId: 0,
    //         objetUrl:
    //           "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //       },
    //     },
    //   ],
    // };
    // setVoices(tmp);
  };

  const backToSnowball = () => {
    const snowballStage: CanvasStage = { isCanvasStage: FinalStage.NonFinal };
    setCanvasStage(snowballStage);
  };

  useEffect(() => {
    getVoices();
  }, []);

  return (
    <Container>
      <Notice over={over} setOver={setOver} content={"메리 크리스마스!🎄"} />
      <TitleBox>
        <span className="title">{`${info.name}님의 편지함이에요.`}</span>
        <span className="subtitle">{`현재까지 ${info.messages.length}명이 목소리를 담아줬어요.`}</span>
      </TitleBox>
      <FriendCarousel ref={scrollRef}>
        {voices ? (
          voices.messages.map((item, index) => (
            <div
              key={`${item.writer}-${index}`}
              onClick={() => setCurItem(index)}
              className={
                index === 0
                  ? "first-item"
                  : index === voices.messages.length - 1
                  ? "last-item"
                  : ""
              }
            >
              <div className={index === curItem ? "selected" : "non-selected"}>
                <img src={item.Objet.objetUrl} alt={item.writer} />
              </div>
              <span
                className={
                  index === curItem ? "selected-name" : "non-selected-name"
                }
              >
                {item.writer}
              </span>
            </div>
          ))
        ) : (
          <></>
        )}
      </FriendCarousel>
      {voices ? <VoiceBox voice={voices.messages[curItem]} /> : <></>}
      <button onClick={() => backToSnowball()}>
        <span>내 스노우볼로 돌아가기</span>
      </button>
    </Container>
  );
}
