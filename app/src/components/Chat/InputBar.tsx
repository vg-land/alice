import React, { useRef, useState } from "react";
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
      padding: theme.spacing(1.5, 1.5),
      minHeight: "inherit",
    },
  }),
);

const InputBar = ({ onSend = () => {} }: any) => {
  const classes = useStyles();
  const inputRef: any = useRef();
  const [input, setInput] = useState("");

  // 发送消息
  const handleSend = () => {
    onSend(input);
    setInput("");
    inputRef?.current?.focus();
  };
  return (
    <AppBar className={classes.appBar} color="default">
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs>
            <InputBase
              multiline
              className={classes.input}
              onChange={(val) => setInput(val.target.value)}
              value={input}
              inputRef={inputRef}
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
