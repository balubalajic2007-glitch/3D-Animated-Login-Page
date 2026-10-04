const scene = document.querySelector(".scene");
const loginCard = document.querySelector("#loginCard");
const starsContainer = document.querySelector("#stars");

const loginForm = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const showPassword = document.querySelector("#showPassword");
const forgotPassword = document.querySelector("#forgotPassword");
const toast = document.querySelector("#toast");

const socialButton = document.querySelector(".social-btn");

/* =========================
   CREATE 3D STARS
========================= */

const starCount = 180;

for (let i = 0; i < starCount; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.animationDuration =
        `${Math.random() * 8 + 4}s`;

    star.style.animationDelay =
        `${Math.random() * -10}s`;

    starsContainer.appendChild(star);
}

/* =========================
   3D MOUSE MOVEMENT
========================= */

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {

    mouseX =
        (event.clientX / window.innerWidth - 0.5);

    mouseY =
        (event.clientY / window.innerHeight - 0.5);

    const rotateX = mouseY * -8;
    const rotateY = mouseX * 8;

    scene.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;

    loginCard.style.transform = `
        translateZ(250px)
        rotateX(${rotateX * 0.35}deg)
        rotateY(${rotateY * 0.35}deg)
    `;
});

/* =========================
   PASSWORD SHOW / HIDE
========================= */

showPassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        showPassword.textContent = "●";

    } else {

        password.type = "password";

        showPassword.textContent = "◉";
    }
});

/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

/* =========================
   LOGIN
========================= */

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    if (!user || !pass) {

        showToast("Please enter your username and password.");

        return;
    }

    const button = loginForm.querySelector(".login-btn");

    button.disabled = true;

    button.querySelector("span").textContent =
        "CONNECTING...";

    showToast("Establishing secure connection...");

    setTimeout(() => {

        button.querySelector("span").textContent =
            "ACCESS GRANTED";

        showToast("Welcome to the portal!");

        setTimeout(() => {

            button.disabled = false;

            button.querySelector("span").textContent =
                "ENTER PORTAL";

        }, 1800);

    }, 1200);
});

/* =========================
   FORGOT PASSWORD
========================= */

forgotPassword.addEventListener("click", (event) => {

    event.preventDefault();

    showToast("Password recovery is a demo feature.");
});

/* =========================
   GOOGLE BUTTON
========================= */

socialButton.addEventListener("click", () => {

    showToast("Google authentication demo.");
});