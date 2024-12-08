document.addEventListener('scroll', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (const reveal of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 5;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('visible');
    } else {
      reveal.classList.remove('visible');
    }
  }
});


document.addEventListener("DOMContentLoaded", function() {
    const phoneElement = document.getElementById("phone");
    const tabElement = document.getElementById("tab");

    const revealOptions = {
        threshold: 0.1 // Adjust this value based on when you want the animation to start
    };

    const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("reveal");
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealOnScroll.observe(phoneElement);
    revealOnScroll.observe(tabElement);
});

