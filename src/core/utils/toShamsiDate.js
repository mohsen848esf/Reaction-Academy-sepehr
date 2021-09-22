import moment from 'moment-jalaali';

const toShamsiDate = (utcDate) => {
    const shamsiDate = moment(utcDate).format('YYYY/jM/jD');
    return shamsiDate;
}

const shamsiFormater = (utcDate) => {
    const shamsiDate = moment(utcDate, 'jYYYY-jM-jD HH:mm:ss:ms').format('jYYYY/jMM/jDD');
    return shamsiDate;
}

export {
    toShamsiDate,
    shamsiFormater
}