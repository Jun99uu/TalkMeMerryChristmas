import logo from "../../res/logo.png";
import { MainBox } from "../../styles/IndexStyle";
import { Dispatch, SetStateAction } from "react";
import { Category } from "../../interface/indexInterface";

interface indexProps {
  setCategory: Dispatch<SetStateAction<Category>>;
}

export default function IndexMain(props: indexProps) {
  const { setCategory } = props;
  return (
    <MainBox>
      <img src={logo} alt="Talk Me Merry Christmas" className="logo" />
      <div className="info-box">
        <span className="title">{`Talk Me\nMerry Christmas`}</span>
        <div className="btn-box">
          <button onClick={() => setCategory(Category.Login)}>
            <span>내 스노우볼 열어보기</span>
          </button>
          <button onClick={() => setCategory(Category.SignUp)}>
            <span>스노우볼 만들기</span>
          </button>
        </div>
        <span className="copyright">{`Copyright by 멋쟁이사자처럼단풍톤 10팀\nAll right reserved.`}</span>
      </div>
    </MainBox>
  );
}
