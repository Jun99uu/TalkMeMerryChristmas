import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { SignUpBox, SignUpContainer } from "../../styles/IndexStyle";
import { Category } from "../../interface/indexInterface";
import { Dispatch, SetStateAction, useState } from "react";

interface signUpProps {
  setCategory: Dispatch<SetStateAction<Category>>;
}

export default function SignUp(props: signUpProps) {
  const { setCategory } = props;
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <SignUpContainer>
      <SignUpBox>
        <div className="title-box">
          <span className="title">
            스노우볼 만들기
            <FontAwesomeIcon icon={faSnowflake} />
          </span>
          <span className="subtitle">{`내 스노우볼을 만들고,\n소중한 사람의 목소리로 채워보세요!\n분명 행복한 크리스마스가 될거예요.`}</span>
        </div>
        <ul>
          <li>
            <label htmlFor="name">이름</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="이름을 입력하세요."
            />
          </li>
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
          <li>
            <span>
              {`개인정보는 스노우볼을 열어보기 위해 사용됩니다.\n이 외의 목적으로는 사용되지 않습니다.`}
            </span>
          </li>
        </ul>
        <div className="btn-box">
          <button onClick={() => setCategory(Category.Complete)}>
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
