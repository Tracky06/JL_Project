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
const originalScrollTop = modalContent.scrollTop;

// Open the modal and play the video
function openModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');    

    localStorage.setItem("scrollPosition", originalScrollTop.toString());

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

    modalContent.scrollTop = parseInt(localStorage.getItem("scrollPosition"));

    elements.forEach((element) => {
        element.classList.remove('hidden');
    });
}

// ***********

// Functionality of residence
const slider = document.getElementById('vidSlider');
        const cards = Array.from(slider.children);
        const indicators = document.querySelectorAll('.residence__indicator');
        const modal = document.getElementById('vidModal');
        const modalVideo = document.getElementById('modalVid');
        let currentIndex = 0;

        // Update Indicators
        function updateIndicators() {
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('residence__active', index === currentIndex);
            });
        }

        // Move Slide Function
        function moveSlide() {
            const firstCard = cards.shift();
            cards.push(firstCard);

            cards.forEach((card, index) => {
               // card.className = 'residence__video-card';
               card.removeAttribute("class");
               card.setAttribute("class", "residence__video-card");
                if (index === 0) {
                    card.classList.add('index');
                } else if (index === 1) {
                    card.classList.add('second');
                } else if (index === 2) {
                    card.classList.add('third');
                }
            });

            slider.appendChild(firstCard);

            // Update Current Index and Indicators
            currentIndex = (currentIndex + 1) % cards.length;
            updateIndicators();
        }

        // Open Modal
        function enterModal(index) {
            modal.style.display = 'flex';
            modalVideo.src = cards[index].querySelector('video').src;
            modalVideo.play();
        }

        // Close Modal
        function exitModal() {
            modal.style.display = 'none';
            modalVideo.pause();
        }