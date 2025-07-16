document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.querySelector(".form__select");
  const trigger = customSelect.querySelector(".form__trigger");
  const options = customSelect.querySelectorAll(".form__option");
  const hiddenInput = document.getElementById("system-type");

  trigger.addEventListener("click", () => {
    customSelect.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      const text = option.textContent.trim();

      trigger.textContent = text;
      trigger.classList.add("selected");

      hiddenInput.value = value;
      customSelect.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("open");
    }
  });

  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }
});
