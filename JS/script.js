document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".burger-btn");
  const navUL = document.querySelector(".header-menu");
  const bars = document.querySelectorAll(".bar");

  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
    bars.forEach((element) => {
      element.classList.toggle("active");
    });
  });

  // Закриття меню при натисканні на будь-який елемент меню
  navUL.addEventListener("click", () => {
    navUL.classList.remove("show");
    bars.forEach((element) => {
      element.classList.remove("active");
    });
  });
});
