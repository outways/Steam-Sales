// *******************************************
// *                TIMER                    *
// *                 JS                      *
// *                v1.0                     *
// *******************************************


// ***************************
// * дата завершения таймера *
// ***************************
const endtime = 'Jun 23 2022, 20:00 GMT+0300';

// приводим к стандартному виду 03:04:05, вместо 3:4:5
function makeCorrectDate(uncorrectDate) {
  let correctDate = uncorrectDate;
  if (uncorrectDate < 10) {
    correctDate = '0' + uncorrectDate;
  }
  return correctDate;
}

// сколько времени осталось
function getDateRemaining(timesup) {
  // total = оставшееся вермя
  var total = Date.parse(timesup) - Date.now();
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  // вывод объектов
  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// инициализация таймера на самом сайте
function setTime(id, timesup) {
  let timer = document.getElementById(id),
    days = timer.querySelector('.days'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    // обновление таймера каждые 1000мс
    timeInterval = setInterval(update, 1000);

  function update() {
    // результат функции getDateRemaining
    let total = getDateRemaining(timesup);
    // Проверка на ноль
    var nowdate = Date.now();
    if (nowdate <= Date.parse(endtime)) {
      var nowdate = Date.now();
      days.textContent = makeCorrectDate(total.days);
    	hours.textContent = makeCorrectDate(total.hours);
    	minutes.textContent = makeCorrectDate(total.minutes);
    	seconds.textContent = makeCorrectDate(total.seconds);
    } else {
      days.textContent = 0;
      hours.textContent = 0;
      minutes.textContent = 0;
      seconds.textContent = 0;
    }
    	

    // Окончания часов
    switch (total.days) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctDays = "ДЕНЬ";
        // console.log(total.days, correctDays); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctDays = "ДНЯ";
        // console.log(total.days, correctDays); // DEBUG
        break;
      default:
        correctDays = "ДНЕЙ";
        // console.log(total.days, correctDays); // DEBUG
    }
    document.querySelector('.uncorrectDays').textContent = correctDays;

    // Окончания часов
    switch (total.hours) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctHours = "ЧАС";
        // console.log(total.hours, correctHours); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctHours = "ЧАСА";
        // console.log(total.hours, correctHours); // DEBUG
        break;
      default:
        correctHours = "ЧАСОВ";
        // console.log(total.hours, correctHours); // DEBUG
    }
    document.querySelector('.uncorrectHours').textContent = correctHours;

    // Окончания минут
    switch (total.minutes) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctMinutes = "МИНУТА";
        // console.log(total.minutes, correctMinutes); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctMinutes = "МИНУТЫ";
        // console.log(total.minutes, correctMinutes); // DEBUG
        break;
      default:
        correctMinutes = "МИНУТ";
        // console.log(total.minutes, correctMinutes); // DEBUG
    }
    document.querySelector('.uncorrectMinutes').textContent = correctMinutes;

    // Окончания секунд
    switch (total.seconds) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctSeconds = "СЕКУНДА";
        // console.log(total.seconds, correctSeconds); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctSeconds = "СЕКУНДЫ";
        // console.log(total.seconds, correctSeconds); // DEBUG
        break;
      default:
        correctSeconds = "СЕКУНД";
        // console.log(total.seconds, correctSeconds); // DEBUG
    }
    document.querySelector('.uncorrectSeconds').textContent = correctSeconds;
  }
}
setTime('timer', endtime);

// The timer has been redesigned! Look for it here
// Таймер переработан! Ищите его здесь
// https://codepen.io/mosmain/pen/LYQGdwR