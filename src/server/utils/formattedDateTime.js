
const moment = require('moment');

exports.getFormattedTime = () => {
  const dateTime = Date.now();
  const formattedTime = moment(dateTime).utcOffset('+0100').format('DD MMM YY HH:mm a');
  return formattedTime;
}

