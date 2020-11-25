import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { userValue } from "./user";

export const messageListState = atom({
  key: "messageListState",
  default: [
    {
      id: "1",
      value: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      avatar: "/static/images/avatar/5.jpg",
      timestamp: 1606290480508,
    },
    {
      id: "2",
      value: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
      avatar: "/static/images/avatar/1.jpg",
      timestamp: 1606290717323,
    },
    {
      id: "3",
      value: "I am try out this new BBQ recipe, I think this might be amazing",
      avatar: "/static/images/avatar/2.jpg",
      timestamp: 1606290724365,
    },
    {
      id: "10000",
      value: "I am try out this new BBQ recipe, I think this might be amazing",
      avatar: "",
      timestamp: 1606290729715,
    },
  ],
});

export const messageListValue = selector({
  key: "messageListValue",
  get: ({ get }) => get(messageListState),
});

export const useMessage = () => {
  const [list, setList] = useRecoilState(messageListState);
  const user = useRecoilValue(userValue);
  return {
    list,
    send: (text: string) => {
      const message = {
        value: text,
        timestamp: new Date().getTime(),
        id: user.id,
        avatar: user.avatar,
      };
      setList([...list, message]);
    },
  };
};
