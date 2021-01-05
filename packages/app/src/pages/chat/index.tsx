import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"

import InputBar from "../../components/Chat/InputBar"
import MessageItem from "../../components/Chat/MessageItem"
import { useMessage } from "../../store/messages"
import { userValue } from "../../store/user"
import { useRecoilValue } from "recoil"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 56,
      backgroundColor: "transparent",
    },
    list: {
      overflowX: "hidden",
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

interface Props {}

const Messages: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props)
  const messages = useMessage()
  const user = useRecoilValue(userValue)
  return (
    <React.Fragment>
      <Paper square className={classes.paper} elevation={0}>
        {messages.list.map((item) => (
          <MessageItem
            dataSource={item}
            isOwn={user.id === item.id}
            key={item.timestamp}
          ></MessageItem>
        ))}
      </Paper>
      <InputBar onSend={(text: string) => messages.new(text)}></InputBar>
    </React.Fragment>
  )
}

export default Messages
