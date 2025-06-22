/* Created by Vidya */

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function () {
  let testimonials = document.querySelectorAll('.review-slider .swiper-slide');
  let index = 0;

  if (testimonials.length > 0) {
    testimonials[0].classList.add('active'); // optional: mark first as active

    function showNextTestimonial() {
      testimonials[index].classList.remove('active');
      index = (index + 1) % testimonials.length;
      testimonials[index].classList.add('active');
    }

    setInterval(showNextTestimonial, 3000);
  }
});

// Initialize Swiper for review section
var swiper = new Swiper('.review-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  loop: false, // Don't use default looping
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Custom ping-pong autoplay logic
let direction = 'forward';

swiper.on('reachEnd', () => {
  direction = 'backward';
});

swiper.on('reachBeginning', () => {
  direction = 'forward';
});

// Reverse autoplay
setInterval(() => {
  if (direction === 'forward') {
    swiper.slideNext();
  } else {
    swiper.slidePrev();
  }
}, 3000);

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

let toggleBtn = document.querySelector('.toggle-btn');
let themeToggler = document.querySelector('.theme-toggler');

if (toggleBtn && themeToggler) {
  toggleBtn.onclick = () => {
    themeToggler.classList.toggle('active');
  };
}
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
};

document.querySelectorAll('.theme-toggler .theme-btn').forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--theme-color', color);
  };
});

var swiper = new Swiper('.home-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper('.review-slider', {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// WhatsApp contact form submission logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const number = document.getElementById('number').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Format message
    const whatsappMessage = `Hello, I'm ${name}.\n\n📍 Address: ${address}\n📞 Phone: ${number}\n✉️ Email: ${email}\n📌 Subject: ${subject}\n📝 Message: ${message}`;

    // Encode and open WhatsApp
    const phoneNumber = '971551924136';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  });
});
