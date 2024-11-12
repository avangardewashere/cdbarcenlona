import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const HeroSection = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>HeroSection</span>
	</div>
  );
});

export default HeroSection;