import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
 
import Header from '../../component/header';

const Homepage = memo(() => {
  return (
	<div className={clsx(style.container)}>
		<Header />
		{"Profile"}
		{"Bio"}
		{"links"}

		{//About me
		"About me" + "right side photo"
		}

		{//
		"Employment timeline"
		}

		{//
		"Services Area"
		}

		{//
		"Form Area"
		}
	  <span>Homepage</span>
	</div>
  );
});

export default Homepage;