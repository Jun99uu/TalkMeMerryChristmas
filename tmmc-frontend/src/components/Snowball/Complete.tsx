import logo from "../../res/logo.png";
import { CompleteBox } from "../../styles/IndexStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  recoilCanvasStage,
  CanvasStage,
  FinalStage,
} from "../../states/recoilDecorateState";

export default function Complete() {
  const location = useLocation();
  const navigate = useNavigate();
  const [canvasStage, setCanvasStage] = useRecoilState(recoilCanvasStage);

  const goToBack = () => {
    window.location.reload();
  };

  const goToMain = () => {
    const non: CanvasStage = { isCanvasStage: FinalStage.NonFinal };
    setCanvasStage(non);
    navigate("/");
  };
  return (
    <CompleteBox>
      <img src={logo} alt="Talk Me Merry Christmas" className="logo-c" />
      <div className="info-box">
        <div className="title-box">
          <span className="title">{`저장이 완료되었습니다!`}</span>
          <span className="subtite">
            덕분에 따뜻한 크리스마스가 완성되었어요 :)
          </span>
        </div>
        <div className="btn-box">
          <button onClick={() => goToBack()}>
            <span>스노우볼로 돌아가기</span>
          </button>
          <button onClick={() => goToMain()}>
            <span>내 스노우볼 만들기</span>
          </button>
        </div>
        <span className="copyright">{`Copyright by 멋쟁이사자처럼단풍톤 10팀\nAll right reserved.`}</span>
      </div>
    </CompleteBox>
  );
}
