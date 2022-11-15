import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Snowball() {
  const { snowballId } = useParams(); //스노우볼 고유 아이디

  return <div className="container"></div>;
}
