/* =========================================
   ABOUT ME SECTION SCROLL ANIMATION
========================================= */

const aboutElements =
    document.querySelectorAll(".about-reveal");

const aboutObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

aboutElements.forEach((element) => {
    aboutObserver.observe(element);
});


/* =========================================
   MOBILE MENU TOGGLE
========================================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

/* =========================================
   CLOSE MOBILE MENU WHEN LINK CLICKED
========================================= */

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

/* =========================================
   SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* =========================================
   NAVBAR BACKGROUND CHANGE ON SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* =========================================
   PORTFOLIO STRUCTURE NOTE
=========================================

Future portfolio sections may include:
- Preface
- Academic Profile
- Leadership Activities
- Certifications
- Gallery
- Testimonials
- Future Goals

These sections are intentionally excluded
from the navigation menu to maintain a clean,
professional, and uncluttered user experience.

========================================= */

/* =========================================
   HERO SECTION INTERSECTION ANIMATION
========================================= */

const heroContent = document.querySelector(".hero-content");

const heroObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.2
    }
);

if (heroContent) {
    heroObserver.observe(heroContent);
}

/* =========================================
   FUTURE PROFILE IMAGE REPLACEMENT
=========================================

Replace:

<div class="profile-placeholder">
    <span>Profile Photo</span>
</div>

With:

<img src="images/profile.jpg"
     alt="Thayos Sakunjanthawong"
     class="profile-image">

Then add corresponding styling if desired.

========================================= */

/* =========================================
   PREFACE SCROLL REVEAL ANIMATION
========================================= */

const prefaceElements = document.querySelectorAll(".preface-reveal");

const prefaceObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

prefaceElements.forEach((element) => {
    prefaceObserver.observe(element);
});

/* =========================================
   ACADEMIC PROFILE SCROLL ANIMATION
========================================= */

const academicElements = document.querySelectorAll(".academic-reveal");

const academicObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

academicElements.forEach((element) => {
    academicObserver.observe(element);
});

/* =========================================
   SKILLS SECTION ANIMATION
========================================= */

const skillsElements = document.querySelectorAll(".skills-reveal");

const skillsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                // Animate skill bars
                const skillBars = entry.target.querySelectorAll(".skill-fill");

                skillBars.forEach((bar) => {
                    bar.style.width = bar.dataset.width;
                });

            }

        });

    },
    {
        threshold: 0.15
    }
);

skillsElements.forEach((element) => {
    skillsObserver.observe(element);
});

/* =========================================
   ACHIEVEMENTS SECTION SCROLL ANIMATION
========================================= */

const achievementElements = document.querySelectorAll(".achievements-reveal");

const achievementObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

achievementElements.forEach((element) => {
    achievementObserver.observe(element);
});

/* =========================================
   FUTURE IMAGE REPLACEMENT GUIDE
=========================================

Replace:

<div class="achievement-image">
    <span>Achievement Photo</span>
</div>

With:

<img
    src="images/achievement-1.jpg"
    alt="Achievement Title"
    class="achievement-image"
/>

Then add custom image styling as needed.

========================================= */

/* =========================================
   PROJECT FILTERING SYSTEM
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button state
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filterValue = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (
                filterValue === "all" ||
                category === filterValue
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 100);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);
            }

        });

    });

});

/* =========================================
   PROJECTS SCROLL REVEAL ANIMATION
========================================= */

const projectRevealElements =
    document.querySelectorAll(".projects-reveal");

const projectsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

projectRevealElements.forEach((element) => {
    projectsObserver.observe(element);
});

/* =========================================
   FUTURE PROJECT IMAGE GUIDE
=========================================

Replace:

<div class="project-image">
    <span>Project Screenshot</span>
</div>

With:

<img
    src="images/project-1.jpg"
    alt="Project Name"
    class="project-image"
/>

========================================= */

/* =========================================
   EXPERIENCE SECTION REVEAL ANIMATION
========================================= */

const experienceElements =
    document.querySelectorAll(".experience-reveal");

const experienceObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

experienceElements.forEach((element) => {
    experienceObserver.observe(element);
});

/* =========================================
   SUBTLE INTERACTIVE EFFECTS
========================================= */

const timelineBodies =
    document.querySelectorAll(".timeline-body");

timelineBodies.forEach((item) => {

    item.addEventListener("mousemove", () => {
        item.style.transition = "all 0.25s ease";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "";
    });

});

/* =========================================
   FUTURE CUSTOMIZATION NOTES

   Replace sample content with:
   - Real internships
   - Volunteer work
   - Leadership positions
   - Club memberships
   - Community projects
   - Competition participation

========================================= */

/* =========================================
   CERTIFICATIONS REVEAL ANIMATION
========================================= */

const certificationElements =
    document.querySelectorAll(".certifications-reveal");

const certificationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

certificationElements.forEach((element) => {
    certificationObserver.observe(element);
});

