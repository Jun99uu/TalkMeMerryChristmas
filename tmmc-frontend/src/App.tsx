import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Glass, QrBox } from "./styles/AppStyle";
import Index from "./pages/Index";

function App() {
  return (
    <RecoilRoot>
      <Container>
        <Glass>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </BrowserRouter>
        </Glass>
      </Container>
      <QrBox>
        <div className="qr-code">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            alt="qr-code"
          />
        </div>
        <span className="subtitle">
          사랑하는 사람에게 특별한 연말 메시지를 전달해보세요.
        </span>
        <span className="title">Talk Me Merry Christmas</span>
        <span className="team">멋쟁이 사자처럼 2022 단풍톤 10팀</span>
      </QrBox>
    </RecoilRoot>
  );
}

export default App;
