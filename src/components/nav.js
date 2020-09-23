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
    "&:hover": { backgroundColor: "rgba(38, 43, 51, 1.00)" },
  },
  listIcon: {
    marginRight: "8px",
  },
  iconSVG: {
    "& path": {
      fill: "hsla(218, 100%, 65%, .80)",
    },
  },
  link: {
    textDecoration: "none",
  },
  linkText: {
    fontSize: "1rem",
    color: "#f3f6f8",
  },
  customDrawer: {
    backgroundColor: "#12171e",
  },
})

export default function NavDrawer() {
  const classes = useStyles()
  const [right, setRight] = useState(false)

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setRight(true)
  }

  const handleClickAway = () => {
    setRight(false)
  }

  const list = anchor => (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List component="nav" className={classes.list}>
        <Link to="/" className={classes.link}>
          <ListItem button divider={true} className={classes.listItem}>
            <div className={classes.listIcon}>
              <FontAwesomeIcon icon="home" className={classes.iconSVG} />
            </div>
            <Typography variant="h6" className={classes.linkText}>
              Home
            </Typography>
          </ListItem>
        </Link>
        <Link to="/about" className={classes.link}>
          <ListItem button divider={true} className={classes.listItem}>
            <div className={classes.listIcon}>
              <FontAwesomeIcon icon="user" className={classes.iconSVG} />
            </div>
            <Typography variant="h6" className={classes.linkText}>
              About Me
            </Typography>
          </ListItem>
        </Link>
        <Link to="/projects" className={classes.link}>
          <ListItem button divider={true} className={classes.listItem}>
            <div className={classes.listIcon}>
              <FontAwesomeIcon icon="file-alt" className={classes.iconSVG} />
            </div>
            <Typography variant="h6" className={classes.linkText}>
              Projects
            </Typography>
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.link}>
          <ListItem button divider={true} className={classes.listItem}>
            <div className={classes.listIcon}>
              <FontAwesomeIcon
                icon="address-book"
                className={classes.iconSVG}
              />
            </div>
            <Typography variant="h6" className={classes.linkText}>
              Contact me
            </Typography>
          </ListItem>
        </Link>
      </List>
    </ClickAwayListener>
  )

  return (
    <>
      <Button onClick={toggleDrawer(right, true)}>
        <FontAwesomeIcon icon="bars" />
      </Button>
      <Drawer
        anchor="right"
        open={right}
        onClose={toggleDrawer("right", false)}
        classes={{ paper: classes.customDrawer }}
      >
        {list(right)}
      </Drawer>
    </>
  )
}
