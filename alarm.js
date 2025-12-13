let alarmTime = null;
let alarmSet = false;

let audio = new Audio("alarm.mp3");
audio.loop = true;
audio.load();

// Update the live clock every second
function updateClock() {
    let now = new Date();

    // Show readable time with AM/PM
    let displayTime = now.toLocaleTimeString();
    document.getElementById("clock").innerText = displayTime;

    // Convert current time to 12-hour format with AM/PM
    let h = now.getHours();
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h === 0 ? 12 : h;  
    h = String(h).padStart(2, '0');

    let currentTime = ${h}:${m}:${s} ${ampm};

    // Compare current time with alarm time
    if (alarmSet && currentTime === alarmTime) {
        audio.play();
        document.getElementById("status").innerText = "⏰ Alarm Ringing!";
    }
}

setInterval(updateClock, 1000);

// Populate hour dropdown (1 to 12)
for (let i = 1; i <= 12; i++) {
    hour.innerHTML += <option>${String(i).padStart(2, '0')}</option>;
}

// Populate minute + second dropdowns
for (let i = 0; i < 60; i++) {
    let val = String(i).padStart(2, '0');
    minute.innerHTML += <option>${val}</option>;
    second.innerHTML += <option>${val}</option>;
}

// Set the alarm
function setAlarm() {
    let h = hour.value;
    let m = minute.value;
    let s = second.value;
    let ampm = document.getElementById("ampm").value;

    alarmTime = ${h}:${m}:${s} ${ampm};
    alarmSet = true;

    document.getElementById("status").innerText =
        Alarm set for ${alarmTime};
        let audio = new Audio("alarm.mp3");

function enableAudio() {
    audio.play();
    audio.pause();
    audio.currentTime = 0;
    console.log("Audio unlocked");
}
}