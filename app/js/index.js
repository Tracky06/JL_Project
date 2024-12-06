// Set focus to Landing page
document.getElementById('focusmeplease').focus();

// Nav menu functionality
const hamMenu = document.querySelector(".header__menu");

const navBar = document.querySelector(".header__nav-bar");

const logo = document.querySelector(".header__logo");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navBar.classList.toggle("active");
  logo.classList.toggle("active");
});

// ********************************

// Play video in modal window functionality
const elements = document.querySelectorAll('.background-content');
const modalContent = document.getElementById("videoModal");
let savedScrollPosition = 0;

// Open the modal and play the video
function openModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    savedScrollPosition = window.scrollY;

    modal.style.display = 'flex'; // Show the modal
    video.play(); // Start the video

    elements.forEach((element) => {
        element.classList.add('hidden');
    });
}

// Close the modal and stop the video
function closeModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    video.pause(); // Pause the video
    modal.style.display = 'none'; // Hide the modal

    window.scrollTo(0, savedScrollPosition);

    elements.forEach((element) => {
        element.classList.remove('hidden');
    });
}

// ***********

// Video carousel functionality
document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".residence__parent");
    const cards = document.querySelectorAll(".residence__card");
    const indicators = document.querySelectorAll(".residence__indicator");
    const navigationArrow = document.querySelector(".residence__nav-arrow");
    const videoModal = document.querySelector(".residence__video-modal");
    const videoElement = videoModal.querySelector("video");
    const videoModalClose = videoModal.querySelector(".residence__video-modal-close");
    const playButtons = document.querySelectorAll(".residence__play-button");
    let currentIndex = 0;
    let originalScrollPosition = 0;

    function updateCarousel(newIndex) {
      // Remove all position classes
      cards.forEach((card) => {
        card.classList.remove("card-active", "card-previous", "card-next");
      });
      indicators.forEach((indicator) => {
        indicator.classList.remove("active-indicator");
      });

      // Determine new indices with circular rotation
      const activeIndex = newIndex;
      const previousIndex = (newIndex - 1 + cards.length) % cards.length;
      const nextIndex = (newIndex + 1) % cards.length;

      // Add appropriate classes
      cards[activeIndex].classList.add("card-active");
      cards[previousIndex].classList.add("card-previous");
      cards[nextIndex].classList.add("card-next");

      // Update indicators
      indicators[activeIndex].classList.add("active-indicator");

      currentIndex = activeIndex;
    }

    // Navigation Arrow
    navigationArrow.addEventListener("click", () => {
      const nextIndex = (currentIndex + 1) % cards.length;
      updateCarousel(nextIndex);
    });

    // Indicator Navigation
    indicators.forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        updateCarousel(index);
      });
    });

    function openModal(videoSrc) {
        originalScrollPosition = window.scrollY;
        videoElement.src = videoSrc;
        console.log(videoElement);
        videoModal.classList.add("show");
        videoElement.play();
        console.log("Video is playing");
      }

      function closeModal(i) {
        videoElement.pause();
        console.log("video paused");
        videoModal.classList.remove("show");
        window.scrollTo(0, originalScrollPosition);
      }

    // Play Button Functionality
    playButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const videoSrc = cards[index].dataset.video; 
        openModal(videoSrc);
      });
    });

    // Close Modal
    videoModalClose.addEventListener("click", (currentIndex) => {
        closeModal(currentIndex);
    });

    // Scroll and Keyboard Navigation
    carouselContainer.addEventListener("wheel", (e) => {
      if (
        carouselContainer === document.activeElement ||
        carouselContainer.matches(":hover")
      ) {
        e.preventDefault();
        const direction = Math.sign(e.deltaY);
        const nextIndex =
          (currentIndex + direction + cards.length) % cards.length;
        updateCarousel(nextIndex);
      }
    });

    carouselContainer.addEventListener("keydown", (e) => {
      if (
        (carouselContainer === document.activeElement ||
          carouselContainer.matches(":hover")) &&
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % cards.length;
        updateCarousel(nextIndex);
      }
    });

    // Make container focusable
    carouselContainer.setAttribute("tabindex", "0");

    // Initial setup
    updateCarousel(currentIndex);
  });


  // Image carousel on About Us page 
  document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.about-favourite__img-container');
    var slides = container.querySelectorAll('.about-favourite__img');
    
    var currentIndex = 0;
    slides[currentIndex].classList.add('active-image');

    function nextSlide() {
        // Remove active class from current slide
        slides[currentIndex].classList.remove('active-image');

        // Move to next slide
        currentIndex = (currentIndex + 1) % slides.length;

        // Add active class to next slide
        slides[currentIndex].classList.add('active-image');
    }

    // Start automatic sliding
    setInterval(nextSlide, 3000);
});