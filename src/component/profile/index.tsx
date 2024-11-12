import { memo } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import sarlsImg from "./../../assets/images/profile/p.png"
const Profile = memo(() => {
  return (
	<div className={clsx(style.container)}>
	<img src={sarlsImg} alt="charles-darwin-barcelona-photo" />
	</div>
  );
});

export default Profile;