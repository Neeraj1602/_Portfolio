/*============================= Typing Animation =============================*/
const typingElement = document.querySelector(".typing");
if (typingElement) {
    new Typed(".typing", {
        strings: ["Web Designer", "Web Developer", "Graphic Designer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
}

/*============================= Aside Navigation =============================*/
const nav = document.querySelector(".nav");
const allSections = document.querySelectorAll(".section"); // ✅ Only once

if (nav && allSections.length > 0) {
    const navItems = nav.querySelectorAll("li");

    navItems.forEach((item, index) => {
        const link = item.querySelector("a");
        link.addEventListener("click", function (e) {
            e.preventDefault();

            allSections.forEach((section) => section.classList.remove("back-section"));

            navItems.forEach((navItem, navIndex) => {
                const navLink = navItem.querySelector("a");
                if (navLink.classList.contains("active")) {
                    allSections[navIndex].classList.add("back-section");
                }
                navLink.classList.remove("active");
            });

            this.classList.add("active");

            showSection(this);
        });
    });

    function showSection(element) {
        allSections.forEach((section) => section.classList.remove("active"));

        const targetId = element.getAttribute("href").split("#")[1];
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    }
}

/*============================= Aside Toggle Button =============================*/
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

if (navTogglerBtn && aside && allSections.length > 0) {
    navTogglerBtn.addEventListener("click", () => {
        toggleAsideSection();
    });

    function toggleAsideSection() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        allSections.forEach((section) => section.classList.toggle("open"));
    }
}

/*============================= Hire button =============================*/

//  navList and totalNavlist define
const navList = document.querySelectorAll(".nav li");
const totalNavlist = navList.length;

//  updateNav function
function updateNav(element) {
    for (let i = 0; i < totalNavlist; i++) {
        navList[i].querySelector("a").classList.remove("active");

        const target = element.getAttribute("href").split("#")[1];
        const navHref = navList[i].querySelector("a").getAttribute("href").split("#")[1];

        if (target === navHref) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
//  Add event listener to Hire Me button
document.querySelector(".hire-me").addEventListener("click", function (e) {
    e.preventDefault();

    // Show the correct section
    showSection(this);

    // Update the active class in sidebar nav
    const contactLink = document.querySelector('.nav li a[href="#contact"]');
    updateNav(contactLink);

    // Smooth scroll to section (optional)
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
});

