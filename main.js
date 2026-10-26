
/* ========================================
   1. TYPED TEXT ANIMATION
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const typedElement = document.querySelector(".text");

    if (typedElement && typeof Typed !== "undefined") {
        new Typed(".text", {
            strings: [
                "Aspiring Data Analyst",
                "Python Developer",
                "Software Tester"
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1400,
            startDelay: 300,
            loop: true,
            smartBackspace: true
        });
    }

    /* ========================================
       2. MOBILE NAVIGATION
    ======================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navbar.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("bx-menu", !isOpen);
                icon.classList.toggle("bx-x", isOpen);
            }

        });

        /* Close menu after clicking a navigation link */

        navbar.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("bx-x");
                    icon.classList.add("bx-menu");
                }

            });

        });

        /* Close menu when switching back to desktop width */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 780) {

                navbar.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("bx-x");
                    icon.classList.add("bx-menu");
                }

            }

        });

    }

    /* ========================================
       3. ACTIVE NAVIGATION LINK
    ======================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const currentId = entry.target.id;

                        navLinks.forEach(function (link) {

                            const isActive =
                                link.getAttribute("href") === "#" + currentId;

                            link.classList.toggle("active", isActive);

                        });

                    }

                });

            },
            {
                root: null,
                rootMargin: "-25% 0px -60% 0px",
                threshold: 0
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });

    }

    /* ========================================
       4. AUTOMATIC FOOTER YEAR
    ======================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});




/* Section animation on navigation click */
document.querySelectorAll('.navbar a[href^="#"], .btn-box[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        target.classList.remove('animate-section');

        // Reset and restart the animation
        void target.offsetWidth;

        target.classList.add('animate-section');
    });
});
