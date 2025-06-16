document.addEventListener("DOMContentLoaded", function () {
  const blockquote = document.querySelector(".blockquote");
  setTimeout(() => {
    blockquote.classList.add("visible");
  }, 300);
});
