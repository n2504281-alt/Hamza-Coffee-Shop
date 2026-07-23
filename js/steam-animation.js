/* ==========================================================================
   HAMZA COFFEE SHOP — Dynamic Glowing Coffee Steam / Smoke Animation Engine
   ========================================================================== */

(function () {
  function initHeroSteamAnimation() {
    const container = document.querySelector('.hero-cup-wrapper');
    if (!container) return;

    // Create canvas inside container if not present
    let canvas = document.getElementById('heroSteamCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'heroSteamCanvas';
      container.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    });

    const particles = [];
    const maxParticles = 45;

    class SteamParticle {
      constructor() {
        this.reset();
      }

      reset() {
        // Emit near center top of cup image
        this.x = width * 0.5 + (Math.random() * 60 - 30);
        this.y = height * 0.45 + (Math.random() * 20);
        this.size = Math.random() * 18 + 10;
        this.speedY = Math.random() * 0.9 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.35 + 0.15;
        this.growRate = Math.random() * 0.12 + 0.08;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.life = 0;
        this.maxLife = Math.random() * 180 + 120;
      }

      update() {
        this.life++;
        this.y -= this.speedY;
        this.x += Math.sin(this.life * 0.03) * 0.6 + this.speedX;
        this.size += this.growRate;
        this.rotation += this.rotationSpeed;

        // Fade in then fade out
        if (this.life < 30) {
          this.alpha = (this.life / 30) * this.maxAlpha;
        } else if (this.life > this.maxLife - 40) {
          this.alpha = ((this.maxLife - this.life) / 40) * this.maxAlpha;
        }

        if (this.life >= this.maxLife || this.y < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Glowing radial gradient steam particle
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        grad.addColorStop(0, `rgba(255, 245, 230, ${this.alpha * 1.2})`);
        grad.addColorStop(0.4, `rgba(212, 168, 83, ${this.alpha * 0.6})`);
        grad.addColorStop(0.8, `rgba(200, 134, 10, ${this.alpha * 0.2})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.shadowColor = 'rgba(212, 168, 83, 0.8)';
        ctx.shadowBlur = 20;

        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize particle pool
    for (let i = 0; i < maxParticles; i++) {
      const p = new SteamParticle();
      p.life = Math.floor(Math.random() * p.maxLife); // stagger start
      particles.push(p);
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  document.addEventListener('DOMContentLoaded', initHeroSteamAnimation);
})();
