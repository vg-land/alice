import React from "react";
import { Avatar } from "@material-ui/core";

interface IProps {
  dataSource: {
    id?: string | number;
    name?: string;
    avatar?: string;
    value?: string;
  };

  isOwn?: boolean;
}

const MessageItem = (props: IProps) => {
  const { dataSource, isOwn } = props;
  return (
    <div className="flex py-4">
      <div className="w-16">
        {!isOwn && (
          <Avatar
            className="mx-auto"
            variant="rounded"
            alt="Avatar"
            src={dataSource.avatar}
          />
        )}
      </div>
      <div
        className={`py-2 px-4 
        ${isOwn ? "bg-green-500 text-white" : "bg-white text-black"} 
        rounded flex-1`}
      >
        {dataSource.value}
      </div>
      <div className="w-16">
        {isOwn && (
          <Avatar
            className="mx-auto"
            variant="rounded"
            alt="Avatar"
            src={dataSource.avatar}
          />
        )}
      </div>
    </div>
  );
};

export default MessageItem;
