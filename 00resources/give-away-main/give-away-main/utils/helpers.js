const dayjs = require('dayjs')
module.exports = {
    format_date: date => {
      return dayjs(date).format('MM/DD/YYYY')
    },
    format_url: url => {
      return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')[0]
        .split('?')[0];
    },
  };
  