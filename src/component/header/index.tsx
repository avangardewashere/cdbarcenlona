import { memo, useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import Logo from "../logo";
 
 

const Header = memo(() => {
    const [actNav,setActNav] = useState(1001);
	const navItem =[
		{
			id:1001,
			name:"Home",
			link:"/home"
		},
		{
			id:1002,
			name:"About",
			link:"/about"
		},
		{
			id:1003,
			name:"Services",
			link:"/services"
		},
		{
			id:1004,
			name:"Contact",
			link:"/contact"
		},
	]
 
  return (
    <div className={clsx(style.container)}>
      <Logo />
      <div className={clsx(style.navigator)}>
		{navItem.map((item)=>(
			<div onClick={()=>{setActNav(item.id)}} key={item.id} className={clsx(style.navItem,actNav===item.id && style.activeNav)}>
			{item.name}
			</div>
		))}
	  </div>
    </div>
  );
});

export default Header;
