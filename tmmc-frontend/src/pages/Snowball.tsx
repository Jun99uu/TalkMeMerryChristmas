import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SnowballInterface, Object } from "../interface/snowballInterface";
import Layout from "../components/Snowball/Layout";
import Snow from "../styles/Snow";
import styled from "styled-components";
import axios from "axios";

export default function Snowball() {
  const { snowballId } = useParams(); //스노우볼 고유 아이디
  const [info, setInfo] = useState<SnowballInterface>();

  const getUserInfo = () => {
    //통신구문으로 받아오기
    //임시데이터
    // const tmpObj1: Object = {
    //   writer: "산타",
    //   Objet: {
    //     objetId: 0,
    //     objetUrl:
    //       "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/행운.png",
    //   },
    //   left: 293,
    //   top: 575,
    // };
    // const tmpObj2: Object = {
    //   writer: "루돌프",
    //   Objet: {
    //     objetId: 0,
    //     objetUrl:
    //       "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/하트.png",
    //   },
    //   left: 77,
    //   top: 526,
    // };
    // const tmpObj3: Object = {
    //   writer: "코딱지",
    //   Objet: {
    //     objetId: 0,
    //     objetUrl:
    //       "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/쿠키.png",
    //   },
    //   left: 33,
    //   top: 294,
    // };
    // const tmpObj4: Object = {
    //   writer: "빨개요",
    //   Objet: {
    //     objetId: 0,
    //     objetUrl:
    //       "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/촛불.png",
    //   },
    //   left: 250,
    //   top: 58,
    // };
    // const tmpObj5: Object = {
    //   writer: "겨울좋아",
    //   Objet: {
    //     objetId: 0,
    //     objetUrl:
    //       "https://tmmc-bucket.s3.ap-northeast-2.amazonaws.com/objets/찬별.png",
    //   },
    //   left: 64,
    //   top: 4,
    // };
    // const tmpInfo: SnowballInterface = {
    //   name: "이준규",
    //   messages: [tmpObj1, tmpObj2, tmpObj3, tmpObj4, tmpObj5],
    // };
    // setInfo(tmpInfo);
    axios
      .get(`http://www.tmmc.shop/api/mysnowball/${snowballId}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="container">
      <Snow />
      {info ? (
        <ContentBox>
          {snowballId ? <Layout info={info} sId={snowballId} /> : <></>}
        </ContentBox>
      ) : (
        <></>
      )}
    </div>
  );
}

const ContentBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
