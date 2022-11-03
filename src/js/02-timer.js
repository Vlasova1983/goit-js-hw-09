import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let timerId = null;
let dataСhosen =null;
const today = Date.now();
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
        dataСhosen = selectedDates[0].getTime();
        if (dataСhosen < today){            
            Notiflix.Notify.info("Please choose a date in the future");
            startChangeTimeBtn.setAttribute('disabled',true);
            return;
        };
        startChangeTimeBtn.removeAttribute('disabled');
    },
};

flatpickr("#datetime-picker", options);
const startChangeTimeBtn = document.querySelector('[data-start]');
startChangeTimeBtn.setAttribute('disabled',true);

startChangeTimeBtn.addEventListener("click", () => {
    timerId = setInterval(() => { 
        const  timer = convertMs(dataСhosen-Date.now());
        timeLeft.days.textContent = timer.days;
        timeLeft.hours.textContent = timer.hours;
        timeLeft.minutes.textContent = timer.minutes;
        timeLeft.seconds.textContent = timer.seconds;
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
  
