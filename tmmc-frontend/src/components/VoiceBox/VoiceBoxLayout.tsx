import { SnowballInterface } from "../../interface/snowballInterface";
import { TitleBox } from "../../styles/SnowballStyle";
import { VoiceInfo } from "../../interface/voiceBoxInterface";
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

interface voiceProps {
  info: SnowballInterface;
}

export default function VoiceBoxLayout(props: voiceProps) {
  const { info } = props;
  const [voices, setVoices] = useState<VoiceInfo>();
  const [curItem, setCurItem] = useState(0);
  const scrollRef = useHorizontalScroll();
  const [canvasStage, setCanvasStage] = useRecoilState(recoilCanvasStage);

  const getVoices = () => {
    //통신으로 음성정보 받아오기
    //아래는 임시데이터
    const tmp: VoiceInfo = {
      ownerName: "이준규",
      message: [
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "루돌프사슴코딱지렁이",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
        {
          writer: "산타",
          comment:
            "잘 지내시구요 삐슝빠슝뿌슝 2022년도 고생했고 2023년은 더 힘들거예요 수고비읍",
          personalVoice: "",
          objectUrl:
            "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
        },
      ],
    };
    setVoices(tmp);
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
      <TitleBox>
        <span className="title">{`${info.name}님의 편지함이에요.`}</span>
        <span className="subtitle">{`현재까지 ${info.cnt}명이 목소리를 담아줬어요.`}</span>
      </TitleBox>
      <FriendCarousel ref={scrollRef}>
        {voices ? (
          voices.message.map((item, index) => (
            <div
              key={`${item.writer}-${index}`}
              onClick={() => setCurItem(index)}
              className={
                index === 0
                  ? "first-item"
                  : index === voices.message.length - 1
                  ? "last-item"
                  : ""
              }
            >
              <div className={index === curItem ? "selected" : "non-selected"}>
                <img src={item.objectUrl} alt={item.writer} />
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
      {voices ? <VoiceBox voice={voices.message[curItem]} /> : <></>}
      <button onClick={() => backToSnowball()}>
        <span>내 스노우볼로 돌아가기</span>
      </button>
    </Container>
  );
}
