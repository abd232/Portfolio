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
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (slides.length == 1) {
    dots[n].classList.add("active");
  }
  if (mobileView) {
    for (var i = 0; i < n - 1; i++) {
      slides[i].style.marginLeft = "-100%";
    }
  } else {
    for (var i = 0; i < n - 1; i++) slides[i].style.marginLeft = "-650px";

    for (var i = n - 1; i < slides.length; i++)
      slides[i].style.marginLeft = "24px";
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
  mobileHeaderView();
} else {
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
