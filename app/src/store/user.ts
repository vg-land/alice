import { atom, selector, useRecoilState } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    id: "admin",
    name: "admin",
    avatar: "",
  },
});

export const userValue = selector({
  key: "userValue",
  get: ({ get }) => get(userState),
});

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  setUser({
    id: "10000",
    name: "admin",
    avatar: "",
  });
  return {
    current: user,
  };
};
