import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

import Header from "../../component/header";
import HeroSection from "../../component/hero";
import About from "../../component/about";

const Homepage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <Header />
      <HeroSection />
      <About />
      {/* {"Profile"}
		{"Bio"}
		{"links"}

		{//About me
		"About me" + "right side photo"
		}

		{//
		"Employment timeline"
		}

		{//
		"Services Area"
		}

		{//
		"Form Area"
		} */}
      {/* <span>Homepage</span> */}
    </div>
  );
});

export default Homepage;
