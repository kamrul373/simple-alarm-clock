let sound = new Audio("audio.mp3");
sound.loop = true;
class getCurrentTime {
    currentTime = setInterval(() => {

        const date = new Date();
        // get hours
        let hours = date.getHours();
        hours = hours > 12 ? 12 - hours : hours
        if (hours < 0) {
            hours = hours * -1;
        } else if (hours === 0) {
            hours = 12
        } else {
            hours = hours
        }
        const miniutes = date.getMinutes();
        const seconds = date.getSeconds();

        const ampm = hours > 12 ? "PM" : "AM";
        document.getElementById("current-time").textContent = this.currentTime = this.addZero(hours) + ":" + this.addZero(miniutes) + ":" + this.addZero(seconds) + " " + ampm

    }, 1000);

    addZero(number) {
        if (number < 10) {
            return number = "0" + number;
        }
        return number
    }
}

const alarmMenu = (limit, id) => {

    let select = document.getElementById(`${id}`);

    for (i = 1; i <= limit; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}
const time = new getCurrentTime();
let alarmTime = "";
// rendering select options
const hoursMenu = alarmMenu(12, "hours")
const minutesMenu = alarmMenu(59, "minutes")
const secondsMenu = alarmMenu(59, "seconds")

const handleAlarm = () => {
    // hours
    let hours = document.getElementById("hours").value;
    hours = hours < 10 ? "0" + hours : hours;
    // minutes
    let minutes = document.getElementById("minutes").value;
    minutes = minutes < 10 ? "0" + minutes : minutes

    // seconds 
    let seconds = document.getElementById("seconds").value;
    seconds = seconds < 10 ? "0" + seconds : seconds

    const ampm = document.getElementById("ampm").value;
    alarmTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

    // container 
    const container = document.getElementById("schedule")
    const h2 = document.createElement("h2");
    h2.classList.add("alarmSchedule")
    h2.textContent = alarmTime;

    container.append(h2);

}


const alarming = () => {
    setInterval(() => {
        if (time.currentTime == alarmTime) {
            sound.play();
            document.getElementById("snozer").removeAttribute("disabled");
        }
    }, 1000)
}

alarming();

const snoze = () => {
    sound.pause()
    let currenttime = time.currentTime;
    let currentMinute = currenttime.slice(3, 5);

    currentMinute = parseInt(currentMinute) + 5;

    alarmTime = currenttime.slice(0, 3) + currentMinute + currenttime.slice(5, currenttime.length)

    document.getElementById("snozer").setAttribute("disabled", true);

}









