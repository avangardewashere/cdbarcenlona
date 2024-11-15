import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

interface JobCardProps {
  date?: string;
  title?: string;
  employer?: string;
}

const JobCard: React.FC<JobCardProps> = memo((props) => {
  const { date, title, employer } = props;
  return (
    <div className={clsx(style.jobCard)}>
      <div className={clsx(style.jobDate)}>{date ?? "2013"}</div>
      <div className={clsx(style.jobTitle)}>{title ?? "High School"}</div>
      <div className={clsx(style.employer)}>
        {employer ?? "Saint Joseph Academy Candijay, Bohol"}
      </div>
    </div>
  );
});

export default JobCard;
