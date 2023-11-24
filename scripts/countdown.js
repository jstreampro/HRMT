const elements = {
  days: document.querySelector("#countdown_days"),
  hours: document.querySelector("#countdown_hours"),
  minutes: document.querySelector("#countdown_minutes"),
  seconds: document.querySelector("#countdown_seconds"),
};

const END_TIME = new Date("2023-12-31 23:59:59").valueOf();

export function setCountdown() {
  setInterval(setCountdownNumbers, 1000);
}

function setCountdownNumbers() {
  const remainingTimeSeconds = Math.abs((END_TIME - new Date()) / 1000);
  const days = remainingTimeSeconds / (60 * 60 * 24);
  const hours = (days % 1) * 24;
  const minutes = (hours % 1) * 60;
  const seconds = (minutes % 1) * 60;

  elements.days.textContent = Math.trunc(days);
  elements.hours.textContent = Math.trunc(hours);
  elements.minutes.textContent = Math.trunc(minutes);
  elements.seconds.textContent = Math.trunc(seconds);
}
