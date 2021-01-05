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
      data: "",
      id: "admin",
      avatar: "123",
    };
    if (typeof data === "string") {
      message = {
        ...message,
        data: data,
      };
    }

    setList([...list, message]);
  };

  const getMessage = (data: { data: string; username: string }) => {
    const message = {
      avatar: "",
      id: data.username,
      data: data.data,
    };
    setList([...list, message]);
  };
  return {
    list,
    new: sendMessage,
    get: getMessage,
  };
};
