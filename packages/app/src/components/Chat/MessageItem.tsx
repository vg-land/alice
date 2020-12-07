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
    <div className="inline-grid grid-cols-3 w-full gap-y-2">
      <div>
        <Avatar
          className={classes.avatar}
          variant="rounded"
          alt="Avatar"
          src={dataSource.avatar}
        />
      </div>
      <div className="p-4 bg-green-500 text-white rounded">
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
    // <Grid
    //   container
    //   alignItems="flex-start"
    //   justify="space-evenly"
    //   className={classes.root}
    //   spacing={1}
    // >
    //   <Grid item style={{ width: 48 }}>
    //     {!isOwn && (
    //       <Avatar
    //         className={classes.avatar}
    //         variant="rounded"
    //         alt="Avatar"
    //         src={dataSource.avatar}
    //       />
    //     )}
    //   </Grid>
    //   <Grid item style={{ flex: 1 }}>
    //     <Paper className={classes.content} elevation={0}>
    //       <Typography color="textPrimary">{dataSource.value}</Typography>
    //     </Paper>
    //   </Grid>
    //   <Grid item style={{ width: 48 }}>
    //     {isOwn && (
    //       <Avatar
    //         className={classes.avatar}
    //         alt="Avatar"
    //         variant="rounded"
    //         src={dataSource.avatar}
    //       />
    //     )}
    //   </Grid>
    // </Grid>
  );
};

export default MessageItem;
