import React from "react";
import { Avatar, makeStyles, createStyles, Theme } from "@material-ui/core";

interface IProps {
  dataSource: {
    id?: string | number;
    name?: string;
    avatar?: string;
    value?: string;
  };

  isOwn?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 1),
    },
    content: (props: IProps) => ({
      padding: theme.spacing(1, 1.5),
      minHeight: theme.spacing(3),
      backgroundColor: props.isOwn ? theme.palette.primary.light : "#fff",
    }),
    avatar: {
      margin: "0 auto",
    },
  }),
);

const MessageItem = (props: IProps) => {
  const { dataSource, isOwn } = props;
  const classes = useStyles(props);
  return (
    <div className="flex space-x-4">
      <div>
        <Avatar
          className={classes.avatar}
          variant="rounded"
          alt="Avatar"
          src={dataSource.avatar}
        />
      </div>
      <div
        className={`py-2 px-4 
        ${isOwn ? "bg-green-500 text-white" : "bg-white text-black"} 
        rounded flex-1`}
      >
        {dataSource.value}
      </div>
      <div>
        <Avatar
          className={classes.avatar}
          variant="rounded"
          alt="Avatar"
          src={dataSource.avatar}
        />
      </div>
    </div>
  );
};

export default MessageItem;