/* =========================================
   ANIMATED STAT COUNTERS
========================================= */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target =
            parseInt(counter.dataset.target);

        let count = 0;

        const increment =
            Math.ceil(target / 60);

        const updateCounter = () => {

            count += increment;

            if (count >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = count;
                requestAnimationFrame(updateCounter);
            }

        };

        updateCounter();

    });

};

const statsSection =
    document.querySelector(".learning-stats");

let counterStarted = false;

const statsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting &&
                !counterStarted
            ) {

                startCounters();
                counterStarted = true;

            }

        });

    },
    {
        threshold: 0.3
    }
);

if (statsSection) {
    statsObserver.observe(statsSection);
}

/* =========================================
   FUTURE CUSTOMIZATION NOTES

   Replace sample certifications with:
   - Actual certificates
   - Credential verification links
   - Real workshop participation
   - Competition certificates
   - University outreach programs

========================================= */

/* =========================================
   TESTIMONIAL REVEAL ANIMATION
========================================= */

const testimonialElements =
    document.querySelectorAll(".testimonials-reveal");

const testimonialObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

testimonialElements.forEach((element) => {
    testimonialObserver.observe(element);
});

/* =========================================
   FEATURED TESTIMONIAL SLIDER
========================================= */

const slides =
    document.querySelectorAll(".featured-slide");

const nextBtn =
    document.querySelector(".next-btn");

const prevBtn =
    document.querySelector(".prev-btn");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active-slide");
    });

    slides[index].classList.add("active-slide");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

if (nextBtn && prevBtn) {

    nextBtn.addEventListener(
        "click",
        nextSlide
    );

    prevBtn.addEventListener(
        "click",
        prevSlide
    );

}

/* =========================================
   AUTO PLAY FEATURED RECOMMENDATIONS
========================================= */

setInterval(() => {

    if (slides.length > 0) {
        nextSlide();
    }

}, 6000);

/* =========================================
   FUTURE CUSTOMIZATION NOTES

   Replace placeholders with:
   - Real teacher recommendations
   - Mentor references
   - Internship supervisor endorsements
   - Coach feedback
   - Community leader testimonials

========================================= */

/* =========================================
   FUTURE GOALS REVEAL ANIMATION
========================================= */

const futureElements =
    document.querySelectorAll(".future-reveal");

const futureObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

futureElements.forEach((element) => {
    futureObserver.observe(element);
});

/* =========================================
   ROADMAP TIMELINE ANIMATION
========================================= */

const roadmapItems =
    document.querySelectorAll(".future-roadmap-item");

const roadmapObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.2
    }
);

roadmapItems.forEach((item) => {
    roadmapObserver.observe(item);
});

/* =========================================
   FUTURE CUSTOMIZATION NOTES

   Replace sample goals with:
   - Actual university targets
   - Specific scholarship goals
   - Career objectives
   - Entrepreneurship milestones
   - Community initiatives

========================================= */

/* =========================================
   CONTACT SECTION REVEAL ANIMATION
========================================= */

const contactElements =
    document.querySelectorAll(".contact-reveal");

const contactObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

contactElements.forEach((element) => {
    contactObserver.observe(element);
});

/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const fullName =
                document.getElementById("fullName").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !fullName ||
                !email ||
                !subject ||
                !message
            ) {

                formMessage.className =
                    "form-message error";

                formMessage.textContent =
                    "Please complete all required fields.";

                return;
            }

            if (!emailPattern.test(email)) {

                formMessage.className =
                    "form-message error";

                formMessage.textContent =
                    "Please enter a valid email address.";

                return;
            }

            formMessage.className =
                "form-message success";

            formMessage.textContent =
                "Thank you! Your message has been submitted successfully. (Placeholder functionality)";

            contactForm.reset();

        }
    );

}

/* =========================================
   ENHANCED FIELD FOCUS EFFECTS
========================================= */

const formInputs =
    document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );

formInputs.forEach((field) => {

    field.addEventListener("focus", () => {
        field.parentElement.classList.add("focused");
    });

    field.addEventListener("blur", () => {
        field.parentElement.classList.remove("focused");
    });

});

/* =========================================
   FUTURE CUSTOMIZATION NOTES

   Connect the form to:
   - EmailJS
   - Formspree
   - Netlify Forms
   - PHP Backend
   - Node.js Backend
   - Firebase

========================================= */

/* =========================================
   FOOTER REVEAL ANIMATION
========================================= */

const footerElements =
    document.querySelectorAll(".footer-reveal");

const footerObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

footerElements.forEach((element) => {
    footerObserver.observe(element);
});

/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTopButton =
    document.getElementById("backToTop");

/* Show button after scrolling */

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* Smooth scroll to top */

if (backToTopButton) {

    backToTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}

/* =========================================
   FUTURE CUSTOMIZATION NOTES

   Replace:
   - Email placeholder
   - Phone number placeholder
   - Social media URLs
   - Portfolio URL

   Optional Enhancements:
   - Dark/Light mode toggle
   - Footer newsletter
   - Animated statistics
   - Visitor counter
   - Language switcher

========================================= */