import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import sarls from "./../../assets/images/profile/p.png";
const About = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.leftSection)}>
        <div className={clsx(style.aboutMe)}>About Me</div>
        <div className={clsx(style.typingText)}>Graphics Designer</div>
        <p className={clsx(style.pAboutMe)}>
          My name is Charles Darwin Barcelona, I am a professional Graphic
          Designer having 5+ years of experience. Living in Philippines, and I'm
          very passionate and dedicated to my work. I have acquired the skills
          necessary to build great and premium websites. Having more
          professional skills like Branding, Web Development, UI/UX Web
          Designing.
        </p>
        <div className={clsx(style.ctaButton)}>Check out my work</div>
      </div>
      <div className={clsx(style.rightSection)}>
        {" "}
        <img
          style={{ width: "240rem", aspectRatio: 1 }}
          src={sarls}
          alt="cd-barcelona-photo"
        />
      </div>
    </div>
  );
});

export default About;
