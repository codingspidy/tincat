const navbar = document.querySelector(".primary-navbar");
const toggleBtn = document.querySelector(".navbar-toggle-btn");

toggleBtn.addEventListener("click", () => {
   let isDataVisible = navbar.getAttribute("data-visible");
   
   if (isDataVisible === "false") {
       navbar.setAttribute("data-visible", "true")
       toggleBtn.setAttribute("aria-expanded", "true")

   } if (isDataVisible === "true") {
       navbar.setAttribute("data-visible", "false")
       toggleBtn.setAttribute("aria-expanded", "false")
   }

})


