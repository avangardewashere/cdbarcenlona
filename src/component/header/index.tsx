import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import Logo from "../logo";
 
 

const Header = memo(() => {
 
  return (
    <div className={clsx(style.container)}>
      <Logo />
 
    </div>
  );
});

export default Header;
