import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { SignUpBox, SignUpContainer } from "../../styles/IndexStyle";
import { Category } from "../../interface/indexInterface";
import { Dispatch, SetStateAction, useState } from "react";

interface logInProps {
  setCategory: Dispatch<SetStateAction<Category>>;
}

export default function SignUp(props: logInProps) {
  const { setCategory } = props;
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <SignUpContainer>
      <SignUpBox>
        <div className="title-box">
          <span className="title">
            스노우볼 열어보기
            <FontAwesomeIcon icon={faSnowflake} />
          </span>
          <span className="subtitle">{`내 스노우볼에 목소리가 얼마나 담겼을까요?\n저장된 목소리는 12월 25일 00시 부터 들을 수 있어요.`}</span>
        </div>
        <ul>
          <li>
            <label htmlFor="id">아이디</label>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              id="id"
              placeholder="아이디를 입력하세요."
            />
          </li>
          <li>
            <label htmlFor="pwd">비밀번호</label>
            <input
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              id="pwd"
              placeholder="비밀번호를 입력하세요."
            />
          </li>
        </ul>
        <div className="btn-box">
          <button>
            <span>스노우볼 열어보기</span>
          </button>
          <button onClick={() => setCategory(Category.SignUp)}>
            <span>스노우볼 만들기</span>
          </button>
          <button onClick={() => setCategory(Category.Index)}>
            <span>뒤로가기</span>
          </button>
        </div>
      </SignUpBox>
    </SignUpContainer>
  );
}
