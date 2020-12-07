import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import WebChat from "../components/Chat/Web";

const Web: React.FC = (props: any) => {
  const [position, setPosition] = useState({ x: 0, y: 200 });
  const size = { width: 400, height: 400 };
  useEffect(() => {
    const x = (document.body.clientWidth - size.width) / 2;
    const y = 200;
    setPosition({ x, y });
  }, [size.width]);
  return (
    <Rnd
      position={{
        x: position.x,
        y: position.y,
      }}
      default={{
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
      }}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        console.log(e, direction, ref, delta, position);
      }}
    >
      <WebChat></WebChat>
    </Rnd>
  );
};

export default Web;
