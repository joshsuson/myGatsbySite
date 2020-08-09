import React, { useState } from "react"
import { Link } from "gatsby"
import {
  List,
  ListItem,
  Button,
  Drawer,
  ClickAwayListener,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 0,
  },
  listItem: {
    padding: "16px",
  },
  listIcon: {
    marginRight: "8px",
    color: "#020202",
  },
  link: {
    textDecoration: "none",
  },
  linkText: {
    fontSize: "1rem",
    color: "#020202",
  },
})

export default function NavDrawer() {
  const classes = useStyles()
  const [left, setLeft] = useState(false)

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setLeft(true)
  }

  const handleClickAway = () => {
    setLeft(false)
  }

  const list = anchor => (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav" className={classes.list}>
        <Link to="/" className={classes.link}>
          <ListItem button divider={true} className={classes.listItem}>
            <div className={classes.listIcon}>
              <FontAwesomeIcon icon="home" />
            </div>
            <Typography variant="h6" className={classes.linkText}>
              Home
            </Typography>
          </ListItem>
        </Link>
        <Link to="/about" className={classes.link}>
          <ListItem button divider={true} className={classes.listItem}>
            <div className={classes.listIcon}>
              <FontAwesomeIcon icon="user" />
            </div>
            <Typography variant="h6" className={classes.linkText}>
              About Me
            </Typography>
          </ListItem>
        </Link>
        <Link to="/projects" className={classes.link}>
          <ListItem button divider={true} className={classes.listItem}>
            <div className={classes.listIcon}>
              <FontAwesomeIcon icon="file-alt" />
            </div>
            <Typography variant="h6" className={classes.linkText}>
              Projects
            </Typography>
          </ListItem>
        </Link>
      </List>
    </ClickAwayListener>
  )

  return (
    <>
      <Button onClick={toggleDrawer(left, true)}>
        <FontAwesomeIcon icon="bars" />
      </Button>
      <Drawer anchor="left" open={left} onClose={toggleDrawer("left", false)}>
        {list(left)}
      </Drawer>
    </>
  )
}
