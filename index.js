const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
        ? 'fa fa-times'
        : 'fa fa-bars'
}


// Testimonial
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
  // Hide the current testimonial
  testimonials[currentTestimonial].classList.remove('active');
  // Move to the next testimonial (or loop back to the first)
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  // Show the next testimonial
  testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 5000);

// Head Text Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
  const headText = document.querySelector('.head-text');

  function checkScroll() {
      const rect = headText.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
          headText.classList.add('visible'); // Add the class to trigger animation
          window.removeEventListener('scroll', checkScroll); // Remove event listener once visible
        }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load in case it's already in view
});

// About Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.about-photo img');

  const showImages = () => {
      const triggerBottom = window.innerHeight / 5 * 4; // Trigger point for when to show images

      images.forEach(image => {
          const imageTop = image.getBoundingClientRect().top;

          if (imageTop < triggerBottom) {
              image.classList.add('show');
          } else {
              image.classList.remove('show'); // Optional: Remove class if scrolling back up
          }
      });
  };

  window.addEventListener('scroll', showImages);
  showImages(); // Initial check in case images are already in view
});

document.addEventListener('DOMContentLoaded', () => {
  const textElements = document.querySelectorAll('.about-h, .about-p');

  const showText = () => {
      const triggerBottom = window.innerHeight / 5 * 4; // Trigger point for when to show text

      textElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < triggerBottom) {
              element.classList.add('show');
          } else {
              element.classList.remove('show'); // Optional: Remove class if scrolling back up
          }
      });
  };

  window.addEventListener('scroll', showText);
  showText(); // Initial check in case text is already in view
});

document.addEventListener('DOMContentLoaded', () => {
  const visionElements = document.querySelectorAll('.about-h, .about-p, .about-link');

  const showVisionElements = () => {
      const triggerBottom = window.innerHeight / 5 * 4; // Trigger point for when to show elements

      visionElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < triggerBottom) {
              element.classList.add('show');
          } else {
              element.classList.remove('show'); // Optional: Remove class if scrolling back up
          }
      });
  };

  window.addEventListener('scroll', showVisionElements);
  showVisionElements(); // Initial check in case elements are already in view
});

document.addEventListener("DOMContentLoaded", function() {
  const serviceHeader = document.querySelector('.service__header');

  function checkScroll() {
      const rect = serviceHeader.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
          serviceHeader.classList.add('visible'); // Add the class to trigger animation
          window.removeEventListener('scroll', checkScroll); // Remove event listener once visible
      }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load in case it's already in view
});

// Service Scroll Animation
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.service__card');

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1 // Trigger when 10% of the card is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class
        observer.unobserve(entry.target); // Stop observing once the card is visible
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card); // Observe each card
  });
});

// HMO Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.flex-img');

  const showImages = () => {
      const windowHeight = window.innerHeight;
      images.forEach(image => {
          const imageTop = image.getBoundingClientRect().top;

          if (imageTop < windowHeight - 50) { // Trigger when image is near the viewport
              image.classList.add('visible');
          }
      });
  };

  window.addEventListener('scroll', showImages);
  showImages(); // Initial check
});

// Swiper JS
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      effect: 'slide',
      speed: 600,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      // Responsive breakpoints
      breakpoints: {
          // when window width is >= 320px
          320: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          // when window width is >= 768px
          768: {
              slidesPerView: 3,
              spaceBetween: 15
          },
          // when window width is >= 1024px
          1024: {
              slidesPerView: 5,
              spaceBetween: 10
          }
      }
  });
});