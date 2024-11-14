import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

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
    </div>
  );
});

export default HeroSection;
