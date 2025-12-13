let alarmTime = null;
let alarmSet = false;

// Create audio once (global)
let audio = new Audio("alarm.mp3");
audio.loop = true;

// Unlock audio on user click (IMPORTANT)
function enableAudio() {
    audio.play();
    audio.pause();
    audio.currentTime = 0;
    console.log("Audio unlocked");
}

// Update the live clock every second
function updateClock() {
    let now = new Date();

    // Show live clock with AM/PM
    document.getElementById("clock").innerText =
        now.toLocaleTimeString("en-US");

    // Convert current time to 12-hour format
    let h = now.getHours();
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h === 0 ? 12 : h;
    h = String(h).padStart(2, "0");

    let currentTime = `${h}:${m}:${s} ${ampm}`;

    // Check alarm
    if (alarmSet && currentTime === alarmTime) {
        audio.play();
        document.getElementById("status").innerText = "⏰ Alarm Ringing!";
    }
}

setInterval(updateClock, 1000);

// Populate hour dropdown (01–12)
for (let i = 0; i <= 12; i++) {
    hour.innerHTML += `<option>${String(i).padStart(2, "0")}</option>`;
}

// Populate minute & second dropdowns (00–59)
for (let i = 0; i < 60; i++) {
    let val = String(i).padStart(2, "0");
    minute.innerHTML += `<option>${val}</option>`;
    second.innerHTML += `<option>${val}</option>`;
}

// Set alarm
function setAlarm() {
    enableAudio(); // 🔑 unlock audio on button click

    let h = hour.value;
    let m = minute.value;
    let s = second.value;
    let ampm = document.getElementById("ampm").value;

    alarmTime = `${h}:${m}:${s} ${ampm}`;
    alarmSet = true;

    document.getElementById("status").innerText =
        `Alarm set for ${alarmTime}`;
}

