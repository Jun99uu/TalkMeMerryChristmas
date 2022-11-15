import logo from "../res/logo.png";
import { MainBox } from "../styles/IndexStyle";

export default function IndexMain() {
  return (
    <MainBox>
      <img src={logo} alt="Talk Me Merry Christmas" className="logo" />
      <div className="info-box">
        <span className="title">{`Talk Me\nMerry Christmas`}</span>
        <div className="btn-box">
          <button>
            <span>내 스노우볼 열어보기</span>
          </button>
          <button>
            <span>스노우볼 만들기</span>
          </button>
        </div>
        <span className="copyright">{`Copyright by 멋쟁이사자처럼단풍톤 10팀\nAll right reserved.`}</span>
      </div>
    </MainBox>
  );
}
