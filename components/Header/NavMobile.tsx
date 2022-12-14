import React from "react";
import { MobileNavMenuIcon } from "../Icon";

type Props = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
};

export default function NavMobile({ toggleDrawer, drawerOpen }: Props) {
  return (
    <div className="nav__mobile">
      <a className="nav__mobile__icon" href="">
        <figure>
          <MobileNavMenuIcon />
        </figure>
      </a>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-primary"
        aria-haspopup="menu"
        onClick={() => {
          toggleDrawer();
        }}
      >
        Menu
      </button>
    </div>
  );
}
