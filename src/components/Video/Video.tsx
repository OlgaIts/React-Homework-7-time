// import {DateTime} from "../DateTime";
import {DateTimePretty} from "../DateTimePretty/DateTimePretty";
import styles from "./Video.module.scss";

export interface Video {
  url: string;
  date: string;
}

export const Video = ({url, date}: Video) => {
  console.log(date);
  return (
    <div className={styles.video}>
      <iframe
        src={url}
        allowFullScreen
        allow='autoplay; encrypted-media'
      ></iframe>
      <DateTimePretty date={date} />
      {/* <DateTime date={date} />  helper*/}
    </div>
  );
};
