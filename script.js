      // JavaScript code for dropdown menu functionality
      document.addEventListener("DOMContentLoaded", function () {
        var profileMenuWrap = document.querySelector(".profile-menu-wrap");
        var profileMenuToggle = document.querySelector(".nav-profile-img");

        profileMenuToggle.addEventListener("click", function () {
          profileMenuWrap.classList.toggle("open-menu");
        });

        document.addEventListener("click", function (event) {
          var target = event.target;
          if (
            !target.closest(".profile-menu-wrap") &&
            !target.closest(".nav-profile-img")
          ) {
            profileMenuWrap.classList.remove("open-menu");
          }
        });
      });
