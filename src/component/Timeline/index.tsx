import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { Steps } from "antd-mobile";
import JobCard from "./jobCard";
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
        //   title={"hello"}
          description={ 
			<JobCard />
		 }
        />
        <Step
          className={clsx(style.period)}
       
		//   description={ 
		// 	<div className={clsx(style.jobCard)}>
		// 		<div className={clsx(style.jobDate)}>
		// 			2013
		// 		</div>
		// 		<div className={clsx(style.jobTitle)}>
		// 			High School
		// 		</div>
		// 		<div className={clsx(style.employer)}>
		// 			Sain Joseph Academy Candijay, Bohol
		// 		</div>
		// 	</div>
		//  }
        />
      </Steps>
    </div>
  );
});

export default TimeLine;
