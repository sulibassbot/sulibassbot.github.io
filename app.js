// Change navigation link active state on scrolling
const sections = document.querySelectorAll("main section");
window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
    if (navLink.getAttribute("href").slice(1) === currentSection) {
      navLink.classList.add("active");
    }
  });
});

function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('main > div');
  for (let page of pages) {
    page.style.display = 'none';
  }

  // Show the clicked page
  const pageToShow = document.querySelector(`#${pageId}`);
  pageToShow.style.display = 'block';
}