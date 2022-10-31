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
      console.log(selectedDates[0]);
    },
  };
let timerId = null;
let currentTime={
    data:options.defaultDate.getDate(),
    hours:options.defaultDate.getHours(),
    minutes:options.defaultDate.getMinutes(),
    seconds:options.defaultDate.getSeconds()
};
console.log(currentTime);
console.log(options.defaultDate);


flatpickr("#datetime-picker", options);

startChangeTimeBtn.addEventListener("click", () => {

    //  timerId = setInterval(() => {
        console.log(options.selectedDates.getDate())
        const data = convertMs(options.defaultDate);
         console.log(options.selectedDates[0].getDate())
        // timeLeft.days.textContent = data.days;
        // timeLeft.hours.textContent = data.hours;
        // timeLeft.minutes.textContent = data.minutes;
        // timeLeft.seconds.textContent = data.seconds;
    //  }, 1000);
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
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}