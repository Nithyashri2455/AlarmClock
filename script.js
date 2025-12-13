let alarmTime = null;
let alarmSet = false;

// USE CORRECT MP3 NAME
let audio = new Audio("sound.mp3");
audio.loop = true;

// Enable audio (browser requirement)
function enableAudio() {
    audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
    }).catch(() => {
        console.log("Audio blocked until user interaction");
    });
}

// Update clock every second
function updateClock() {
    let now = new Date();

    document.getElementById("clock").innerText =
        now.toLocaleTimeString("en-US");

    let h = now.getHours();
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h === 0 ? 12 : h;
    h = String(h).padStart(2, "0");

    let currentTime = `${h}:${m}:${s} ${ampm}`;

    if (alarmSet && currentTime === alarmTime) {
        audio.play();
        document.getElementById("status").innerText =
            "⏰ Alarm Ringing!";
    }
}

setInterval(updateClock, 1000);

// Dropdown elements
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

// Populate hour (01–12)
for (let i = 1; i <= 12; i++) {
    hour.innerHTML += `<option>${String(i).padStart(2, "0")}</option>`;
}

// Populate minute & second (00–59)
for (let i = 0; i < 60; i++) {
    let val = String(i).padStart(2, "0");
    minute.innerHTML += `<option>${val}</option>`;
    second.innerHTML += `<option>${val}</option>`;
}

// Set alarm
function setAlarm() {
    enableAudio(); // 🔑 REQUIRED

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
