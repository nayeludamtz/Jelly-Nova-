// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu on link click
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Intersection Observer for slide-in/fade-in animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            // Unobserve to only animate once
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// WhatsApp Link Generator dynamically updates on button click
function generateWhatsAppLink() {
    const anticipacion = document.getElementById('anticipacion').value;
    const pago = document.getElementById('pago').value;
    const entrega = document.getElementById('entrega').value;
    
    if (!anticipacion || !pago || !entrega) {
        // Simple elegant alert fallback could be done with a custom modal, 
        // but default alert serves purpose quickly
        alert("Por favor, selecciona las opciones de tu pedido en el formulario.");
        return;
    }
    
    const phoneNumber = "521234567890"; // WhatsApp recipient phone number placeholder
    const message = `¡Hola! Me gustaría hacer un pedido de gelatinas.%0A%0A*Detalles de mi solicitud:*%0A- 🕒 Tiempo de anticipación: ${anticipacion}%0A- 💳 Forma de pago: ${pago}%0A- 📦 Forma de entrega: ${entrega}%0A%0A¡Muchas gracias!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
