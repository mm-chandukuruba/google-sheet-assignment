document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box", {
        scrollTrigger: {
            trigger: ".box",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        },
         // x: "100vw", // Moves the box horizontally to the right
        y: "100vh", // Moves the box vertically to the bottom
        width: "200px",
        height: "200px",
        duration: 3 // Duration of the animation
    });
});