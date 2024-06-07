import styles from "./DateTime.module.scss";

export const DateTime = ({date}: {date: string}) => {
  return <p className={styles.date}>{date.toString()}</p>;
};
