'use script'

const countDown = document.getElementById("countdown");

const countDownDate = new Date("Jul 14, 2023 09:30:00").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();

    const difference = countDownDate - now;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countDown.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (difference < 0) {
        clearInterval(x);
        countDown.innerHTML = "Lezione iniziata!";
    }
}, 1000);