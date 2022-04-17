import moment from "moment";

export const parseDate = (input: string): moment.Moment => {
  const [day, month, year] = input.split(".");
  console.log({ input, day, month, year });
  return moment(new Date(Number(year), Number(month) - 1, Number(day)));
};

export const formatDate = (date: Date): string => {
  return moment(date).format("MMM Do YY");
};
