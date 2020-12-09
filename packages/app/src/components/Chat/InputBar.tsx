import React, { useRef, useState } from "react";
import { InputBase } from "@material-ui/core";
import { useHotkeys } from "react-hotkeys-hook";
const InputBar = ({ onSend = () => {} }: any) => {
  const inputRef: any = useRef();
  const [input, setInput] = useState("");

  // 发送消息
  const handleSend = () => {
    onSend(input);
    setInput("");
    inputRef?.current?.focus();
  };

  // 在输入框内才有用
  const isInputEvent = (event: KeyboardEvent) => {
    return event.target === inputRef.current;
  };

  // 回车发送信息
  useHotkeys(
    "enter",
    (event) => {
      event.preventDefault();
      handleSend();
    },
    {
      filter: isInputEvent,
    },
    [input],
  );

  // ctrl+回车换行
  useHotkeys(
    "ctrl+enter",
    (event) => {
      event.preventDefault();
      setInput(`${input}\n`);
    },
    [input],
  );

  return (
    <footer className="absolute bottom-0 left-0 right-0 p-2 bg-gray-100">
      <div className="flex space-x-4 w-full items-end">
        <InputBase
          multiline
          className={`w-full bg-white flex-1 px-2 py-1 rounded`}
          style={{
            padding: "0.5rem 0.75rem",
          }}
          onChange={(val) => setInput(val.target.value)}
          value={input}
          inputRef={inputRef}
        />
        <button
          className="py-2 px-4 bg-green-500 text-white rounded text-sm hover:bg-green-600 disabled:opacity-25"
          disabled={!input}
          onClick={handleSend}
        >
          发送
        </button>
      </div>
    </footer>
  );
};

export default InputBar;
