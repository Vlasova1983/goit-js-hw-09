import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startChangeTimeBtn = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const timeLeft = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {      
      day3 = selectedDates[0].getTime();
      console.log(day3);
    },
  };
let timerId = null;
let day3 =null;
const day1 = Date.now();
console.log(day1);




flatpickr("#datetime-picker", options);

startChangeTimeBtn.addEventListener("click", () => {
    timerId = setInterval(() => { 
        const day2 = Date.now();
        console.log(day2);
        const  day= convertMs(day3-day2);
        timeLeft.days.textContent = day.days;
        timeLeft.hours.textContent = day.hours;
        timeLeft.minutes.textContent = day.minutes;
        timeLeft.seconds.textContent = day.seconds;
    }, 1000);
});
  
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}
  
