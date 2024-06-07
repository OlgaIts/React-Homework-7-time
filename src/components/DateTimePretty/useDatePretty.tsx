import moment from "moment";
moment.locale("ru");

export function useDatePretty(date: Date) {
  const momentDate = moment(date).fromNow();

  return momentDate;
}
// helper