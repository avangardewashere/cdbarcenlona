import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import instaicon from "./../../assets/images/icons/socials/instagram.png"
import fbicon from "./../../assets/images/icons/socials/facebook.png"
import messicon from "./../../assets/images/icons/socials/messenger.png"


const HeroSection = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx("image")}></div>
      <div className={clsx(style.heroGraph)}>
        <div className={clsx(style.tagLine)}>
          <b>It's</b> <span>Charles Darwin Barcelona</span>
        </div>
        <div className={clsx(style.tagLine)} style={{ fontSize: "38rem" }}>
          <b>I'm a</b> <span>Graphics Designer</span>
        </div>
        <p>
          Welcome to my portfolio! I am thrilled to showcase my diverse range of
          projects that demonstrate my creativity, expertise, and dedication to
          crafting exceptional digital experiences. I invite you to explore my
          portfolio and discover how my innovative designs can elevate your
          online presence and help you achieve your goals.
        </p>
      </div>

      {/* button */}
      <div className={clsx(style.socials)}>
        <div className={clsx(style.icontainer)}>
          <img src={instaicon} alt="social-media-icon-charles-darwin-barcelona" />
        </div>
		<div className={clsx(style.icontainer)}>
          <img src={fbicon} alt="social-media-icon-charles-darwin-barcelona" />
        </div>
		<div className={clsx(style.icontainer)}>
          <img src={messicon} alt="social-media-icon-charles-darwin-barcelona" />
        </div>
      </div>
	  
	  <div className={clsx(style.hireButton)}>
		Hire Me
	  </div>
    </div>
  );
});

export default HeroSection;
