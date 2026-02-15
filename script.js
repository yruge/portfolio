
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


    // --- PART 2: SCROLL OBSERVER (For Middle Column) ---
    const images = document.querySelectorAll('.project-image');
    const titleEl = document.getElementById('project-title');
    const descEl = document.getElementById('project-desc');
    const stackEl = document.getElementById('project-stack');
    const textContainer = document.querySelector('.sticky-text-container');

    // Make text visible immediately
    textContainer.style.opacity = 1;

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -20% 0px", // Trigger when image is near center of screen
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Highlight the Image
                images.forEach(img => img.classList.remove('active'));
                entry.target.classList.add('active');

                // 2. Update the Text (Middle Col)
                // We do a quick fade-out/fade-in for smoothness
                textContainer.style.opacity = 0;

                setTimeout(() => {
                    titleEl.textContent = entry.target.getAttribute('data-title');
                    descEl.innerHTML = entry.target.getAttribute('data-desc');
                    stackEl.textContent = entry.target.getAttribute('data-stack');
                    textContainer.style.opacity = 1;
                }, 200);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    images.forEach(image => observer.observe(image));
});


console.log(
    "%c Looking for a dev? %c Let's talk: jason.then@binus.ac.id ",
    "background: #000; color: #fff; padding: 5px; border-radius: 3px; font-weight: bold;",
    "background: transparent; color: #000; padding: 5px;"
);
