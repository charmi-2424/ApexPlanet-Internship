document.addEventListener('DOMContentLoaded', function () {
    const servicesData = [
        { icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" ... </svg>', title: "Web Design", description: "We create stunning, user-centric designs." },
        { icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" ... </svg>', title: "Web Development", description: "We build robust and scalable web applications." },
        { icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" ... </svg>', title: "SEO Optimization", description: "Boost your visibility on search engines." },
        { icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" ... </svg>', title: "Mobile Apps", description: "We develop iOS and Android applications." },
        { icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" ... </svg>', title: "E-Commerce", description: "Smooth and scalable online shopping experiences." },
        { icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" ... </svg>', title: "Digital Strategy", description: "Strategic guidance for digital success." }
    ];

    const portfolioData = [
        {
            title: "Corporate Website Redesign",
            img: "https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000"
        },
        {
            title: "E-commerce Platform",
            img: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000"
        },
        {
            title: "Mobile Banking App",
            img: "https://kms-solutions.asia/wp-content/uploads/mobile-banking-app-design-top-sample.webp"
        },
        {
            title: "SaaS Dashboard UI",
            img: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale%2Cw_1000/v1709826266/catalog/1319365158401798144/juesf14u02kbl7d6jlfa.webp"
        },
        {
            title: "Branding & Identity",
            img: "https://graphicburger.com/wp-content/uploads/2013/12/Branding-Identity-MockUp-Vol7-full.jpg"
        },
        {
            title: "Interactive Web Campaign",
            img: "https://cdn.prod.website-files.com/68022f00177276ddaadfe855/68022f00177276ddaadff0eb_65f3bd05f0a6565a97c1bde0_1877de48-dd84-41d3-a00c-018242d7bc2f.jpeg"
        }
    ];

    function populateContent() {
        const servicesContainer = document.querySelector(".services-grid");
        servicesData.forEach(service => {
            servicesContainer.innerHTML += `
                <div class="service-card">
                    <div class="icon-wrapper">${service.icon}</div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `;
        });

        const portfolioContainer = document.querySelector(".portfolio-grid");
        portfolioData.forEach(item => {
            portfolioContainer.innerHTML += `
                <div class="portfolio-card">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="portfolio-overlay">
                        <h3>${item.title}</h3>
                    </div>
                </div>
            `;
        });
    }

    populateContent();

    const navLinks = document.querySelectorAll(".nav-link");
    const pageSections = document.querySelectorAll(".page-section");
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("form-success-message");

    function showPage(pageId) {
        pageSections.forEach(section => section.classList.remove("active"));
        const targetPage = document.getElementById(pageId + "-page");
        if (targetPage) targetPage.classList.add("active");

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.dataset.page === pageId) link.classList.add("active");
        });

        mobileMenu.style.display = "none";
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pageId = this.dataset.page;
            showPage(pageId);
        });
    });

    mobileMenuButton.addEventListener("click", () => {
        const isHidden = mobileMenu.style.display === "none" || mobileMenu.style.display === "";
        mobileMenu.style.display = isHidden ? "block" : "none";
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        contactForm.style.display = "none";
        successMessage.style.display = "block";
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = "block";
            successMessage.style.display = "none";
        }, 5000);
    });
});
