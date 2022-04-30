import moment from "moment";

export const parseDate = (input: string): moment.Moment => {
  const [day, month, year] = input.split(".");
  return moment(new Date(Number(year), Number(month) - 1, Number(day)));
};

export const formatMoment = (arg: moment.Moment): string => {
  return arg.format("MMM Do YY");
};

export const formatDate = (date: string): string => {
  return formatMoment(moment(date));
};
