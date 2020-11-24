import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Paper, List, Typography } from "@material-ui/core";
import { useLocalObservable, Observer } from "mobx-react-lite";

import InputBar from "./InputBar";
import MessageItem from "./MessageItem";

const messages = [
  {
    id: 1,
    value: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    avatar: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    value: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    value: "I am try out this new BBQ recipe, I think this might be amazing",
    avatar: "/static/images/avatar/2.jpg",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 56,
      minHeight: "100vh",
      backgroundColor: "#eee",
    },
    list: {
      overflowX: "hidden",
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const Messages = () => {
  const classes = useStyles();
  const state = useLocalObservable((): {
    list: any[];
    add: (data: any) => void;
    set: (data: any) => void;
  } => ({
    list: [],
    add: (data: any) => {
      state.list.push(data);
    },
    set: (data: any) => {
      state.list = data;
    },
  }));
  useEffect(() => {
    state.set(messages);
  }, [state]);

  return (
    <Observer>
      {() => (
        <React.Fragment>
          <CssBaseline />
          <Paper square className={classes.paper} elevation={0}>
            <Typography className={classes.text} variant="h5" gutterBottom>
              Inbox
            </Typography>
            <List className={classes.list}>
              {state.list.map((item) => (
                <MessageItem dataSource={item} key={item.id}></MessageItem>
              ))}
            </List>
          </Paper>
          <InputBar onSend={(val: any) => state.add(val)}></InputBar>
        </React.Fragment>
      )}
    </Observer>
  );
};

export default Messages;
