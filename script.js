// Canvas Setup
const auroraCanvas = document.getElementById('aurora-canvas');
const auroraCtx = auroraCanvas.getContext('2d');
const particlesCanvas = document.getElementById('particles-canvas');
const particlesCtx = particlesCanvas.getContext('2d');

auroraCanvas.width = window.innerWidth;
auroraCanvas.height = window.innerHeight;
particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;

// Aurora Waves Configuration
const waves = [];
for (let i = 0; i < 5; i++) {
    waves.push({
        y: Math.random() * auroraCanvas.height * 0.6,
        length: auroraCanvas.width,
        amplitude: 50 + Math.random() * 50,
        frequency: 0.01 + Math.random() * 0.01,
        speed: 0.001 + Math.random() * 0.002,
        phase: Math.random() * Math.PI * 2,
        color: `hsla(${160 + Math.random() * 60}, 80%, 60%, 0.15)`
    });
}

// Draw Aurora Animation
function drawAurora() {
    auroraCtx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    auroraCtx.fillRect(0, 0, auroraCanvas.width, auroraCanvas.height);

    waves.forEach(wave => {
        auroraCtx.beginPath();
        auroraCtx.strokeStyle = wave.color;
        auroraCtx.lineWidth = 80;
        auroraCtx.filter = 'blur(40px)';

        for (let x = 0; x < wave.length; x += 5) {
            const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
            if (x === 0) {
                auroraCtx.moveTo(x, y);
            } else {
                auroraCtx.lineTo(x, y);
            }
        }

        auroraCtx.stroke();
        wave.phase += wave.speed;
    });
}

// Particles (Stars) Configuration
const particles = [];
for (let i = 0; i < 150; i++) {
    particles.push({
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random()
    });
}

// Draw Particles Animation
function drawParticles() {
    particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

    particles.forEach(p => {
        particlesCtx.beginPath();
        particlesCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        particlesCtx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        particlesCtx.fill();

        // Update particle position
        p.x += p.vx;
        p.y += p.vy;
        
        // Update opacity for twinkling effect
        p.opacity += (Math.random() - 0.5) * 0.02;
        p.opacity = Math.max(0.2, Math.min(1, p.opacity));

        // Bounce particles off edges
        if (p.x < 0 || p.x > particlesCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > particlesCanvas.height) p.vy *= -1;
    });
}

// Main Animation Loop
function animate() {
    drawAurora();
    drawParticles();
    requestAnimationFrame(animate);
}

animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    auroraCanvas.width = window.innerWidth;
    auroraCanvas.height = window.innerHeight;
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
});

// Countdown Timer Logic
let targetDate = new Date('2026-01-01T00:00:00').getTime();

// Set Custom Countdown Date
function setCountdown() {
    const input = document.getElementById('eventDate').value;
    if (input) {
        targetDate = new Date(input).getTime();
        updateCountdown();
    }
}

// Update Countdown Display
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Check if countdown has finished
    if (distance < 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('celebration').style.display = 'block';
        return;
    }

    // Show countdown, hide celebration
    document.getElementById('countdown').style.display = 'flex';
    document.getElementById('celebration').style.display = 'none';

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM elements
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Start countdown interval
setInterval(updateCountdown, 1000);
updateCountdown();

// Set default date to New Year 2026
const defaultDate = new Date('2026-01-01T00:00:00');
const dateInput = document.getElementById('eventDate');
dateInput.value = defaultDate.toISOString().slice(0, 16);