document.addEventListener('DOMContentLoaded', () => {
  // ======= MULTI-ITEM CAROUSEL SETUP =======
  console.log("DOM fully loaded and script running");
  const carousel = document.querySelector('#projectsCarousel');
  const items = carousel ? carousel.querySelectorAll('.carousel-item') : [];

  items.forEach((el) => {
    const minPerSlide = 3;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
      if (!next) {
        next = items[0];
      }
      const cloneChild = next.cloneNode(true);
      el.querySelector('.row').appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  // ======= BACK TO TOP BUTTON FUNCTIONALITY =======
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ======= THEME TOGGLE =======
  const themeToggle = document.getElementById("themeToggle");

  const setTheme = (isDark) => {
    document.body.classList.toggle("dark-theme", isDark);
    themeToggle.checked = isDark;
    themeToggle.setAttribute("aria-checked", isDark ? "true" : "false");

    const icon = document.querySelector(".theme-toggle .material-icons");
    if (icon) {
      icon.textContent = isDark ? "light_mode" : "dark_mode";
    }
  };

  if (themeToggle) {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDarkTheme = storedTheme ? storedTheme === "dark" : prefersDark;

    setTheme(useDarkTheme);

    themeToggle.addEventListener("change", () => {
      const isDark = themeToggle.checked;
      localStorage.setItem("theme", isDark ? "dark" : "light");
      setTheme(isDark);
    });
  }
});
