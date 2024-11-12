import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const ContactForm = memo(() => {
  return (
	<div className={clsx(style.container)}>
	  <span>ContactForm</span>
	</div>
  );
});

export default ContactForm;