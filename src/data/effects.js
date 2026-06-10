import gsap from 'gsap';

const paragraphText = "GSAP is the standard.\nBuild beautiful motion.\nPerfect for modern web.";

export const effects = [
  // ==========================================
  // ENTRANCE (10)
  // ==========================================
  {
    id: "fade-in",
    name: "Fade In",
    category: "Entrance",
    previewText: "Fade In",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">Fade In</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });
</script>`
  },
  {
    id: "scale-up",
    name: "Scale Up",
    category: "Entrance",
    previewText: "Scale Up",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
      });
    },
    code: `<!-- HTML -->
<p class="text">Scale Up</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  });
</script>`
  },
  {
    id: "rotate-in",
    name: "Rotate In",
    category: "Entrance",
    previewText: "Rotate In",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        rotation: -90,
        opacity: 0,
        transformOrigin: "left bottom",
        duration: 1,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">Rotate In</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    rotation: -90,
    opacity: 0,
    transformOrigin: "left bottom",
    duration: 1,
    ease: "power3.out"
  });
</script>`
  },
  {
    id: "slide-left",
    name: "Slide From Left",
    category: "Entrance",
    previewText: "Slide Left",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">Slide Left</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
</script>`
  },
  {
    id: "slide-right",
    name: "Slide From Right",
    category: "Entrance",
    previewText: "Slide Right",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">Slide Right</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
</script>`
  },
  {
    id: "zoom-out",
    name: "Zoom Out",
    category: "Entrance",
    previewText: "Zoom Out",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        scale: 3,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">Zoom Out</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    scale: 3,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
</script>`
  },
  {
    id: "flip-x",
    name: "Flip X",
    category: "Entrance",
    previewText: "Flip X",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        rotationX: 90,
        transformPerspective: 800,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<p class="text" style="perspective: 800px;">Flip X</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    rotationX: 90,
    transformPerspective: 800,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
</script>`
  },
  {
    id: "flip-y",
    name: "Flip Y",
    category: "Entrance",
    previewText: "Flip Y",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        rotationY: 90,
        transformPerspective: 800,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<p class="text" style="perspective: 800px;">Flip Y</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    rotationY: 90,
    transformPerspective: 800,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
</script>`
  },
  {
    id: "bounce-in",
    name: "Bounce In",
    category: "Entrance",
    previewText: "Bounce In",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: "bounce.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">Bounce In</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    y: -150,
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out"
  });
</script>`
  },
  {
    id: "skew-in",
    name: "Skew In",
    category: "Entrance",
    previewText: "Skew In",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        skewX: 30,
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">Skew In</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    skewX: 30,
    x: -120,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
</script>`
  },

  // ==========================================
  // PER-CHARACTER (15)
  // ==========================================
  {
    id: "staggered-letters",
    name: "Staggered Letters",
    category: "Per-Character",
    previewText: "Staggered",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      });
    },
    code: `<!-- HTML -->
<div class="text">Staggered</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  // Helper to split text into chars
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.05,
    ease: "power2.out"
  });
</script>`
  },
  {
    id: "wave-color-shift",
    name: "Wave Color Shift",
    category: "Per-Character",
    previewText: "Wave Color",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        y: 40,
        color: "#00FF66",
        duration: 0.8,
        stagger: 0.04,
        ease: "back.out(1.5)"
      });
    },
    code: `<!-- HTML -->
<div class="text">Wave Color</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    y: 40,
    color: "#00FF66",
    duration: 0.8,
    stagger: 0.04,
    ease: "back.out(1.5)"
  });
</script>`
  },
  {
    id: "gravity-fall",
    name: "Gravity Fall",
    category: "Per-Character",
    previewText: "Gravity Fall",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        y: -150,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.05
      });
    },
    code: `<!-- HTML -->
<div class="text">Gravity Fall</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    y: -150,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
    stagger: 0.05
  });
</script>`
  },
  {
    id: "magnetic-pull",
    name: "Magnetic Pull",
    category: "Per-Character",
    previewText: "Magnetic",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      chars.forEach((char) => {
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 300;
        const randomRot = (Math.random() - 0.5) * 180;
        gsap.from(char, {
          x: randomX,
          y: randomY,
          rotation: randomRot,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.02
        });
      });
    },
    code: `<!-- HTML -->
<div class="text">Magnetic</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  document.querySelectorAll(".char").forEach(char => {
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    const randomRot = (Math.random() - 0.5) * 180;
    gsap.from(char, {
      x: randomX,
      y: randomY,
      rotation: randomRot,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  });
</script>`
  },
  {
    id: "slot-machine",
    name: "Slot Machine",
    category: "Per-Character",
    previewText: "Slots",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        yPercent: -200,
        opacity: 0,
        rotationX: 90,
        transformPerspective: 400,
        duration: 0.8,
        stagger: 0.06,
        ease: "back.out(2)"
      });
    },
    code: `<!-- HTML -->
<div class="text" style="perspective: 400px;">Slots</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    yPercent: -200,
    opacity: 0,
    rotationX: 90,
    transformPerspective: 400,
    duration: 0.8,
    stagger: 0.06,
    ease: "back.out(2)"
  });
</script>`
  },
  {
    id: "cascade-reveal",
    name: "Cascade Reveal",
    category: "Per-Character",
    previewText: "Cascade",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        y: -60,
        rotation: -25,
        scale: 0.2,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "power4.out"
      });
    },
    code: `<!-- HTML -->
<div class="text">Cascade</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    y: -60,
    rotation: -25,
    scale: 0.2,
    opacity: 0,
    stagger: 0.04,
    duration: 0.8,
    ease: "power4.out"
  });
</script>`
  },
  {
    id: "spotlight-reveal",
    name: "Spotlight Reveal",
    category: "Per-Character",
    previewText: "Spotlight",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { opacity: 0.05, filter: "blur(8px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: {
            each: 0.05,
            from: "center"
          },
          ease: "power2.inOut"
        }
      );
    },
    code: `<!-- HTML -->
<div class="text">Spotlight</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.fromTo(".char", 
    { opacity: 0.05, filter: "blur(8px)" },
    {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      stagger: {
        each: 0.05,
        from: "center"
      },
      ease: "power2.inOut"
    }
  );
</script>`
  },
  {
    id: "domino-fall",
    name: "Domino Fall",
    category: "Per-Character",
    previewText: "Dominoes",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        rotationZ: -90,
        transformOrigin: "bottom left",
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power1.in"
      });
    },
    code: `<!-- HTML -->
<div class="text">Dominoes</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    rotationZ: -90,
    transformOrigin: "bottom left",
    opacity: 0,
    duration: 0.6,
    stagger: 0.05,
    ease: "power1.in"
  });
</script>`
  },
  {
    id: "popcorn-pop",
    name: "Popcorn Pop",
    category: "Per-Character",
    previewText: "Popcorn",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        scale: 0,
        rotation: () => (Math.random() - 0.5) * 120,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: {
          each: 0.04,
          from: "random"
        }
      });
    },
    code: `<!-- HTML -->
<div class="text">Popcorn</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    scale: 0,
    rotation: () => (Math.random() - 0.5) * 120,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(2)",
    stagger: {
      each: 0.04,
      from: "random"
    }
  });
</script>`
  },
  {
    id: "pendulum-swing",
    name: "Pendulum Swing",
    category: "Per-Character",
    previewText: "Pendulum",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        rotation: 90,
        transformOrigin: "top center",
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.05
      });
    },
    code: `<!-- HTML -->
<div class="text">Pendulum</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    rotation: 90,
    transformOrigin: "top center",
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
    stagger: 0.05
  });
</script>`
  },
  {
    id: "spiral-in",
    name: "Spiral In",
    category: "Per-Character",
    previewText: "Spiral",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      chars.forEach((char, index) => {
        const angle = index * 0.4;
        const radius = 60 + index * 4;
        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius;

        gsap.from(char, {
          x: xOffset,
          y: yOffset,
          rotation: 360,
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.03
        });
      });
    },
    code: `<!-- HTML -->
<div class="text">Spiral</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  document.querySelectorAll(".char").forEach((char, index) => {
    const angle = index * 0.4;
    const radius = 60 + index * 4;
    const xOffset = Math.cos(angle) * radius;
    const yOffset = Math.sin(angle) * radius;

    gsap.from(char, {
      x: xOffset,
      y: yOffset,
      rotation: 360,
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.out",
      delay: index * 0.03
    });
  });
