const { format, zonedTimeToUtc } = require('date-fns-tz');

exports.getCurrentDate = () => {
  const date = new Date();
  const pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
  const timezone = 'America/Recife';
  const utcDate = zonedTimeToUtc(date, timezone);
  const fDate = format(utcDate, pattern);

  return fDate;
};
