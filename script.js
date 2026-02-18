document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navmenu");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        collapse.hide();

        navbarCollapse.addEventListener(
          "hidden.bs.collapse",
          function () {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          },
          { once: true },
        );
      }
    });
  });
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted!");
});
