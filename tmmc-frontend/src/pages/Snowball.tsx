import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SnowballInterface, Object } from "../interface/snowballInterface";
import Layout from "../components/Snowball/Layout";

export default function Snowball() {
  const { snowballId } = useParams(); //스노우볼 고유 아이디
  const [info, setInfo] = useState<SnowballInterface>();

  const getUserInfo = () => {
    //통신구문으로 받아오기
    //임시데이터
    const tmpObj1: Object = {
      writer: "산타",
      objectUrl: "",
      width: 50,
      height: 50,
      top: 30,
      left: 20,
    };
    const tmpObj2: Object = {
      writer: "산타",
      objectUrl: "",
      width: 30,
      height: 30,
      top: 20,
      left: 10,
    };

    const tmpInfo: SnowballInterface = {
      name: "이준규",
      cnt: 5,
      objectList: [tmpObj1, tmpObj2],
    };

    setInfo(tmpInfo);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="container">{info ? <Layout info={info} /> : <></>}</div>
  );
}
