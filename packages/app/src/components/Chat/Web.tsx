import React from "react";
import InputBar from "./InputBar";
import MessageItem from "./MessageItem";

interface Props {}

export const Web = (props: Props) => {
  return (
    <section className="w-full h-full rounded bg-white flex flex-col">
      <header className="w-full h-8 bg-gray-200 "></header>
      <main className="bg-white flex-1">
        {[1, 2, 3, 4].map(() => (
          <MessageItem dataSource={{ name: "1", value: "1" }}></MessageItem>
        ))}
      </main>
      <InputBar></InputBar>
    </section>
  );
};

export default Web;
