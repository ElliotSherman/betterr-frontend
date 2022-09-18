import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import { useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export function SideDrawer() {
  const [drawerOpen, setDrawerOpen] = useState({
    left: false,
  })
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerOpen({ ...drawerOpen, [anchor]: open })
  }
  let anchor = 'left'
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 272 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="side-nav"
    >
      <List>
        <button className="btn side-nav-btn">Join Fiverr</button>
        <div className="flex column side-nav-links">
          <NavLink to="/?nav=home">Sign in</NavLink>
          <NavLink to="/explore">Explore</NavLink>
        </div>
      </List>
      <Divider className="side-nav-divider" />
      <List>
        <div className="flex column side-nav-links">
          <NavLink to="/?nav=home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </List>
    </Box>
  )

  return (
  
      <Fragment>
        <div className='side-nav-burger' onClick={toggleDrawer(anchor, true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="19"
            viewBox="0 0 23 19"
          >
            <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
            <rect width="23" height="3" rx="1.5" fill="#555"></rect>
            <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
          </svg>
        </div>
        <Drawer
          anchor={anchor}
          open={drawerOpen[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </Fragment>

  )
}