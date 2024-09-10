document.addEventListener('DOMContentLoaded', () => {
    const fireworksButton = document.getElementById('fireworksButton');
    const background = document.getElementById('background');
    const message = document.getElementById('message');

    // Inicializar la configuración de Particles.js
    function initParticles() {
        particlesJS('background', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Mostrar fuegos artificiales y mensaje al presionar el botón
    fireworksButton.addEventListener('click', () => {
        background.style.display = 'block'; // Mostrar el fondo de partículas
        message.style.display = 'block'; // Mostrar el mensaje
        initParticles(); // Inicializar partículas
    });
});
