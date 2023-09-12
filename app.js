const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const small_title = document.querySelector(".small-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    small_title.style.opacity = - scroll / (header_height / 2) + 1;

    big_title.style.opacity = - scroll / (header_height / 2) + 1;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})



// NAVIGATION 
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section'); // Get all sections
const navLinks = document.querySelectorAll('.navbar a'); // Get all navigation links

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active'); // Toggle the "active" class
    navbar.classList.toggle('show'); // Toggle the navigation menu
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active'); // Remove "active" class from hamburger icon
        navbar.classList.remove('show'); // Hide the navigation menu
    });
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // Scroll to the section
        const targetSectionId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

         // Hide the navigation menu
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('show');
        });

    });


// Update active link on scroll
window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
            instructionContent.style.display = 'block';
            frontendContent.style.display = 'none';
            backendContent.style.display = 'none';
            otherContent.style.display = 'none';
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

//Hover Skills
const clickableImages = document.querySelectorAll('.hoverable-image');
const frontendContent = document.querySelector('.frontend');
const backendContent = document.querySelector('.backend');
const otherContent = document.querySelector('.other');
const instructionContent = document.querySelector('.instruction');
const skillsLink = document.querySelector('.navbar a[href="#skills"]');

skillsLink.addEventListener('click', () => {
    instructionContent.style.display = 'block';
    frontendContent.style.display = 'none';
    backendContent.style.display = 'none';
    otherContent.style.display = 'none';
});

clickableImages.forEach(image => {
    const originalSrc = image.src;

    image.addEventListener('click', () => {
        if (image.classList.contains('stones1Grey')) {
            image.src = 'img/stones1.png';
                instructionContent.style.display = 'none';
                frontendContent.style.display = 'block';
                backendContent.style.display = 'none';
                otherContent.style.display = 'none';
        } else if (image.classList.contains('stones2Grey')) {
            image.src = 'img/stones2.png';
                instructionContent.style.display = 'none';
                frontendContent.style.display = 'none';
                backendContent.style.display = 'block';
                otherContent.style.display = 'none';
        } else if (image.classList.contains('stones3Grey')) {
            image.src = 'img/stones3.png';
                instructionContent.style.display = 'none';
                frontendContent.style.display = 'none';
                backendContent.style.display = 'none';
                otherContent.style.display = 'block';
        }

        // Reset other images to their original state
        clickableImages.forEach("click",() => {
                image.src = originalSrc;
            
        });
    });
});

//CONTACT
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const formError = document.querySelector("#form__error");
    const errorButton = document.querySelector(".error__button");
    

    form.addEventListener("submit", function (event) {
        let hasError = false;
        formError.style.display = "none";

        const nameInput = form.querySelector("#name");
        const emailInput = form.querySelector("#email");
        const messageInput = form.querySelector("#message");

        if (nameInput.value.trim() === "") {
            hasError = true;
        }

        if (emailInput.value.trim() === "") {
            hasError = true;
        }

        if (messageInput.value.trim() === "") {
            hasError = true;
        }

        if (hasError) {
            formError.style.display = "block";
            event.preventDefault();

        } 
    });


    errorButton.addEventListener("click", function () {
        formError.style.display = "none";
    });


});


window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav'); 

    // Check the scroll position
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled-nav');
    } else {
        navbar.classList.remove('scrolled-nav');
    }
});

//Hover Skills---NOT USED CHANGE TO CLICKABLE BEACAUSE OF MOBILE DOESNT HAVE HOVER


// const hoverableImages = document.querySelectorAll('.hoverable-image');
// const frontendContent = document.querySelector('.frontend');
// const backendContent = document.querySelector('.backend');
// const otherContent = document.querySelector('.other');
// const instructionContent = document.querySelector('.instruction');
// const skillsLink = document.querySelector('.navbar a[href="#skills"]');


// skillsLink.addEventListener('click', () => {
//     instructionContent.style.display = 'block';
//     frontendContent.style.display = 'none';
//     backendContent.style.display = 'none';
//     otherContent.style.display = 'none';
// });

// hoverableImages.forEach(image => {
//     const originalSrc = image.src;

//     image.addEventListener('mouseenter', () => {
//         if (image.classList.contains('stones1Grey')) {
//             image.src = 'img/stones1.png';
//         } else if (image.classList.contains('stones2Grey')) {
//             image.src = 'img/stones2.png';
//         } else if (image.classList.contains('stones3Grey')) {
//             image.src = 'img/stones3.png';
//         }
//     });

//     image.addEventListener('mouseleave', () => {
//         image.src = originalSrc;
//     });
// });

// hoverableImages.forEach(image => {
//     image.addEventListener('mouseenter', () => {
//         if (image.classList.contains('stones1Grey')) {
//             instructionContent.style.display = 'none';
//             frontendContent.style.display = 'block';
//             backendContent.style.display = 'none';
//             otherContent.style.display = 'none';
//         } else if (image.classList.contains('stones2Grey')) {
//             instructionContent.style.display = 'none';
//             frontendContent.style.display = 'none';
//             backendContent.style.display = 'block';
//             otherContent.style.display = 'none';
//         } else if (image.classList.contains('stones3Grey')) {
//             instructionContent.style.display = 'none';
//             frontendContent.style.display = 'none';
//             backendContent.style.display = 'none';
//             otherContent.style.display = 'block';
//         }
//     });

//     image.addEventListener('mouseleave', () => {
//         instructionContent.style.display = 'block';
//         frontendContent.style.display = 'none';
//         backendContent.style.display = 'none';
//         otherContent.style.display = 'none';
//     });
// });


//CONTACT
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const formError = document.querySelector("#form__error");
    const errorButton = document.querySelector(".error__button");

    form.addEventListener("submit", function (event) {
        let hasError = false;
        formError.style.display = "none";

        const nameInput = form.querySelector("#name");
        const emailInput = form.querySelector("#email");
        const messageInput = form.querySelector("#message");

        if (nameInput.value.trim() === "") {
            hasError = true;
        }

        if (emailInput.value.trim() === "") {
            hasError = true;
        }

        if (messageInput.value.trim() === "") {
            hasError = true;
        }

        if (hasError) {
            formError.style.display = "block";
            event.preventDefault();
        }
    });
    errorButton.addEventListener("click", function () {
        formError.style.display = "none";
    });
});