document.addEventListener("DOMContentLoaded", function () {
  function byId(id) {
    return document.getElementById(id);
  }

  byId("view-orders").addEventListener("click", function () {
    // Code to execute when "viewOrders" is clicked
    console.log("view orders clicked");
  });

  byId("view-details").addEventListener("click", function () {
    // Code to execute when "viewDetails" is clicked
    console.log("view details clicked");
  });

  byId("close").addEventListener("click", function () {
    // Hide the "Don't miss any deals" section
    byId("deals").style.display = "none";
  });

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const linkId = this.dataset.linkId;

      navLinks.forEach((link) => {
        if (link.dataset.linkId === linkId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });
});
