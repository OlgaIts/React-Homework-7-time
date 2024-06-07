import {ComponentType} from "react";
import moment from "moment";
import "moment/locale/ru";

interface DateProps {
  date: string;
}

moment.locale("ru");

export const withDateTimePretty = (Component: ComponentType<DateProps>) => {
  return ({date}: DateProps) => {
    const momentDate = moment(date).fromNow();
    return <Component date={momentDate} />;
  };
};
