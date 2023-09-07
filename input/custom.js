function scrollToSection(sectionId) {
  const section = document.querySelector(`[data-section-id="${sectionId}"]`);

  if (section) {
    const targetOffsetTop = section.getBoundingClientRect().top;
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const finalScrollPosition = currentScrollPosition + targetOffsetTop;

    // Function for smooth scrolling animation
    function smoothScrollTo(to, duration) {
      const start = currentScrollPosition;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;

      function animateScroll() {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      }

      animateScroll();
    }

    // Easing function for smooth animation
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    smoothScrollTo(finalScrollPosition, 800); // Adjust the duration (in ms) to your preference
  }
}
var stickyComponent = document.getElementById("sticky-component");

// Get the offset position of the sticky component
var stickyOffset = stickyComponent.offsetTop;

// Function to add or remove the "sticky" class to the sticky component
function toggleSticky() {
  if (window.pageYOffset >= stickyOffset) {
    stickyComponent.classList.add("sticky-tab");
  } else {
    stickyComponent.classList.remove("sticky-tab");
  }
}
// Add event listeners to toggle the "sticky" class when scrolling or resizing the window
window.addEventListener("scroll", toggleSticky);
window.addEventListener("resize", toggleSticky);
