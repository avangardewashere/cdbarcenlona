import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { Steps } from "antd-mobile";
const { Step } = Steps;
const TimeLine = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <Steps
        direction="vertical"
        current={1}
        className={clsx(style.employmentTimeline)}
        style={
          {
            //     '--title-font-size': '17px',
            //     '--description-font-size': '15px',
            //     '--indicator-margin-right': '12px',
               '--icon-size': '60rem',
          }
        }
      >
        <Step
          className={clsx(style.period)}
          title={"hello"}
          description={<div style={{ color: "pink" }}>Pink</div>}
        />
        <Step
          className={clsx(style.period)}
          title={"hello"}
          description={<div style={{ color: "pink" }}>Pink</div>}
        />
      </Steps>
    </div>
  );
});

export default TimeLine;
