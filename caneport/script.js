// Typing effect animation matching reference
const roles = ["HIMUI Specialist", "Frontend Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextSpan = document.getElementById("typed-text");

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) setTimeout(typeEffect, 500);
});

// Copy details to clipboard helper
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast("Copied to clipboard!");
    });
}

// Handle "Message Me" Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    showToast(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contact-form").reset();
}

// Toast notification display
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}