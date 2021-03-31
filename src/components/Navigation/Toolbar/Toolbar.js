import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggel from '../SideDrawer/DrawerToggel/DrawerToggel'

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggel clicked={props.DrawerToggelClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly} >
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);
export default Toolbar;
