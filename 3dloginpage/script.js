/* =========================================
   CREATE PARTICLES
========================================= */

const particles =
    document.getElementById("particles");


const PARTICLE_COUNT = 100;


for (
    let i = 0;
    i < PARTICLE_COUNT;
    i++
) {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    particle.style.left =
        `${Math.random() * 100}%`;


    particle.style.setProperty(
        "--moveX",
        `${(Math.random() - 0.5) * 300}px`
    );


    particle.style.setProperty(
        "--duration",
        `${5 + Math.random() * 10}s`
    );


    particle.style.animationDelay =
        `${Math.random() * -10}s`;


    const size =
        1 + Math.random() * 2;


    particle.style.width =
        `${size}px`;


    particle.style.height =
        `${size}px`;


    particles.appendChild(
        particle
    );

}


/* =========================================
   MOUSE 3D EFFECT
========================================= */

const heroContent =
    document.querySelector(
        ".hero-content"
    );


const planet =
    document.querySelector(
        ".planet"
    );


window.addEventListener(
    "mousemove",
    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;


        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        /* Hero movement */

        if (heroContent) {

            heroContent.style.transform = `
                translate3d(
                    ${x * 20}px,
                    ${y * 15}px,
                    40px
                )
                rotateY(${x * 8}deg)
                rotateX(${-y * 5}deg)
            `;

        }


        /* Planet movement */

        if (planet) {

            planet.style.transform = `
                translateY(${y * -20}px)
                rotateY(${x * 40}deg)
                rotateX(${-y * 15}deg)
            `;

        }


        /* Project cards */

        document
            .querySelectorAll(
                ".project-card"
            )
            .forEach(
                (card, index) => {

                    const factor =
                        index % 2 === 0
                            ? 5
                            : -5;


                    card.style.transform = `
                        perspective(700px)
                        rotateY(${x * factor}deg)
                        rotateX(${-y * factor}deg)
                    `;

                }
            );

    }
);


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(
        ".counter"
    );


function animateCounter(counter) {

    const target =
        Number(
            counter.dataset.target
        );


    let current = 0;


    const increment =
        Math.max(
            1,
            Math.ceil(target / 70)
        );


    const timer =
        setInterval(() => {

            current += increment;


            if (
                current >= target
            ) {

                current = target;

                clearInterval(timer);

            }


            counter.textContent =
                current.toLocaleString();


        }, 25);

}


/* =========================================
   INTERSECTION OBSERVER
========================================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting &&
                        !entry.target.dataset.animated
                    ) {

                        entry.target.dataset.animated =
                            "true";


                        animateCounter(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.5
        }
    );


counters.forEach(
    (counter) => {

        observer.observe(
            counter
        );

    }
);


/* =========================================
   TOAST
========================================= */

const toast =
    document.getElementById(
        "dashboardToast"
    );


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);

}


/* =========================================
   EXPLORE BUTTON
========================================= */

document
    .getElementById(
        "exploreButton"
    )
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "analytics"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================
   STATUS BUTTON
========================================= */

document
    .getElementById(
        "statusButton"
    )
    .addEventListener(
        "click",
        () => {

            showToast(
                "ALL SYSTEMS OPERATIONAL"
            );

        }
    );


/* =========================================
   LOGOUT
========================================= */

document
    .getElementById(
        "logoutButton"
    )
    .addEventListener(
        "click",
        () => {

            showToast(
                "DISCONNECTING..."
            );


            setTimeout(() => {

                window.location.href =
                    "index.html";

            }, 1000);

        }
    );


/* =========================================
   PROJECT BUTTONS
========================================= */

document
    .querySelectorAll(
        ".project-card button"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    showToast(
                        "MODULE READY"
                    );

                }
            );

        }
    );