let btn = document.querySelector(".menu-btn");
let menuLinks = document.querySelectorAll("nav a");

function showMenu() {
  menuLinks.forEach((link) => {
    if (link.style.display === "none" || link.style.display === "") {
      link.style.display = "inline-block";
    } else {
      link.style.display = "none";
    }
  });
}

btn.addEventListener("click", showMenu);

function handleResize() {
  const menu = document.querySelector("nav");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
    menuLinks.forEach(link => link.classList.remove("show"));
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

const images = document.querySelectorAll(".gallery img");

function viewerTemplate(pic, alt) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img class="modal-img" src="${pic}" alt="${alt}">
    </div>
  `;
}

function viewHandler(event) {
  const clickedImage = event.target;
  const src = clickedImage.src;
  const fullSizePath = src.split("-sm")[0] + "-full.jpeg"; 
  const altText = clickedImage.alt;
  
  const viewerHTML = viewerTemplate(fullSizePath, altText);

  document.body.insertAdjacentHTML("afterbegin", viewerHTML);

  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() === "img") {
    viewHandler(event);
  }
});
