import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import { Steps } from 'antd-mobile';
const { Step } = Steps
const TimeLine = memo(() => {
  return (
	<div className={clsx(style.container)}>
	 <Steps
          direction='vertical'
          current={1}
        //   style={{
        //     '--title-font-size': '17px',
        //     '--description-font-size': '15px',
        //     '--indicator-margin-right': '12px',
        //     '--icon-size': '22px',
        //   }}
        >
			<Step
			title={"hello"}
			description={
				<div style={{color:"pink"}}>Pink</div>
			}
			/>
				<Step
			title={"hello"}
			description={
				<div style={{color:"pink"}}>Pink</div>
			}
			/>
			</Steps>
	</div>
  );
});

export default TimeLine;