</script>`
  },
  {
    id: "vertical-blinds",
    name: "Vertical Blinds",
    category: "Per-Character",
    previewText: "Blinds",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.05,
          from: "edges"
        },
        ease: "power2.out"
      });
    },
    code: `<!-- HTML -->
<div class="text">Blinds</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    scaleX: 0,
    opacity: 0,
    duration: 0.8,
    stagger: {
      each: 0.05,
      from: "edges"
    },
    ease: "power2.out"
  });
</script>`
  },
  {
    id: "pinball",
    name: "Pinball",
    category: "Per-Character",
    previewText: "Pinball",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      chars.forEach((char) => {
        const rx = (Math.random() - 0.5) * 600;
        const ry = (Math.random() - 0.5) * 400;
        gsap.from(char, {
          x: rx,
          y: ry,
          opacity: 0,
          scale: 0.1,
          duration: 1.2,
          ease: "back.out(1.2)"
        });
      });
    },
    code: `<!-- HTML -->
<div class="text">Pinball</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  document.querySelectorAll(".char").forEach(char => {
    const rx = (Math.random() - 0.5) * 600;
    const ry = (Math.random() - 0.5) * 400;
    gsap.from(char, {
      x: rx,
      y: ry,
      opacity: 0,
      scale: 0.1,
      duration: 1.2,
      ease: "back.out(1.2)"
    });
  });
</script>`
  },
  {
    id: "firework-burst",
    name: "Firework Burst",
    category: "Per-Character",
    previewText: "Burst",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        scale: 4,
        x: () => (Math.random() - 0.5) * 80,
        y: () => (Math.random() - 0.5) * 80,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.03,
          from: "center"
        },
        ease: "power4.out"
      });
    },
    code: `<!-- HTML -->
<div class="text">Burst</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    scale: 4,
    x: () => (Math.random() - 0.5) * 80,
    y: () => (Math.random() - 0.5) * 80,
    opacity: 0,
    duration: 0.8,
    stagger: {
      each: 0.03,
      from: "center"
    },
    ease: "power4.out"
  });
</script>`
  },
  {
    id: "origami-unfold",
    name: "Origami Unfold",
    category: "Per-Character",
    previewText: "Unfold",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        rotationY: -90,
        rotationX: 45,
        transformOrigin: "left center",
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out"
      });
    },
    code: `<!-- HTML -->
<div class="text" style="perspective: 600px;">Unfold</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; transform-style: preserve-3d; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.from(".char", {
    rotationY: -90,
    rotationX: 45,
    transformOrigin: "left center",
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    stagger: 0.05,
    ease: "power2.out"
  });
</script>`
  },

  // ==========================================
  // KINETIC (12)
  // ==========================================
  {
    id: "elastic-snap",
    name: "Elastic Snap",
    category: "Kinetic",
    previewText: "Elastic",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        x: -300,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.35)"
      });
    },
    code: `<!-- HTML -->
<p class="text">Elastic</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    x: -300,
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.35)"
  });
</script>`
  },
  {
    id: "rubber-band",
    name: "Rubber Band",
    category: "Kinetic",
    previewText: "Rubber Band",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.timeline()
        .to(text, { scaleX: 1.5, scaleY: 0.4, duration: 0.15, ease: "power1.out" })
        .to(text, { scaleX: 0.8, scaleY: 1.3, duration: 0.15, ease: "power1.inOut" })
        .to(text, { scaleX: 1.15, scaleY: 0.85, duration: 0.1, ease: "power1.inOut" })
        .to(text, { scaleX: 0.95, scaleY: 1.05, duration: 0.1, ease: "power1.inOut" })
        .to(text, { scaleX: 1, scaleY: 1, duration: 0.1, ease: "power1.inOut" });
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block;">Rubber Band</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.timeline()
    .to(".text", { scaleX: 1.5, scaleY: 0.4, duration: 0.15, ease: "power1.out" })
    .to(".text", { scaleX: 0.8, scaleY: 1.3, duration: 0.15, ease: "power1.inOut" })
    .to(".text", { scaleX: 1.15, scaleY: 0.85, duration: 0.1, ease: "power1.inOut" })
    .to(".text", { scaleX: 0.95, scaleY: 1.05, duration: 0.1, ease: "power1.inOut" })
    .to(".text", { scaleX: 1, scaleY: 1, duration: 0.1, ease: "power1.inOut" });
</script>`
  },
  {
    id: "spin-in",
    name: "Spin In",
    category: "Kinetic",
    previewText: "Spin In",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        rotation: 720,
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block;">Spin In</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    rotation: 720,
    scale: 0,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
</script>`
  },
  {
    id: "whip-slide",
    name: "Whip Slide",
    category: "Kinetic",
    previewText: "Whip Slide",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        x: -600,
        rotation: -20,
        skewX: 40,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.4)"
      });
    },
    code: `<!-- HTML -->
<p class="text">Whip Slide</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    x: -600,
    rotation: -20,
    skewX: 40,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.4)"
  });
</script>`
  },
  {
    id: "spring-scale",
    name: "Spring Scale",
    category: "Kinetic",
    previewText: "Spring Scale",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        scale: 0.2,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1.2, 0.4)"
      });
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block;">Spring Scale</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    scale: 0.2,
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1.2, 0.4)"
  });
</script>`
  },
  {
    id: "stretch-warp",
    name: "Stretch Warp",
    category: "Kinetic",
    previewText: "Warped",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        scaleX: 3,
        scaleY: 0.2,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)"
      });
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block;">Warped</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    scaleX: 3,
    scaleY: 0.2,
    opacity: 0,
    duration: 1.2,
    ease: "elastic.out(1, 0.3)"
  });
</script>`
  },
  {
    id: "cinema-title",
    name: "Cinema Title",
    category: "Kinetic",
    previewText: "CINEMA",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { letterSpacing: "1.5em", opacity: 0 },
        {
          letterSpacing: "0.1em",
          opacity: 1,
          duration: 2.2,
          ease: "power2.out"
        }
      );
    },
    code: `<!-- HTML -->
<p class="text">CINEMA</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { letterSpacing: "1.5em", opacity: 0 },
    {
      letterSpacing: "0.1em",
      opacity: 1,
      duration: 2.2,
      ease: "power2.out"
    }
  );
