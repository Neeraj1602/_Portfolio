// style-switcher.js

const styleSwitcher = document.querySelector(".style-switcher");
const toggler = document.querySelector(".style-switcher-toggler");

if (styleSwitcher && toggler) {
  toggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
      styleSwitcher.classList.remove("open");
    }
  });
}



/*===================== Theme Colors =========================*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/*===================== Theme Light and Dark Mode =========================*/
const dayNight = document.querySelector(".day-night");

if (dayNight) {
    dayNight.addEventListener("click", () => {
        const icon = dayNight.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
        }
        document.body.classList.toggle("dark");
    });

    window.addEventListener("load", () => {
        const icon = dayNight.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("dark")) {
                icon.classList.add("fa-sun");
            } else {
                icon.classList.add("fa-moon");
            }
        }
    });
}
