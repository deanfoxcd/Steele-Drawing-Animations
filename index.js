import Timer from './timer.js';

const durationInput = document.getElementById('duration');
const btnStart = document.getElementById('start');
const btnPause = document.getElementById('pause');
const circle = document.getElementById('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, btnStart, btnPause, {
  onStart() {
    duration = durationInput.value;
    console.log('Timer started');
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    );
    console.log('Timer ticked');
  },
  onComplete() {
    console.log('Timer is complete');
  },
});
