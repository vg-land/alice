import React from "react";
import {
  Grid,
  Avatar,
  Paper,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

interface IProps {
  dataSource: {
    avatar?: string;
    value?: string;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1, 1),
      overflow: "hidden",
    },
    paper: {
      padding: theme.spacing(1, 2),
      minHeight: theme.spacing(5),
    },
  }),
);

const MessageItem = ({ dataSource }: IProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="flex-end"
      spacing={1}
      className={classes.container}
    >
      <Grid item>
        <Avatar alt="Profile Picture" src={dataSource.avatar} />
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper} elevation={0}>
          <Typography color="textPrimary">{dataSource.value}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MessageItem;
