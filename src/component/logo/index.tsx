import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const Logo = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>CD</span><span>Barcelona</span>
	</div>
  );
});

export default Logo;