</script>`
  },
  {
    id: "rubber-stamp",
    name: "Rubber Stamp",
    category: "Kinetic",
    previewText: "APPROVED",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        scale: 5,
        rotation: -25,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          gsap.timeline()
            .to(text, { scale: 1.15, duration: 0.1, ease: "power1.out" })
            .to(text, { scale: 1, duration: 0.15, ease: "bounce.out" });
        }
      });
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block; font-weight: bold; border: 4px solid #00FF66; padding: 4px 16px; color: #00FF66;">APPROVED</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    scale: 5,
    rotation: -25,
    opacity: 0,
    duration: 0.6,
    ease: "power3.in",
    onComplete: () => {
      gsap.timeline()
        .to(".text", { scale: 1.15, duration: 0.1, ease: "power1.out" })
        .to(".text", { scale: 1, duration: 0.15, ease: "bounce.out" });
    }
  });
</script>`
  },
  {
    id: "perspective-fly",
    name: "Perspective Fly",
    category: "Kinetic",
    previewText: "Fly In",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.from(text, {
        z: -1500,
        transformPerspective: 600,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });
    },
    code: `<!-- HTML -->
<div style="perspective: 600px;">
  <p class="text">Fly In</p>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".text", {
    z: -1500,
    transformPerspective: 600,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
  });
</script>`
  },
  {
    id: "bounce-settle",
    name: "Bounce Settle",
    category: "Kinetic",
    previewText: "Bounce Settle",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.timeline()
        .from(text, { y: -150, opacity: 0, duration: 0.5, ease: "power2.in" })
        .to(text, { y: -30, duration: 0.15, ease: "power1.out" })
        .to(text, { y: 0, duration: 0.2, ease: "bounce.out" })
        .to(text, { y: -10, duration: 0.1, ease: "power1.out" })
        .to(text, { y: 0, duration: 0.15, ease: "bounce.out" });
    },
    code: `<!-- HTML -->
<p class="text">Bounce Settle</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.timeline()
    .from(".text", { y: -150, opacity: 0, duration: 0.5, ease: "power2.in" })
    .to(".text", { y: -30, duration: 0.15, ease: "power1.out" })
    .to(".text", { y: 0, duration: 0.2, ease: "bounce.out" })
    .to(".text", { y: -10, duration: 0.1, ease: "power1.out" })
    .to(".text", { y: 0, duration: 0.15, ease: "bounce.out" });
</script>`
  },
  {
    id: "earthquake",
    name: "Earthquake",
    category: "Kinetic",
    previewText: "SHAKE",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const tl = gsap.timeline();
      for (let i = 0; i < 15; i++) {
        const factor = (15 - i) / 15; // Decreasing intensity
        tl.to(text, {
          x: (Math.random() - 0.5) * 30 * factor,
          y: (Math.random() - 0.5) * 30 * factor,
          duration: 0.05,
          ease: "none"
        });
      }
      tl.to(text, { x: 0, y: 0, duration: 0.05 });
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block;">SHAKE</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const tl = gsap.timeline();
  for (let i = 0; i < 15; i++) {
    const factor = (15 - i) / 15;
    tl.to(".text", {
      x: (Math.random() - 0.5) * 30 * factor,
      y: (Math.random() - 0.5) * 30 * factor,
      duration: 0.05,
      ease: "none"
    });
  }
  tl.to(".text", { x: 0, y: 0, duration: 0.05 });
</script>`
  },
  {
    id: "heartbeat",
    name: "Heartbeat",
    category: "Kinetic",
    previewText: "Heartbeat",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.timeline()
        .to(text, { scale: 1.3, duration: 0.12, ease: "power2.out" })
        .to(text, { scale: 1.05, duration: 0.08, ease: "power1.in" })
        .to(text, { scale: 1.25, duration: 0.12, ease: "power2.out" })
        .to(text, { scale: 1, duration: 0.25, ease: "power1.in" });
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block;">Heartbeat</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.timeline()
    .to(".text", { scale: 1.3, duration: 0.12, ease: "power2.out" })
    .to(".text", { scale: 1.05, duration: 0.08, ease: "power1.in" })
    .to(".text", { scale: 1.25, duration: 0.12, ease: "power2.out" })
    .to(".text", { scale: 1, duration: 0.25, ease: "power1.in" });
</script>`
  },

  // ==========================================
  // GLITCH & DIGITAL (12)
  // ==========================================
  {
    id: "glitch-effect",
    name: "Glitch Effect",
    category: "Glitch & Digital",
    previewText: "GLITCH",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const tl = gsap.timeline();
      for (let i = 0; i < 8; i++) {
        tl.to(text, {
          x: () => (Math.random() - 0.5) * 16,
          skewX: () => (Math.random() - 0.5) * 30,
          opacity: () => Math.random() > 0.3 ? 1 : 0.4,
          color: () => Math.random() > 0.5 ? "#00FF66" : "#ffffff",
          duration: 0.06,
          ease: "none"
        });
      }
      tl.to(text, { x: 0, skewX: 0, opacity: 1, color: "#ffffff", duration: 0.05 });
    },
    code: `<!-- HTML -->
<p class="text">GLITCH</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const tl = gsap.timeline();
  for (let i = 0; i < 8; i++) {
    tl.to(".text", {
      x: () => (Math.random() - 0.5) * 16,
      skewX: () => (Math.random() - 0.5) * 30,
      opacity: () => Math.random() > 0.3 ? 1 : 0.4,
      color: () => Math.random() > 0.5 ? "#00FF66" : "#ffffff",
      duration: 0.06,
      ease: "none"
    });
  }
  tl.to(".text", { x: 0, skewX: 0, opacity: 1, color: "#ffffff", duration: 0.05 });
</script>`
  },
  {
    id: "typewriter",
    name: "Typewriter",
    category: "Glitch & Digital",
    previewText: "Typewriter Effect",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const textVal = text.textContent;
      text.textContent = "";
      gsap.to(text, {
        text: textVal,
        duration: 1.5,
        ease: "none"
      });
    },
    code: `<!-- HTML -->
<p class="text">Typewriter Effect</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
<script>
  gsap.registerPlugin(TextPlugin);
  
  // Clear and type
  const el = document.querySelector(".text");
  const textVal = el.textContent;
  el.textContent = "";
  
  gsap.to(".text", {
    text: textVal,
    duration: 1.5,
    ease: "none"
  });
</script>`
  },
  {
    id: "text-scramble",
    name: "Text Scramble",
    category: "Glitch & Digital",
    previewText: "SCRAMBLE",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const targetText = text.textContent;
      gsap.to(text, {
        duration: 1.5,
        text: {
          value: targetText,
          scrambleText: true,
          chars: "XO!#%&?10",
          speed: 0.4
        },
        ease: "power2.out"
      });
    },
    code: `<!-- HTML -->
<p class="text">SCRAMBLE</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
<script>
  gsap.registerPlugin(TextPlugin);

  gsap.to(".text", {
    duration: 1.5,
    text: {
      value: "SCRAMBLE",
      scrambleText: true,
      chars: "XO!#%&?10",
      speed: 0.4
    },
    ease: "power2.out"
  });
</script>`
  },
  {
    id: "matrix-rain",
    name: "Matrix Rain",
    category: "Glitch & Digital",
    previewText: "Matrix Rain",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { y: -80, opacity: 0, color: "#00FF66" },
        {
          y: 0,
          opacity: 1,
          color: (index) => index === chars.length - 1 ? "#ffffff" : "#00FF66",
          duration: 0.8,
          stagger: {
            each: 0.06,
            from: "random"
          },
          ease: "power1.in",
          onComplete: () => {
            gsap.to(chars, { color: "#ffffff", duration: 0.5, delay: 0.2 });
          }
        }
      );
    },
    code: `<!-- HTML -->
<div class="text">Matrix Rain</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.fromTo(".char", 
    { y: -80, opacity: 0, color: "#00FF66" },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: {
        each: 0.06,
        from: "random"
      },
      ease: "power1.in",
      onComplete: () => {
        gsap.to(".char", { color: "#ffffff", duration: 0.5, delay: 0.2 });
      }
    }
  );
</script>`
  },
  {
    id: "crt-boot",
    name: "CRT Boot",
    category: "Glitch & Digital",
    previewText: "CRT Boot",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.timeline()
        .fromTo(text, 
          { scaleY: 0, scaleX: 0, opacity: 0, filter: "brightness(3) blur(4px)" },
          { scaleY: 0.02, scaleX: 1.2, opacity: 0.8, duration: 0.2, ease: "power2.out" }
        )
        .to(text, { scaleY: 1, scaleX: 1, opacity: 1, filter: "brightness(1) blur(0px)", duration: 0.25, ease: "power4.out" })
        .fromTo(element, 
          { boxShadow: "inset 0 0 40px rgba(0,255,102,0)" },
          { boxShadow: "inset 0 0 40px rgba(0,255,102,0.1)", duration: 0.3, yoyo: true, repeat: 1 }
        );
    },
    code: `<!-- HTML -->
<p class="text" style="display: inline-block;">CRT Boot</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.timeline()
    .fromTo(".text", 
      { scaleY: 0, scaleX: 0, opacity: 0, filter: "brightness(3) blur(4px)" },
      { scaleY: 0.02, scaleX: 1.2, opacity: 0.8, duration: 0.2, ease: "power2.out" }
    )
    .to(".text", { scaleY: 1, scaleX: 1, opacity: 1, filter: "brightness(1) blur(0px)", duration: 0.25, ease: "power4.out" });
</script>`
  },
  {
    id: "binary-decode",
    name: "Binary Decode",
    category: "Glitch & Digital",
    previewText: "DECODE",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const targetText = text.textContent;
      gsap.to(text, {
        duration: 1.5,
        text: {
          value: targetText,
          scrambleText: true,
          chars: "01",
          speed: 0.5
        },
        ease: "none"
      });
    },
    code: `<!-- HTML -->
<p class="text">DECODE</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
<script>
  gsap.registerPlugin(TextPlugin);

  gsap.to(".text", {
    duration: 1.5,
    text: {
      value: "DECODE",
      scrambleText: true,
      chars: "01",
      speed: 0.5
    },
    ease: "none"
  });
</script>`
  },
  {
    id: "rgb-split",
    name: "RGB Split",
    category: "Glitch & Digital",
    previewText: "RGB SPLIT",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const originalText = text.textContent;
      
      // Setup relative containment for splits
      text.style.position = 'relative';
      text.innerHTML = `
        <span class="r-split absolute left-0 top-0 text-red-500 select-none mix-blend-screen">${originalText}</span>
        <span class="g-split absolute left-0 top-0 text-green-500 select-none mix-blend-screen">${originalText}</span>
        <span class="b-split absolute left-0 top-0 text-blue-500 select-none mix-blend-screen">${originalText}</span>
        <span class="opacity-0">${originalText}</span>
      `;
      
      const r = text.querySelector('.r-split');
      const g = text.querySelector('.g-split');
      const b = text.querySelector('.b-split');

      gsap.timeline()
        .to([r, b], { x: (i) => i === 0 ? -6 : 6, y: (i) => i === 0 ? 3 : -3, duration: 0.1, ease: "power1.inOut" })
        .to(g, { x: 3, y: -2, duration: 0.08, ease: "power1.inOut" })
        .to([r, g, b], { x: 0, y: 0, duration: 0.08, delay: 0.1, ease: "power2.out" })
        .to(r, { x: -4, duration: 0.05, yoyo: true, repeat: 1 })
        .to([r, g, b], { x: 0, y: 0, duration: 0.05, onComplete: () => {
          text.innerHTML = originalText;
          text.style.position = '';
        }});
    },
    code: `<!-- HTML -->
<p class="text">RGB SPLIT</p>

<!-- JS & CSS -->
<style>
  .text { position: relative; }
  .split-layer { position: absolute; left: 0; top: 0; mix-blend-mode: screen; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  const orig = el.textContent;
  
  el.innerHTML = \`
    <span class="r-split split-layer" style="color: red;">\${orig}</span>
    <span class="g-split split-layer" style="color: green;">\${orig}</span>
    <span class="b-split split-layer" style="color: blue;">\${orig}</span>
    <span style="opacity: 0;">\${orig}</span>
  \`;
  
  const r = el.querySelector(".r-split");
  const g = el.querySelector(".g-split");
  const b = el.querySelector(".b-split");

  gsap.timeline()
    .to([r, b], { x: (i) => i === 0 ? -6 : 6, y: (i) => i === 0 ? 3 : -3, duration: 0.1 })
    .to(g, { x: 3, y: -2, duration: 0.08 })
    .to([r, g, b], { x: 0, y: 0, duration: 0.08, delay: 0.1 })
    .to(r, { x: -4, duration: 0.05, yoyo: true, repeat: 1 })
    .to([r, g, b], { x: 0, y: 0, duration: 0.05, onComplete: () => {
      el.innerHTML = orig;
    }});
</script>`
  },
  {
    id: "neon-flicker",
    name: "Neon Flicker",
    category: "Glitch & Digital",
    previewText: "NEON",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      text.style.textShadow = "0 0 10px #00FF66, 0 0 20px #00FF66";
      
      gsap.timeline()
        .fromTo(text, { opacity: 0.1 }, { opacity: 1, duration: 0.05, repeat: 4, yoyo: true })
        .to(text, { opacity: 0.3, duration: 0.1 })
        .to(text, { opacity: 1, duration: 0.03 })
        .to(text, { opacity: 0.2, duration: 0.15 })
        .to(text, { opacity: 1, textShadow: "0 0 15px #00FF66, 0 0 30px #00FF66", duration: 0.1 });
    },
    code: `<!-- HTML -->
<p class="text">NEON</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.style.textShadow = "0 0 10px #00FF66, 0 0 20px #00FF66";
  
  gsap.timeline()
    .fromTo(".text", { opacity: 0.1 }, { opacity: 1, duration: 0.05, repeat: 4, yoyo: true })
    .to(".text", { opacity: 0.3, duration: 0.1 })
    .to(".text", { opacity: 1, duration: 0.03 })
    .to(".text", { opacity: 0.2, duration: 0.15 })
    .to(".text", { opacity: 1, textShadow: "0 0 15px #00FF66, 0 0 30px #00FF66", duration: 0.1 });
</script>`
  },
  {
    id: "vhs-tracking",
    name: "VHS Tracking",
    category: "Glitch & Digital",
    previewText: "VHS TRACKING",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.timeline()
        .to(text, { x: 20, skewX: -20, opacity: 0.7, scaleY: 1.1, duration: 0.08 })
        .to(text, { x: -20, skewX: 20, opacity: 0.5, scaleY: 0.9, duration: 0.05 })
        .to(text, { x: 0, skewX: 0, opacity: 1, scaleY: 1, duration: 0.1, delay: 0.05 })
        .to(text, { y: 10, skewY: 5, opacity: 0.6, duration: 0.06 })
        .to(text, { y: 0, skewY: 0, opacity: 1, duration: 0.08 });
    },
    code: `<!-- HTML -->
<p class="text">VHS TRACKING</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.timeline()
    .to(".text", { x: 20, skewX: -20, opacity: 0.7, scaleY: 1.1, duration: 0.08 })
    .to(".text", { x: -20, skewX: 20, opacity: 0.5, scaleY: 0.9, duration: 0.05 })
    .to(".text", { x: 0, skewX: 0, opacity: 1, scaleY: 1, duration: 0.1, delay: 0.05 })
    .to(".text", { y: 10, skewY: 5, opacity: 0.6, duration: 0.06 })
    .to(".text", { y: 0, skewY: 0, opacity: 1, duration: 0.08 });
</script>`
  },
  {
    id: "neon-sign",
    name: "Neon Sign",
    category: "Glitch & Digital",
    previewText: "Neon Sign",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      chars.forEach((char) => {
        if (Math.random() > 0.4) {
          gsap.timeline()
            .to(char, { textShadow: "0 0 10px #00FF66", color: "#00FF66", duration: 0.1, delay: Math.random() * 0.5 })
            .to(char, { textShadow: "none", color: "#666666", duration: 0.05, repeat: 3, yoyo: true, delay: Math.random() * 0.2 })
            .to(char, { textShadow: "0 0 12px #00FF66", color: "#ffffff", duration: 0.1 });
        } else {
          gsap.fromTo(char, 
            { textShadow: "none", color: "#666666" },
            { textShadow: "0 0 12px #00FF66", color: "#ffffff", duration: 0.5, delay: Math.random() * 0.8 }
          );
        }
      });
    },
    code: `<!-- HTML -->
<div class="text">Neon Sign</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; color: #666; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  document.querySelectorAll(".char").forEach(char => {
    if (Math.random() > 0.4) {
      gsap.timeline()
        .to(char, { textShadow: "0 0 10px #00FF66", color: "#00FF66", duration: 0.1, delay: Math.random() * 0.5 })
        .to(char, { textShadow: "none", color: "#666", duration: 0.05, repeat: 3, yoyo: true, delay: Math.random() * 0.2 })
        .to(char, { textShadow: "0 0 12px #00FF66", color: "#fff", duration: 0.1 });
    } else {
      gsap.fromTo(char, 
        { textShadow: "none", color: "#666" },
        { textShadow: "0 0 12px #00FF66", color: "#fff", duration: 0.5, delay: Math.random() * 0.8 }
      );
    }
  });
</script>`
  },
  {
    id: "ghost-trail",
    name: "Ghost Trail",
    category: "Glitch & Digital",
    previewText: "GHOST",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const originalText = text.textContent;
      
      text.style.position = 'relative';
      text.innerHTML = `
        <span class="ghost1 absolute left-0 top-0 select-none text-white pointer-events-none">${originalText}</span>
        <span class="ghost2 absolute left-0 top-0 select-none text-white pointer-events-none">${originalText}</span>
        <span class="main-text">${originalText}</span>
      `;
      
      const g1 = text.querySelector('.ghost1');
      const g2 = text.querySelector('.ghost2');
      const main = text.querySelector('.main-text');

      gsap.from(main, { opacity: 0, duration: 0.5 });
      
      gsap.fromTo(g1, 
        { opacity: 0.6, scale: 1, filter: "blur(0px)" },
        { x: -50, opacity: 0, scale: 1.4, filter: "blur(6px)", duration: 0.8, ease: "power2.out" }
      );
      gsap.fromTo(g2, 
        { opacity: 0.6, scale: 1, filter: "blur(0px)" },
        { x: 50, opacity: 0, scale: 1.4, filter: "blur(6px)", duration: 0.8, ease: "power2.out", delay: 0.05 }
      );
    },
    code: `<!-- HTML -->
<p class="text">GHOST</p>

<!-- JS & CSS -->
<style>
  .text { position: relative; }
  .ghost { position: absolute; left: 0; top: 0; pointer-events: none; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  const orig = el.textContent;
  el.innerHTML = \`
    <span class="ghost ghost1">\${orig}</span>
    <span class="ghost ghost2">\${orig}</span>
    <span class="main-text">\${orig}</span>
  \`;

  gsap.from(".main-text", { opacity: 0, duration: 0.5 });
  
  gsap.fromTo(".ghost1", 
    { opacity: 0.6, scale: 1, filter: "blur(0px)" },
    { x: -50, opacity: 0, scale: 1.4, filter: "blur(6px)", duration: 0.8, ease: "power2.out" }
  );
  gsap.fromTo(".ghost2", 
    { opacity: 0.6, scale: 1, filter: "blur(0px)" },
    { x: 50, opacity: 0, scale: 1.4, filter: "blur(6px)", duration: 0.8, ease: "power2.out", delay: 0.05 }
  );
</script>`
  },
  {
    id: "morphing-counter",
    name: "Morphing Counter",
    category: "Glitch & Digital",
    previewText: "0000",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 9999,
        duration: 2,
        ease: "power3.out",
        onUpdate: () => {
          text.textContent = String(Math.floor(obj.val)).padStart(4, '0');
        }
      });
    },
    code: `<!-- HTML -->
<p class="text">0000</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  const obj = { val: 0 };
  gsap.to(obj, {
    val: 9999,
    duration: 2,
    ease: "power3.out",
    onUpdate: () => {
      el.textContent = String(Math.floor(obj.val)).padStart(4, '0');
    }
  });
</script>`
  },

  // ==========================================
  // CREATIVE (14)
  // ==========================================
  {
    id: "wavy-baseline",
    name: "Wavy Baseline",
    category: "Creative",
    previewText: "Wavy Baseline",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { y: 0 },
        {
          y: -15,
          duration: 0.5,
          stagger: {
            each: 0.04,
            repeat: -1,
            yoyo: true
          },
          ease: "sine.inOut"
        }
      );
    },
    code: `<!-- HTML -->
<div class="text">Wavy Baseline</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.fromTo(".char", 
    { y: 0 },
    {
      y: -15,
      duration: 0.5,
      stagger: {
        each: 0.04,
        repeat: -1,
        yoyo: true
      },
      ease: "sine.inOut"
    }
  );
</script>`
  },
  {
    id: "ink-bleed",
    name: "Ink Bleed",
    category: "Creative",
    previewText: "Ink Bleed",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { filter: "blur(20px)", opacity: 0, scale: 0.9 },
        { filter: "blur(0px)", opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );
    },
    code: `<!-- HTML -->
<p class="text">Ink Bleed</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { filter: "blur(20px)", opacity: 0, scale: 0.9 },
    { filter: "blur(0px)", opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
  );
</script>`
  },
  {
    id: "reveal-wipe",
    name: "Reveal Wipe",
    category: "Creative",
    previewText: "Reveal Wipe",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.inOut" }
      );
    },
    code: `<!-- HTML -->
<p class="text">Reveal Wipe</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { clipPath: "inset(0 100% 0 0)" },
    { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.inOut" }
  );
</script>`
  },
  {
    id: "shadow-pulse",
    name: "Shadow Pulse",
    category: "Creative",
    previewText: "SHADOWS",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text,
        { textShadow: "0 0 0px rgba(0,255,102,0)" },
        {
          textShadow: "0 0 25px rgba(0,255,102,0.9), 0 0 50px rgba(0,255,102,0.4)",
          color: "#00FF66",
          duration: 0.8,
          repeat: 3,
          yoyo: true,
          ease: "sine.inOut"
        }
      );
    },
    code: `<!-- HTML -->
<p class="text">SHADOWS</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text",
    { textShadow: "0 0 0px rgba(0,255,102,0)" },
    {
      textShadow: "0 0 25px rgba(0,255,102,0.9), 0 0 50px rgba(0,255,102,0.4)",
      color: "#00FF66",
      duration: 0.8,
      repeat: 3,
      yoyo: true,
      ease: "sine.inOut"
    }
  );
</script>`
  },
  {
    id: "smoke-rise",
    name: "Smoke Rise",
    category: "Creative",
    previewText: "Fading Smoke",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { y: 40, opacity: 0, filter: "blur(12px) brightness(3)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px) brightness(1)",
          duration: 1.2,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    },
    code: `<!-- HTML -->
<div class="text">Fading Smoke</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.fromTo(".char", 
    { y: 40, opacity: 0, filter: "blur(12px) brightness(3)" },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px) brightness(1)",
      duration: 1.2,
      stagger: 0.05,
      ease: "power2.out"
    }
  );
</script>`
  },
  {
    id: "parallax-text",
    name: "Parallax Text",
    category: "Creative",
    previewText: "PARALLAX",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const original = text.textContent;
      text.style.position = 'relative';
      text.innerHTML = `
        <span class="para-bg absolute left-0 top-0 select-none text-white/10" style="transform: translate3d(0, -20px, 0); font-size: 1.3em;">${original}</span>
        <span class="para-mid absolute left-0 top-0 select-none text-white/30" style="transform: translate3d(0, -10px, 0);">${original}</span>
        <span class="para-fg relative text-brand-green font-bold">${original}</span>
      `;
      const bg = text.querySelector('.para-bg');
      const mid = text.querySelector('.para-mid');
      const fg = text.querySelector('.para-fg');

      gsap.timeline()
        .from([bg, mid, fg], { opacity: 0, duration: 0.3 })
        .fromTo(bg, { y: -40 }, { y: 20, duration: 1.5, ease: "power1.out" }, 0)
        .fromTo(mid, { y: -20 }, { y: 10, duration: 1.5, ease: "power1.out" }, 0)
        .fromTo(fg, { y: 0 }, { y: 0, duration: 1.5, ease: "power1.out" }, 0);
    },
    code: `<!-- HTML -->
<p class="text">PARALLAX</p>

<!-- JS & CSS -->
<style>
  .text { position: relative; }
  .layer { position: absolute; left: 0; top: 0; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  const orig = el.textContent;
  el.innerHTML = \`
    <span class="layer bg-layer" style="color: rgba(255,255,255,0.1); transform: scale(1.2);">\${orig}</span>
    <span class="layer mid-layer" style="color: rgba(255,255,255,0.3); transform: scale(1.1);">\${orig}</span>
    <span class="fg-layer" style="color: #00FF66; font-weight: bold;">\${orig}</span>
  \`;

  gsap.timeline()
    .fromTo(".bg-layer", { y: -40 }, { y: 20, duration: 1.5, ease: "power1.out" }, 0)
    .fromTo(".mid-layer", { y: -20 }, { y: 10, duration: 1.5, ease: "power1.out" }, 0);
</script>`
  },
  {
    id: "ripple-wave",
    name: "Ripple Wave",
    category: "Creative",
    previewText: "Ripple Wave",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { y: 0 },
        {
          y: -25,
          scale: 1.2,
          color: "#00FF66",
          duration: 0.8,
          stagger: {
            each: 0.05,
            grid: "auto",
            from: "center"
          },
          ease: "elastic.out(1, 0.4)"
        }
      );
    },
    code: `<!-- HTML -->
<div class="text">Ripple Wave</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.fromTo(".char", 
    { y: 0 },
    {
      y: -25,
      scale: 1.2,
      color: "#00FF66",
      duration: 0.8,
      stagger: {
        each: 0.05,
        from: "center"
      },
      ease: "elastic.out(1, 0.4)"
    }
  );
</script>`
  },
  {
    id: "cross-fade",
    name: "Cross Fade",
    category: "Creative",
    previewText: "Cross Faded",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { opacity: 0, scale: 0.95, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }
      );
    },
    code: `<!-- HTML -->
<p class="text">Cross Faded</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { opacity: 0, scale: 0.95, filter: "blur(8px)" },
    { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" }
  );
</script>`
  },
  {
    id: "blur-in",
    name: "Blur In",
    category: "Creative",
    previewText: "Blur In Effect",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { opacity: 0, filter: "blur(18px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power3.out" }
      );
    },
    code: `<!-- HTML -->
<p class="text">Blur In Effect</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { opacity: 0, filter: "blur(18px)", y: 20 },
    { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power3.out" }
  );
</script>`
  },
  {
    id: "unfold-3d",
    name: "Unfold 3D",
    category: "Creative",
    previewText: "3D UNFOLD",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { rotationY: -90, rotationX: 45, scale: 0.5, opacity: 0, transformPerspective: 800 },
        { rotationY: 0, rotationX: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    },
    code: `<!-- HTML -->
<div style="perspective: 800px;">
  <p class="text" style="display: inline-block;">3D UNFOLD</p>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { rotationY: -90, rotationX: 45, scale: 0.5, opacity: 0, transformPerspective: 800 },
    { rotationY: 0, rotationX: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
  );
</script>`
  },
  {
    id: "drop-shatter",
    name: "Drop & Shatter",
    category: "Creative",
    previewText: "Shatter",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      const tl = gsap.timeline();
      tl.from(chars, { y: -100, opacity: 0, duration: 0.4, ease: "power2.in", stagger: 0.02 })
        .to(chars, {
          x: () => (Math.random() - 0.5) * 100,
          y: () => Math.random() * 80 + 30,
          rotation: () => (Math.random() - 0.5) * 90,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.3,
          stagger: 0.02
        });
    },
    code: `<!-- HTML -->
<div class="text">Shatter</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  const tl = gsap.timeline();
  tl.from(".char", { y: -100, opacity: 0, duration: 0.4, ease: "power2.in", stagger: 0.02 })
    .to(".char", {
      x: () => (Math.random() - 0.5) * 100,
      y: () => Math.random() * 80 + 30,
      rotation: () => (Math.random() - 0.5) * 90,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3,
      stagger: 0.02
    });
</script>`
  },
  {
    id: "liquid-fill",
    name: "Liquid Fill",
    category: "Creative",
    previewText: "LIQUID FILL",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { clipPath: "inset(100% 0 0 0)", color: "#00FF66" },
        { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "power1.inOut" }
      );
    },
    code: `<!-- HTML -->
<p class="text">LIQUID FILL</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { clipPath: "inset(100% 0 0 0)", color: "#00FF66" },
    { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "power1.inOut" }
  );
</script>`
  },
  {
    id: "curtain-reveal",
    name: "Curtain Reveal",
    category: "Creative",
    previewText: "CURTAIN",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.fromTo(text, 
        { clipPath: "inset(0 50% 0 50%)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power3.out" }
      );
    },
    code: `<!-- HTML -->
<p class="text">CURTAIN</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".text", 
    { clipPath: "inset(0 50% 0 50%)" },
    { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power3.out" }
  );
</script>`
  },
  {
    id: "stencil-fill",
    name: "Stencil Fill",
    category: "Creative",
    previewText: "STENCIL",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      text.style.webkitTextStroke = "1px #00FF66";
      text.style.color = "transparent";
      
      gsap.to(text, {
        color: "#00FF66",
        webkitTextStroke: "1px transparent",
        duration: 1.2,
        ease: "power2.inOut"
      });
    },
    code: `<!-- HTML -->
<p class="text">STENCIL</p>

<!-- JS & CSS -->
<style>
  .text {
    font-weight: bold;
    -webkit-text-stroke: 1px #00FF66;
    color: transparent;
  }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.to(".text", {
    color: "#00FF66",
    webkitTextStroke: "1px transparent",
    duration: 1.2,
    ease: "power2.inOut"
  });
</script>`
  },

  // ==========================================
  // PARAGRAPH (14)
  // ==========================================
  {
    id: "line-by-line",
    name: "Line-by-Line Reveal",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      gsap.from(lines, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    },
    code: `<!-- HTML -->
<div class="paragraph">
  <div class="line">First line of paragraph.</div>
  <div class="line">Second line of paragraph.</div>
  <div class="line">Third line of paragraph.</div>
</div>

<!-- JS & CSS -->
<style>
  .line { overflow: hidden; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".line", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });
</script>`
  },
  {
    id: "word-by-word",
    name: "Word-by-Word Build",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "words",
    animate: (element) => {
      const words = element.querySelectorAll('.word');
      gsap.from(words, {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
      });
    },
    code: `<!-- HTML -->
<p class="paragraph">This is a paragraph built word by word.</p>

<!-- JS & CSS -->
<style>
  .word { display: inline-block; margin-right: 0.25em; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".paragraph");
  el.innerHTML = el.textContent.split(" ").map(w => \`<span class="word">\${w}</span>\`).join(" ");

  gsap.from(".word", {
    y: 15,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "power2.out"
  });
</script>`
  },
  {
    id: "scroll-highlight",
    name: "Scroll Highlight",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "words",
    animate: (element) => {
      const words = element.querySelectorAll('.word');
      gsap.fromTo(words, 
        { color: "#333333" },
        {
          color: "#ffffff",
          duration: 0.4,
          stagger: 0.05,
          ease: "none"
        }
      );
    },
    code: `<!-- HTML -->
<p class="paragraph">Scroll down to highlight the words.</p>

<!-- JS & CSS -->
<style>
  .word { display: inline-block; margin-right: 0.25em; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  const el = document.querySelector(".paragraph");
  el.innerHTML = el.textContent.split(" ").map(w => \`<span class="word" style="color: #333;">\${w}</span>\`).join(" ");

  gsap.to(".word", {
    color: "#fff",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".paragraph",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true
    }
  });
</script>`
  },
  {
    id: "redacted-reveal",
    name: "Redacted Reveal",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "words",
    animate: (element) => {
      const words = element.querySelectorAll('.word');
      words.forEach((word) => {
        word.style.backgroundColor = '#00FF66';
        word.style.color = '#00FF66';
      });
      gsap.to(words, {
        backgroundColor: 'transparent',
        color: '#ffffff',
        duration: 0.4,
        stagger: 0.06,
        ease: "power1.inOut"
      });
    },
    code: `<!-- HTML -->
<p class="paragraph">This is highly classified redacted text.</p>

<!-- JS & CSS -->
<style>
  .word {
    display: inline-block;
    background-color: #00FF66;
    color: #00FF66;
    margin-right: 0.25em;
  }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".paragraph");
  el.innerHTML = el.textContent.split(" ").map(w => \`<span class="word">\${w}</span>\`).join(" ");

  gsap.to(".word", {
    backgroundColor: "transparent",
    color: "#fff",
    duration: 0.4,
    stagger: 0.06,
    ease: "power1.inOut",
    delay: 0.5
  });
</script>`
  },
  {
    id: "focus-pull",
    name: "Focus Pull",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      gsap.timeline()
        .fromTo(lines, 
          { filter: "blur(8px)", opacity: 0.3 },
          {
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.6,
            stagger: 0.3,
            ease: "power2.inOut"
          }
        );
    },
    code: `<!-- HTML -->
<div class="paragraph">
  <div class="line">First line of text.</div>
  <div class="line">Second line of text.</div>
  <div class="line">Third line of text.</div>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".line", 
    { filter: "blur(8px)", opacity: 0.3 },
    {
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.6,
      stagger: 0.3,
      ease: "power2.inOut"
    }
  );
</script>`
  },
  {
    id: "typewriter-paragraph",
    name: "Typewriter Paragraph",
    category: "Paragraph",
    previewText: "This is a full typewriter paragraph. It animates everything in one continuous reveal, character by character.",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      const textVal = text.textContent;
      text.textContent = "";
      gsap.to(text, {
        text: textVal,
        duration: 3,
        ease: "none"
      });
    },
    code: `<!-- HTML -->
<p class="text">This is a full typewriter paragraph animation.</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
<script>
  gsap.registerPlugin(TextPlugin);

  const el = document.querySelector(".text");
  const orig = el.textContent;
  el.textContent = "";
  
  gsap.to(".text", {
    text: orig,
    duration: 3,
    ease: "none"
  });
</script>`
  },
  {
    id: "color-wash",
    name: "Color Wash",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "words",
    animate: (element) => {
      const words = element.querySelectorAll('.word');
      gsap.timeline()
        .to(words, {
          color: "#00FF66",
          duration: 0.3,
          stagger: 0.05,
          ease: "power1.out"
        })
        .to(words, {
          color: "#ffffff",
          duration: 0.3,
          stagger: 0.05,
          ease: "power1.in"
        }, 0.3);
    },
    code: `<!-- HTML -->
<p class="paragraph">A wave of vibrant color washes through the words.</p>

<!-- JS & CSS -->
<style>
  .word { display: inline-block; margin-right: 0.25em; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".paragraph");
  el.innerHTML = el.textContent.split(" ").map(w => \`<span class="word">\${w}</span>\`).join(" ");

  gsap.timeline()
    .to(".word", {
      color: "#00FF66",
      duration: 0.3,
      stagger: 0.05
    })
    .to(".word", {
      color: "#fff",
      duration: 0.3,
      stagger: 0.05
    }, 0.3);
</script>`
  },
  {
    id: "scramble-decode",
    name: "Scramble Decode",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      lines.forEach((line) => {
        const orig = line.textContent;
        gsap.to(line, {
          duration: 1.5,
          text: {
            value: orig,
            scrambleText: true,
            chars: "█▓▒░",
            speed: 0.3
          },
          ease: "power1.out"
        });
      });
    },
    code: `<!-- HTML -->
<div class="paragraph">
  <div class="line">First scramble line.</div>
  <div class="line">Second scramble line.</div>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
<script>
  gsap.registerPlugin(TextPlugin);

  document.querySelectorAll(".line").forEach(line => {
    const orig = line.textContent;
    gsap.to(line, {
      duration: 1.5,
      text: {
        value: orig,
        scrambleText: true,
        chars: "█▓▒░",
        speed: 0.3
      }
    });
  });
</script>`
  },
  {
    id: "gravity-stack",
    name: "Gravity Stack",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      gsap.from(lines, {
        y: -150,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "bounce.out"
      });
    },
    code: `<!-- HTML -->
<div class="paragraph">
  <div class="line">First stacked item.</div>
  <div class="line">Second stacked item.</div>
  <div class="line">Third stacked item.</div>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".line", {
    y: -150,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "bounce.out"
  });
</script>`
  },
  {
    id: "sentence-cascade",
    name: "Sentence Cascade",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      lines.forEach((line, index) => {
        gsap.from(line, {
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.15
        });
      });
    },
    code: `<!-- HTML -->
<div class="paragraph">
  <div class="line">This slides from left.</div>
  <div class="line">This slides from right.</div>
  <div class="line">This slides from left.</div>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  document.querySelectorAll(".line").forEach((line, index) => {
    gsap.from(line, {
      x: index % 2 === 0 ? -200 : 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: index * 0.15
    });
  });
</script>`
  },
  {
    id: "paragraph-unfurl",
    name: "Paragraph Unfurl",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      gsap.from(lines, {
        height: 0,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.inOut"
      });
    },
    code: `<!-- HTML -->
<div class="paragraph">
  <div class="line">Unfurling paragraphs</div>
  <div class="line">gradually expand in height</div>
  <div class="line">for a smooth reveal.</div>
</div>

<!-- JS & CSS -->
<style>
  .line { overflow: hidden; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.from(".line", {
    height: 0,
    opacity: 0,
    duration: 1.2,
    stagger: 0.25,
    ease: "power3.inOut"
  });
</script>`
  },
  {
    id: "ink-drop-spread",
    name: "Ink Drop Spread",
    category: "Paragraph",
    previewText: paragraphText,
    splitType: "words",
    animate: (element) => {
      const words = element.querySelectorAll('.word');
      gsap.fromTo(words, 
        { scale: 0, filter: "blur(10px)", opacity: 0 },
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.8,
          stagger: {
            each: 0.05,
            from: "center"
          },
          ease: "power2.out"
        }
      );
    },
    code: `<!-- HTML -->
<p class="paragraph">Words spread outwards like ink drops.</p>

<!-- JS & CSS -->
<style>
  .word { display: inline-block; margin-right: 0.25em; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".paragraph");
  el.innerHTML = el.textContent.split(" ").map(w => \`<span class="word">\${w}</span>\`).join(" ");

  gsap.fromTo(".word", 
    { scale: 0, filter: "blur(10px)", opacity: 0 },
    {
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.8,
      stagger: {
        each: 0.05,
        from: "center"
      },
      ease: "power2.out"
    }
  );
</script>`
  },
  {
    id: "film-credits",
    name: "Film Credits",
    category: "Paragraph",
    previewText: "DIRECTOR\nAntigravity\n\nPRODUCER\nGoogle DeepMind",
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      gsap.fromTo(lines, 
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "power2.out"
        }
      );
    },
    code: `<!-- HTML -->
<div class="paragraph">
  <div class="line">STARRING</div>
  <div class="line">GSAP Text Engine</div>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  gsap.fromTo(".line", 
    { y: 150, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: "power2.out"
    }
  );
</script>`
  },
  {
    id: "typewriter-delete",
    name: "Typewriter Delete",
    category: "Paragraph",
    previewText: "Fast.",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      gsap.timeline()
        .to(text, { text: "Create dynamic animations.", duration: 1.2 })
        .to(text, { text: "", duration: 0.8, delay: 0.5 })
        .to(text, { text: "Fast.", duration: 0.6 });
    },
    code: `<!-- HTML -->
<p class="text">Fast.</p>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"></script>
<script>
  gsap.registerPlugin(TextPlugin);

  gsap.timeline()
    .to(".text", { text: "Create dynamic animations.", duration: 1.2 })
    .to(".text", { text: "", duration: 0.8, delay: 0.5 })
    .to(".text", { text: "Fast.", duration: 0.6 });
</script>`
  },

  // ==========================================
  // SCROLL (8) (Simulated Scroll Effects)
  // ==========================================
  {
    id: "scroll-scrub",
    name: "Scroll Scrub",
    category: "Scroll",
    previewText: "Scrubbed Title",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      
      // Render simulated scrollbar inside container dynamically
      const bar = document.createElement('div');
      bar.className = 'simulated-scroll-bar w-full bg-neutral-800 h-1 rounded overflow-hidden mt-6 relative';
      bar.innerHTML = '<div class="progress-indicator bg-brand-green h-full w-0"></div>';
      element.appendChild(bar);

      const progress = bar.querySelector('.progress-indicator');

      gsap.timeline()
        .fromTo(text, { x: -150, opacity: 0.2 }, { x: 50, opacity: 1, duration: 2, ease: "none" })
        .fromTo(progress, { width: "0%" }, { width: "100%", duration: 2, ease: "none" }, 0);
    },
    code: `<!-- HTML -->
<div class="scroll-container">
  <p class="text">Scrubbed Title</p>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".text", 
    { x: -150, opacity: 0.2 },
    {
      x: 50,
      opacity: 1,
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );
</script>`
  },
  {
    id: "scroll-counter",
    name: "Scroll Counter",
    category: "Scroll",
    previewText: "0",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      
      // Render simulated scrollbar
      const bar = document.createElement('div');
      bar.className = 'simulated-scroll-bar w-full bg-neutral-800 h-1 rounded overflow-hidden mt-6 relative';
      bar.innerHTML = '<div class="progress-indicator bg-brand-green h-full w-0"></div>';
      element.appendChild(bar);

      const progress = bar.querySelector('.progress-indicator');
      const obj = { val: 0 };

      gsap.timeline()
        .to(obj, {
          val: 100,
          duration: 2,
          ease: "none",
          onUpdate: () => {
            text.textContent = Math.floor(obj.val) + "%";
          }
        })
        .fromTo(progress, { width: "0%" }, { width: "100%", duration: 2, ease: "none" }, 0);
    },
    code: `<!-- HTML -->
<div class="scroll-container">
  <p class="counter">0%</p>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  const obj = { val: 0 };
  gsap.to(obj, {
    val: 100,
    scrollTrigger: {
      trigger: ".scroll-container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true
    },
    onUpdate: () => {
      document.querySelector(".counter").textContent = Math.floor(obj.val) + "%";
    }
  });
</script>`
  },
  {
    id: "parallax-lines",
    name: "Parallax Lines",
    category: "Scroll",
    previewText: "Line One\nLine Two",
    splitType: "lines",
    animate: (element) => {
      const lines = element.querySelectorAll('.line');
      
      const bar = document.createElement('div');
      bar.className = 'simulated-scroll-bar w-full bg-neutral-800 h-1 rounded overflow-hidden mt-6 relative';
      bar.innerHTML = '<div class="progress-indicator bg-brand-green h-full w-0"></div>';
      element.appendChild(bar);

      const progress = bar.querySelector('.progress-indicator');

      gsap.timeline()
        .fromTo(lines[0], { y: -20 }, { y: 20, duration: 2, ease: "none" }, 0)
        .fromTo(lines[1], { y: 20 }, { y: -20, duration: 2, ease: "none" }, 0)
        .fromTo(progress, { width: "0%" }, { width: "100%", duration: 2, ease: "none" }, 0);
    },
    code: `<!-- HTML -->
<div class="scroll-container">
  <div class="line line-fast">Speedy Line</div>
  <div class="line line-slow">Slower Line</div>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".line-fast", 
    { y: -30 },
    {
      y: 30,
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      }
    }
  );

  gsap.fromTo(".line-slow", 
    { y: 30 },
    {
      y: -30,
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    }
  );
</script>`
  },
  {
    id: "progress-underline",
    name: "Progress Underline",
    category: "Scroll",
    previewText: "Underlined Title",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      
      // Setup relative line container
      text.style.position = 'relative';
      text.style.display = 'inline-block';
      
      const line = document.createElement('div');
      line.className = 'underline-line bg-brand-green h-1 absolute left-0 bottom-0 w-0';
      text.appendChild(line);

      const bar = document.createElement('div');
      bar.className = 'simulated-scroll-bar w-full bg-neutral-800 h-1 rounded overflow-hidden mt-6 relative';
      bar.innerHTML = '<div class="progress-indicator bg-brand-green h-full w-0"></div>';
      element.appendChild(bar);

      const progress = bar.querySelector('.progress-indicator');

      gsap.timeline()
        .fromTo(line, { width: "0%" }, { width: "100%", duration: 2, ease: "none" })
        .fromTo(progress, { width: "0%" }, { width: "100%", duration: 2, ease: "none" }, 0);
    },
    code: `<!-- HTML -->
<div class="scroll-container">
  <p class="text">Underlined Title</p>
</div>

<!-- JS & CSS -->
<style>
  .text {
    position: relative;
    display: inline-block;
  }
  .underline-effect {
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 3px;
    background-color: #00FF66;
    width: 0;
  }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  // Add line element
  const el = document.querySelector(".text");
  const line = document.createElement("div");
  line.className = "underline-effect";
  el.appendChild(line);

  gsap.to(line, {
    width: "100%",
    scrollTrigger: {
      trigger: ".scroll-container",
      start: "top 70%",
      end: "bottom 30%",
      scrub: true
    }
  });
</script>`
  },
  {
    id: "word-shuffle",
    name: "Word Shuffle",
    category: "Scroll",
    previewText: "Shuffle These Words",
    splitType: "words",
    animate: (element) => {
      const words = element.querySelectorAll('.word');
      
      const bar = document.createElement('div');
      bar.className = 'simulated-scroll-bar w-full bg-neutral-800 h-1 rounded overflow-hidden mt-6 relative';
      bar.innerHTML = '<div class="progress-indicator bg-brand-green h-full w-0"></div>';
      element.appendChild(bar);

      const progress = bar.querySelector('.progress-indicator');

      const tl = gsap.timeline();
      words.forEach((word) => {
        tl.from(word, {
          x: () => (Math.random() - 0.5) * 150,
          y: () => (Math.random() - 0.5) * 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out"
        }, 0);
      });
      tl.fromTo(progress, { width: "0%" }, { width: "100%", duration: 2, ease: "none" }, 0);
    },
    code: `<!-- HTML -->
<div class="scroll-container">
  <p class="paragraph">Shuffle These Words</p>
</div>

<!-- JS & CSS -->
<style>
  .word { display: inline-block; margin-right: 0.25em; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  const el = document.querySelector(".paragraph");
  el.innerHTML = el.textContent.split(" ").map(w => \`<span class="word">\${w}</span>\`).join(" ");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-container",
      start: "top bottom",
      end: "bottom center",
      scrub: true
    }
  });

  document.querySelectorAll(".word").forEach(word => {
    tl.from(word, {
      x: () => (Math.random() - 0.5) * 150,
      y: () => (Math.random() - 0.5) * 100,
      opacity: 0,
      ease: "power3.out"
    }, 0);
  });
</script>`
  },
  {
    id: "fade-up-words",
    name: "Fade Up Words",
    category: "Scroll",
    previewText: "Fade Up Words",
    splitType: "words",
    animate: (element) => {
      const words = element.querySelectorAll('.word');
      
      const bar = document.createElement('div');
      bar.className = 'simulated-scroll-bar w-full bg-neutral-800 h-1 rounded overflow-hidden mt-6 relative';
      bar.innerHTML = '<div class="progress-indicator bg-brand-green h-full w-0"></div>';
      element.appendChild(bar);

      const progress = bar.querySelector('.progress-indicator');

      gsap.timeline()
        .from(words, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out"
        })
        .fromTo(progress, { width: "0%" }, { width: "100%", duration: 2, ease: "none" }, 0);
    },
    code: `<!-- HTML -->
<div class="scroll-container">
  <p class="paragraph">Fade Up Words</p>
</div>

<!-- JS & CSS -->
<style>
  .word { display: inline-block; margin-right: 0.25em; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  const el = document.querySelector(".paragraph");
  el.innerHTML = el.textContent.split(" ").map(w => \`<span class="word">\${w}</span>\`).join(" ");

  gsap.from(".word", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".scroll-container",
      start: "top 80%",
      end: "bottom 40%",
      scrub: true
    }
  });
</script>`
  },
  {
    id: "slide-up-reveal",
    name: "Slide Up Reveal",
    category: "Scroll",
    previewText: "Reveal Slide Up",
    splitType: "none",
    animate: (element) => {
      const text = element.querySelector('.text');
      
      const bar = document.createElement('div');
      bar.className = 'simulated-scroll-bar w-full bg-neutral-800 h-1 rounded overflow-hidden mt-6 relative';
      bar.innerHTML = '<div class="progress-indicator bg-brand-green h-full w-0"></div>';
      element.appendChild(bar);

      const progress = bar.querySelector('.progress-indicator');

      gsap.timeline()
        .fromTo(text, { yPercent: 100 }, { yPercent: 0, duration: 1.5, ease: "power3.out" })
        .fromTo(progress, { width: "0%" }, { width: "100%", duration: 2, ease: "none" }, 0);
    },
    code: `<!-- HTML -->
<div class="scroll-container" style="overflow: hidden; height: 50px;">
  <p class="text" style="margin: 0; line-height: 50px;">Reveal Slide Up</p>
</div>

<!-- JS & CSS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(".text", 
    { yPercent: 100 },
    {
      yPercent: 0,
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 90%",
        end: "bottom 30%",
        scrub: true
      }
    }
  );
</script>`
  },
  {
    id: "wavy-baseline-loop",
    name: "Wavy Baseline Loop",
    category: "Scroll",
    previewText: "Continuous Wave Loop",
    splitType: "chars",
    animate: (element) => {
      const chars = element.querySelectorAll('.char');
      
      // Animated sine wave offset
      gsap.fromTo(chars, 
        { y: 0 },
        {
          y: -15,
          duration: 0.6,
          stagger: {
            each: 0.05,
            repeat: -1,
            yoyo: true
          },
          ease: "sine.inOut"
        }
      );
    },
    code: `<!-- HTML -->
<div class="text">Continuous Wave Loop</div>

<!-- JS & CSS -->
<style>
  .char { display: inline-block; }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  const el = document.querySelector(".text");
  el.innerHTML = el.textContent.split("").map(c => \`<span class="char">\${c === " " ? "&nbsp;" : c}</span>\`).join("");

  gsap.fromTo(".char", 
    { y: 0 },
    {
      y: -15,
      duration: 0.6,
      stagger: {
        each: 0.05,
        repeat: -1,
        yoyo: true
      },
      ease: "sine.inOut"
    }
  );
</script>`
  }
];
