document.addEventListener("DOMContentLoaded", () => {
  const loadNav = () => {
    const navLinks = [
      { name: "Irvin Shrestha", align: "left", scrollIndex: 0 },
      { name: "Home", align: "center", scrollIndex: 0 },
      { name: "About", align: "center", scrollIndex: 0 },
      { name: "Skills", align: "center", scrollIndex: 0 },
      { name: "Projects", align: "center", scrollIndex: 0 },
      { name: "Contact", align: "right", scrollIndex: 0 },
    ];

    const navBar = document.getElementsByClassName("navigation")[0];
    const navList = document.createElement("div");
    const contactBtn = document.createElement("button");
    const logo = document.createElement("span");
    logo.className = "user-logo";
    navBar.appendChild(logo);
    navBar.appendChild(navList);
    navList.className = "nav-list";

    navLinks.forEach((link) => {
      const navItem = document.createElement("div");
      if (link.align === "left") {
        logo.textContent = link.name;
      } else if (link.align === "center") {
        navItem.textContent = link.name;
        navItem.className = "nav-item";
        navList.appendChild(navItem);
      } else if (link.align === "right") {
        contactBtn.textContent = link.name;
        navBar.appendChild(contactBtn);
      }
    });
  };

  const overlaySlider = () => {
    const overlayContainer = document.getElementsByClassName("overlay")[0];
    const options = [
      { id: 0, name: "HTML" },
      { id: 1, name: "CSS" },
      { id: 2, name: "SCSS" },
      { id: 3, name: "Javascript" },
      { id: 4, name: "React" },
      { id: 5, name: "Next.Js" },
    ];

    options.forEach((overlayItem) => {
      const overlayOptions = document.createElement("div");
      overlayOptions.textContent = overlayItem.name;
      overlayContainer.appendChild(overlayOptions);

      const dot = document.createElement("span");
      dot.textContent = " • ";
      dot.className = "dot-separator";
      overlayContainer.appendChild(dot);
    });
  };

  const toggleAboutMe = () => {
    const showHideBtn = document.querySelectorAll(".title");

    showHideBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const para = btn.closest(".about-detail").querySelector(".para");
        const isOpen = para.classList.contains("show");

        document.querySelectorAll(".para").forEach((p) => {
          p.classList.remove("show");
        });

        if (!isOpen) {
          para.classList.add("show");
        }
      });
    });
  };

  toggleAboutMe();
  loadNav();
});
