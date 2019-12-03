const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const getTime = (time = null) => {
  if(!time) time = new Date();

  const minute = time.getMinutes();
  return {
    year: time.getFullYear(),
    day: DAYS[time.getDay()],
    date: time.getDate(),
    month: MONTHS[time.getMonth()],
    hour: time.getHours(),
    minute: minute < 10 ? `0${minute}` : minute
  };
};

export const timeInterval = 60 * 1000;