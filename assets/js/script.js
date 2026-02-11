let slideIndex = 1;
let mobileView = false;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  const slideWidth = document.querySelector(".mySlides").offsetWidth;

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  if (mobileView) {
    document.querySelector(".slideshow-container").scrollTo({
      left: (n - 1) * (slideWidth + (n - 1) * 37),
      behavior: "smooth",
    });
    dots[n - 1].classList.add("active");
  } else {
    if (n == slides.length) n--;
    dots[n - 1].classList.add("active");
    dots[n].classList.add("active");
    document.querySelector(".slideshow-container").scrollTo({
      left: (n - 1) * (slideWidth + (n - 1) * 37),
      behavior: "smooth",
    });
  }
}

let scrollTimer = null;

document
  .querySelector(".slideshow-container")
  .addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateDotsFromScroll, 80);
  });

function updateDotsFromScroll() {
  const slideWidth = document.querySelector(".mySlides").offsetWidth;
  const dots = document.getElementsByClassName("dot");
  const slideFullWidth = slideWidth + 37;
  let index = 0;
  if (mobileView) {
    index = Math.round(
      document.querySelector(".slideshow-container").scrollLeft /
        slideFullWidth,
    );
  } else {
    index = Math.round(
      document.querySelector(".slideshow-container").scrollLeft /
        slideFullWidth,
    );
  }

  // clear all
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  if (mobileView) {
    // 1 slide visible
    if (dots[index]) dots[index].classList.add("active");
  } else {
    // 2 slides visible
    if (dots[index]) dots[index].classList.add("active");
    if (dots[index + 1]) dots[index + 1].classList.add("active");
  }
}

function displayNewMenu(btn) {
  const newMenu = document.querySelector("header .newMenu");
  const icon = btn.querySelector("i");

  const isOpen = newMenu.style.display === "block";

  if (isOpen) {
    newMenu.style.display = "none";
    icon.classList.remove("fa-solid");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa");
    icon.classList.add("fa-bars");
  } else {
    newMenu.style.display = "block";
    icon.classList.remove("fa");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-xmark");
  }
}

function mobileHeaderView() {
  const header = document.querySelector("header");

  // prevent duplicate creation
  if (header.querySelector(".newMenu")) return;

  const links = document.querySelectorAll(".menu .link");
  const newMenuDiv = document.createElement("div");
  newMenuDiv.classList.add("newMenu");

  links.forEach((link) => {
    newMenuDiv.appendChild(link); // move links
  });

  header.appendChild(newMenuDiv);
}

function computerHeaderView() {
  const header = document.querySelector("header");
  const newMenuDiv = header.querySelector(".newMenu");
  const menu = header.querySelector(".menu");

  if (!newMenuDiv) return;

  const links = newMenuDiv.querySelectorAll(".link");

  links.forEach((link) => {
    menu.prepend(link);
  });

  newMenuDiv.remove();
}

const mediaQuery = window.matchMedia("(max-width: 950px)");

// run once on load
if (mediaQuery.matches) {
  mobileView = true;
  showSlides(slideIndex);
  mobileHeaderView();
} else {
  mobileView = false;
  showSlides(slideIndex);
  computerHeaderView();
}

// listen for changes (mobile ↔ desktop)
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    // switched to mobile
    mobileView = true;
    showSlides(slideIndex);
    mobileHeaderView();
  } else {
    mobileView = false;
    showSlides(slideIndex);
    // switched to desktop
    computerHeaderView();
  }
});

function goToProjects() {
  document.getElementById("Projects").scrollIntoView({
    behavior: "smooth",
  });
}

function goToContact() {
  document.getElementById("Contact").scrollIntoView({
    behavior: "smooth",
  });
}
