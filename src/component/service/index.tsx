import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const Service = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>Service</span>
	</div>
  );
});

export default Service;