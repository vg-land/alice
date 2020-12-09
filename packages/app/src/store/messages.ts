import { atom, selector, useRecoilState } from "recoil";

export const messageListState = atom({
  key: "messageListState",
  default: [] as any[],
});

export const messageListValue = selector({
  key: "messageListValue",
  get: ({ get }) => get(messageListState),
});

export const useMessage = () => {
  const [list, setList] = useRecoilState(messageListState);
  const sendMessage = (data: any) => {
    let message = {
      value: "",
      timestamp: new Date().getTime(),
      id: "admin",
      avatar: "123",
    };
    if (typeof data === "string") {
      message = {
        ...message,
        value: data,
      };
    }

    setList([...list, message]);
  };

  const getMessage = (data: { message: string; username: string }) => {
    const message = {
      timestamp: new Date().getTime(),
      avatar: "",
      id: data.username,
      value: data.message,
    };
    setList([...list, message]);
  };
  return {
    list,
    new: sendMessage,
    get: getMessage,
  };
};
