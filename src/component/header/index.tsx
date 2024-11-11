import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import Logo from "../logo";
import {
	AntOutline,
	HandPayCircleOutline,
	ScanningOutline,
	TransportQRcodeOutline,
AppstoreOutline
  } from 'antd-mobile-icons'
import {   Popover, Toast } from "antd-mobile";

interface Action {
  key: string;
  icon: React.ReactNode; // Assuming the icon is a React component
  text: string;
}

const Header = memo(() => {
  const actions: Action[] = [
    { key: "scan", icon: <ScanningOutline />, text: "Home" },
    { key: "payment", icon: <HandPayCircleOutline />, text: "About" },
    { key: "bus", icon: <TransportQRcodeOutline />, text: "Service" },
    { key: "assistant", icon: <AntOutline />, text: "Contact" },
  ];
  return (
    <div className={clsx(style.container)}>
      <Logo />
	  <Popover.Menu
          actions={actions}
          placement='bottom-start'
          onAction={node => Toast.show(`选择了 ${node.text}`)}
          trigger='click'
		 
        >
         <AppstoreOutline style={{color:"#00a688"}}/> 
        </Popover.Menu>
    </div>
  );
});

export default Header;
