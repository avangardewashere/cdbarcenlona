import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const About = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>About</span>
	</div>
  );
});

export default About;