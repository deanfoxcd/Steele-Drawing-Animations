export default class Timer {
  constructor(durationInput, btnStart, btnPause, callbacks) {
    this.durationInput = durationInput;
    this.btnStart = btnStart;
    this.btnPause = btnPause;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.btnStart.addEventListener('click', this.start);
    this.btnPause.addEventListener('click', this.pause);

    // this.btnStart.addEventListener('click', this.start.bind(this));
    // This is the way I've learnt to solve the 'this' problem but an arrow function is apparently the more modern way as done below
  }

  // Arrow function passses off the this keyword to the instance (constructor)
  start = () => {
    if (this.onStart) this.onStart();
    this.tick();
    this.interval = setInterval(this.tick, 20);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      if (this.onComplete) this.onComplete();
      this.pause();
    } else {
      this.timeDuration = this.timeRemaining - 0.02;
      if (this.onTick) this.onTick(this.timeRemaining);
      console.log(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeDuration(time) {
    this.durationInput.value = time.toFixed(2);
  }

  onDurationChange() {}
}
