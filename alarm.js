let alarmTime = null;
let alarmSet = false;

let audio = new Audio("alarm.mp3");
audio.loop = true;
audio.load();

// Update the live clock every second
function updateClock() {
    let now = new Date();

    // Display live time
    document.getElementById("clock").innerText =
        now.toLocaleTimeString();

    // Convert current time to 12-hour format
    let h = now.getHours();
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h === 0 ? 12 : h;
    h = String(h).padStart(2, '0');

    let currentTime = `${h}:${m}:${s} ${ampm}`;

    // Check alarm
    if (alarmSet && currentTime === alarmTime) {
        audio.play();
        document.getElementById("status").innerText =
            "⏰ Alarm Ringing!";
    }
}

setInterval(updateClock, 1000);

// Get dropdown elements
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

// Populate hour dropdown (1–12)
for (let i = 1; i <= 12; i++) {
    hour.innerHTML +=
        `<option>${String(i).padStart(2, '0')}</option>`;
}

// Populate minute & second dropdowns (0–59)
for (let i = 0; i < 60; i++) {
    let val = String(i).padStart(2, '0');
    minute.innerHTML += `<option>${val}</option>`;
    second.innerHTML += `<option>${val}</option>`;
}

// Set alarm
function setAlarm() {
    let h = hour.value;
    let m = minute.value;
    let s = second.value;
    let ampm = document.getElementById("ampm").value;

    alarmTime = `${h}:${m}:${s} ${ampm}`;
    alarmSet = true;

    document.getElementById("status").innerText =
        `Alarm set for ${alarmTime}`;
}

// Stop alarm
function stopAlarm() {
    audio.pause();
    audio.currentTime = 0;
    alarmSet = false;
    document.getElementById("status").innerText =
        "Alarm stopped";
}

// Enable audio (user interaction required)
function enableAudio() {
    audio.play();
    audio.pause();
    audio.currentTime = 0;
    console.log("Audio unlocked");
}
