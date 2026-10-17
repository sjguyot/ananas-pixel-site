const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
  { threshold: 0.14 }
);
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector("#year").textContent = new Date().getFullYear();
