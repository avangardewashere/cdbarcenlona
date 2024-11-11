import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
 
import Header from '../../component/header';

const Homepage = memo(() => {
  return (
	<div className={clsx(style.container)}>
		<Header />
	  <span>Homepage</span>
	</div>
  );
});

export default Homepage;