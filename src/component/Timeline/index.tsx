import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const TimeLine = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>TimeLine</span>
	</div>
  );
});

export default TimeLine;