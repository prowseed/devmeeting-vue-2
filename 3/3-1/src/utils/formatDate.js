import moment from 'moment';

export default function formatDate(date, format) {
  return moment(date).format(format);
}
