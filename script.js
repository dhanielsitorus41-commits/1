// =========================
// OPEN GIFT
// =========================

function openGift() {
    window.location.href = "pages/dashboard.html";
}

function openEnvelope() {

    localStorage.setItem(
        "musicStarted",
        "true"
    );

    const envelope =
        document.querySelector(
            ".envelope"
        );

    if (envelope) {
        envelope.classList.add(
            "open"
        );
    }

    setTimeout(() => {

        window.location.href =
            "pages/dashboard.html";

    }, 1500);

}

// =========================
// COUNTDOWN
// =========================

const startDate =
    new Date("2025-06-17");

function updateCountdown() {

    const now =
        new Date();

    const diff =
        now - startDate;

    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (diff / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (diff / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (diff / 1000) % 60
        );

    const countdown =
        document.getElementById(
            "countdown"
        );

    if (countdown) {

        countdown.innerHTML =

            `
❤️ ${days} Hari

🕒 ${hours} Jam

⏰ ${minutes} Menit

💖 ${seconds} Detik
`;

    }

}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

// =========================
// HEART EFFECT
// =========================

function createHeart() {

    const container =
        document.querySelector(
            ".hearts-container"
        );

    if (!container) return;

    const heart =
        document.createElement(
            "div"
        );

    heart.classList.add(
        "heart-fall"
    );

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 +
        "vw";

    heart.style.fontSize =
        Math.random() * 20 +
        15 +
        "px";

    container.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(
    createHeart,
    1000
);

// =========================
// BACKGROUND MUSIC
// =========================

window.addEventListener(
    "load",
    () => {

        const bgMusic =
            document.getElementById(
                "bgMusic"
            );

        if (!bgMusic) return;

        const savedTime =
            localStorage.getItem(
                "musicTime"
            );

        if (savedTime) {

            bgMusic.currentTime =
                parseFloat(
                    savedTime
                );

        }

        bgMusic.addEventListener(
            "timeupdate",
            () => {

                localStorage.setItem(
                    "musicTime",
                    bgMusic.currentTime
                );

            }
        );

    }
);