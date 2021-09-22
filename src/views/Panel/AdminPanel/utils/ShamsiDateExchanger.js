import moment from 'moment-jalaali';

const adminShamsiFormater = (utcDate) => {
  const shamsiDate = moment(utcDate).format('jYYYY/jMM/jDD');
  return shamsiDate;
}

export {
  adminShamsiFormater
}
