import React, { useState } from "react";
import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  InputBase,
  Button,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: "100%",
      background: "#fff",
      borderRadius: 3,
      padding: theme.spacing(1, 1),
      color: "#000",
    },
    appBar: {
      top: "auto",
      bottom: 0,
    },
    toolbar: {
      padding: theme.spacing(1, 1),
    },
  }),
);

const InputBar = ({ onSend = () => {} }: any) => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const handleSend = () => {
    onSend({
      id: Math.random().toString(36).slice(2),
      value: input,
      avatar: "/static/images/avatar/5.jpg",
    });
    setInput("");
  };
  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs>
            <InputBase
              multiline
              className={classes.input}
              onChange={(val) => setInput(val.target.value)}
              value={input}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disabled={!input}
              onClick={handleSend}
              disableElevation
            >
              发送
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default InputBar;
