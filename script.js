document.addEventListener("DOMContentLoaded", () => {
    
    // ======== NEW CONTACT FORM CODE (with Formspree) ========
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Stop the default page reload

        const data = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                formStatus.innerHTML = "Thanks! Your message has been sent.";
                formStatus.className = "status-success";
                contactForm.reset(); // Clear the form
            } else {
                // Show error message if something went wrong
                formStatus.innerHTML = "Oops! There was a problem sending your message.";
                formStatus.className = "status-error";
            }
        } catch (error) {
            // Show network error
            formStatus.innerHTML = "Oops! There was a network error.";
            formStatus.className = "status-error";
        }
    });
    // ======== END CONTACT FORM CODE ========

    // ======== NEW: HAMBURGER MENU CODE ========
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        // Toggle 'active' class on hamburger and menu
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });


    // ======== NEW: SCROLL-IN ANIMATION CODE ========

    // 1. Select all the elements we want to animate
    const elementsToObserve = document.querySelectorAll('.fade-in-on-scroll');

    // 2. Set up the observer options
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // triggers when 10% of the element is visible
    };

    // 3. Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is on screen
            if (entry.isIntersecting) {
                // Add the 'visible' class
                entry.target.classList.add('visible');
                // Stop observing it (so the animation only plays once)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Tell the observer to watch each of our elements
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
    
});

// ======== NEW: ACTIVE NAV LINK ON SCROLL ========
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");

    const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Triggers when the section is in the middle of the screen
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the id of the current section
                const id = entry.target.getAttribute('id');
                
                // Remove 'active-link' from all links
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });

                // Add 'active-link' to the matching link
                // We use querySelector `[href*=${id}]` to find the link that contains the id
                const activeLink = document.querySelector(`.nav-menu .nav-link[href*="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-link');
                }
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    // ======== END ACTIVE NAV LINK CODE ========


// ======== NEW: HIDE/SHOW NAVBAR ON SCROLL ========
    const header = document.querySelector("header");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling Down
            if (currentScrollTop > 70) { // Only hide after scrolling past the header
                header.classList.add("header-hidden");
            }
        } else {
            // Scrolling Up
            header.classList.remove("header-hidden");
        }
        
        // Update last scroll position
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    });
    // ======== END HIDE/SHOW NAVBAR CODE ======== 