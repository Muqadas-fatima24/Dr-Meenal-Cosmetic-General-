
document.addEventListener("DOMContentLoaded", function() {
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.querySelector('.navbar-brand');
const body = document.body;
const navbarCollapse = document.querySelector('.navbar-collapse'); 

// Function to handle the navbar toggle logic
const toggleNavbar = () => {
  body.classList.toggle('body-nav');
  navbarBrand.classList.toggle('d-none');
  navbarToggler.classList.toggle('is-active');
  navbarCollapse.classList.toggle('show'); // Toggle the 'show' class
};

// Add a click event listener to the navbar toggler
navbarToggler.addEventListener('click', toggleNavbar);

// Optional: Add a resize listener to handle cases where the user resizes the window
window.addEventListener('resize', () => {
  if (window.innerWidth >= 991) {
    if (body.classList.contains('body-nav')) {
      body.classList.remove('body-nav');
      navbarBrand.classList.remove('d-none');
      navbarToggler.classList.remove('is-active');
      navbarCollapse.classList.remove('show'); // Remove the 'show' class on resize
    }
  }
});
let burgerMenu = document.querySelector("#navbar-burger");

burgerMenu.addEventListener("click", function() {
  navbarCollapse.classList.toggle('show');
});
});
// 2nd-part--------------------------------------?
document.addEventListener("DOMContentLoaded", function() {
// Get the header element
const pageHeader = document.querySelector('.page-header');

// Define the scroll threshold (e.g., 50 pixels from the top)
const scrollThreshold = 60;

// Add an event listener for the 'scroll' event
window.addEventListener('scroll', () => {
  // Check if the scroll position is greater than the threshold 
  if (window.scrollY > scrollThreshold) {
    // If it is, add the 'scrolled' class
    pageHeader.classList.add('is-sticky');
  } else {
    // If not, remove the 'scrolled' class
    pageHeader.classList.remove('is-sticky');
  }
});
});

// practice-----------------------------------------------/
// 1. Select all the card elements cards-4
document.addEventListener("DOMContentLoaded", function() {

// Select all the elements you want to animate
const myBoxes = document.querySelectorAll('.my-box, .my-box1, .my-box2, .my-box3');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the element is visible in the viewport
    if (entry.isIntersecting) {
      // Add the 'animate' class to start the animation
      entry.target.classList.add('animate');
    } else {
      // If the element is not in the viewport, remove the class to reset ite
      entry.target.classList.remove('animate');
    }
  });
});

// Loop through each box and tell the observer to watch it
myBoxes.forEach(box => {
  observer.observe(box);
});
});

// three cards-3
document.addEventListener("DOMContentLoaded", function() {

// Select all the elements you want to animate
const myBoxes = document.querySelectorAll('.my-box4, .my-box5, .my-box6');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the element is visible in the viewport
    if (entry.isIntersecting) {
      // Add the 'animate' class to start the animation
      entry.target.classList.add('animate-part2');
    } else {
      // If the element is not in the viewport, remove the class to reset ite
      entry.target.classList.remove('animate-part2');
    }
  });
});

// Loop through each box and tell the observer to watch it
myBoxes.forEach(box => {
  observer.observe(box);
});
});

// for smoothness
document.querySelectorAll('a.smooth-scroll[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.needs-validation');
    const popup = document.getElementById('error-popup');
    const invalidCap = document.querySelector('.invalid-cap');
    const inputs = document.querySelectorAll('.form-control, .form-check-input');

    // Add event listeners to each input for real-time validation
    inputs.forEach(input => {
        // Use 'input' event for text-based fields
        if (input.type !== 'checkbox' && input.type !== 'radio') {
            input.addEventListener('input', function() {
                validateInput(this);
            });
        }
        // Use 'change' event for checkboxes and radio buttons
        else {
            input.addEventListener('change', function() {
                validateInput(this);
            });
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let allValid = true;

        // Validate all fields on submit
        inputs.forEach(input => {
            if (!validateInput(input)) {
                allValid = false;
            }
        });

        // Validate the reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();  
        if (recaptchaResponse.length === 0) {
            invalidCap.style.display = 'block';
            allValid = false;
        } else {
            invalidCap.style.display = 'none';
        }

        // If all fields are valid, show the popup
        if (allValid) {
            popup.style.display = 'flex';
        }
    });

    // Function to validate a single input
    function validateInput(input) {
        let isValid = input.checkValidity();
        const parentDiv = input.closest('.mb-3, .form-check');
        
        // Handle the checkbox specifically
        if (input.type === 'checkbox') {
            const label = parentDiv.querySelector('.form-check-label');
            const feedback = parentDiv.querySelector('.invalid-feedback');
            if (isValid) {
                input.classList.add('valid-custom');
                input.classList.remove('invalid-custom');
                label.style.color = '#28a745'; // Green color for the label
                input.style.accentColor = '#28a745'; // Green color for the checkbox
                if (feedback) feedback.style.display = 'none';
            } else {
                input.classList.add('invalid-custom');
                input.classList.remove('valid-custom');
                label.style.color = 'inherit'; // Reset to default color
                input.style.accentColor = 'inherit'; // Reset to default color
                if (feedback) feedback.style.display = 'block';
            }
            return isValid;
        }

        // Handle other form controls
        if (isValid) {
            input.classList.add('valid-custom');
            input.classList.remove('invalid-custom');
            // Hide feedback message for valid inputs
            if (parentDiv) {
                const feedback = parentDiv.querySelector('.invalid-feedback');
                if (feedback) {
                    feedback.style.display = 'none';
                }
            }
        } else {
            input.classList.add('invalid-custom');
            input.classList.remove('valid-custom');
            // Show feedback message for invalid inputs
            if (parentDiv) {
                const feedback = parentDiv.querySelector('.invalid-feedback');
                if (feedback) {
                    feedback.style.display = 'block';
                }
            }
        }
        return isValid;
    }

    // Function to hide the popup and reload the page
    window.hidePopup = function() {
        popup.style.display = 'none';
        location.reload();
    };
});