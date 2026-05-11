document.addEventListener("DOMContentLoaded", () => {

  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");

  document.addEventListener("mousemove", (e) => {

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    outline.style.left = e.clientX + "px";
    outline.style.top = e.clientY + "px";
  });

});
