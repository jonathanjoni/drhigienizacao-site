// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu mobile toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Adicionar classe active ao menu mobile no CSS
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-list.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            gap: 15px;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Animação de entrada dos elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.servico-card, .depoimento-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Função para configurar links do WhatsApp (placeholder)
function setupWhatsAppLinks() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .whatsapp-btn-large');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar o número do WhatsApp real
            const message = encodeURIComponent('Olá! Vim do site e gostaria de solicitar um orçamento para higienização de estofados.');
            const whatsappUrl = `https://wa.me/5547936183155?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });
}

// Inicializar links do WhatsApp
document.addEventListener('DOMContentLoaded', setupWhatsAppLinks);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

