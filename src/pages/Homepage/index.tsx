import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import Logo from '../../component/logo';

const Homepage = memo(() => {
  return (
	<div className={clsx(style.container)}>
		<Logo />
	  <span>Homepage</span>
	</div>
  );
});

export default Homepage;