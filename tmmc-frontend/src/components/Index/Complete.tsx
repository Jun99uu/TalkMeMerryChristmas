import loading from "../../res/loading.png";
import { CompleteBox } from "../../styles/IndexStyle";
import { Dispatch, SetStateAction } from "react";
import { Category } from "../../interface/indexInterface";

interface indexProps {
  setCategory: Dispatch<SetStateAction<Category>>;
}

export default function Complete(props: indexProps) {
  const { setCategory } = props;
  return (
    <CompleteBox>
      <img src={loading} alt="Talk Me Merry Christmas" className="logo" />
      <div className="info-box">
        <div className="title-box">
          <span className="title">{`내 스노우볼이 생겼어요`}</span>
          <span className="subtite">소중한 목소리를 담아보세요!</span>
        </div>
        <div className="btn-box">
          <button onClick={() => setCategory(Category.Login)}>
            <span>내 스노우볼 열어보기</span>
          </button>
          <button onClick={() => setCategory(Category.Index)}>
            <span>메인화면으로</span>
          </button>
        </div>
      </div>
    </CompleteBox>
  );
}
