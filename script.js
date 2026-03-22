
gsap.registerPlugin(ScrollTrigger);

gsap.from(".col-left", {
    x: -50,          // Starts 50px to the left
    opacity: 0,      // Starts invisible
    duration: 1.2,   // Takes 1.2 seconds
    ease: "power3.out" // Smooth deceleration
});

const resumeBtn = document.querySelector('.resume-btn');
const arrow = document.querySelector('.btn-arrow');
const progressBar = document.querySelector('.progress-bar');
const btnText = document.querySelector('.btn-text');

// 1. Hover Effect: Smoothly bounce the arrow
let hoverAnim = gsap.to(arrow, {
    y: 4,
    repeat: -1,
    yoyo: true,
    duration: 0.3,
    paused: true,
    ease: "power1.inOut"
});

resumeBtn.addEventListener("mouseenter", () => hoverAnim.play());
resumeBtn.addEventListener("mouseleave", () => {
    hoverAnim.pause();
    gsap.to(arrow, { y: 0, duration: 0.2 }); // Reset arrow position seamlessly
});

// 2. Click Effect: The "Downloading" Sequence
resumeBtn.addEventListener("click", () => {
    // Note: The file will still download natively because of the HTML 'download' attribute

    gsap.to(progressBar, {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        onStart: () => {
            btnText.innerText = "Downloading...";
            arrow.style.opacity = "0"; // Hide arrow during download
        },
        onComplete: () => {
            btnText.innerText = "Downloaded ✓";

            // Fade out the bar and reset everything after 2 seconds
            gsap.to(progressBar, { opacity: 0, duration: 0.5, delay: 1 });
            setTimeout(() => {
                btnText.innerText = "Download CV";
                arrow.style.opacity = "1";
                gsap.set(progressBar, { width: "0%", opacity: 1 });
            }, 2500);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // --- PART 1: TYPEWRITER EFFECT ---
    const textElement = document.getElementById('typewriter');
    const phrases = [
        "FULL-STACK DEVELOPER",
        "Co-Founder",
        "UI/UX ARCHITECT",
        "BINUSIAN 2027",
        "SOLUTIONS BUILDER"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    type();

},

    console.log(
        "%c Looking for a dev? %c Let's talk: jasonjthen.dev@gmail.com",
        "background: #000; color: #fff; padding: 5px; border-radius: 3px; font-weight: bold;",
        "background: transparent; color: #000; padding: 5px;"
    ))
