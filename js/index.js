document.addEventListener("DOMContentLoaded", () => {
  const loadNav = () => {
    const navLinks = [
      { name: "Home", align: "center", scrollIndex: 0 },
      { name: "About", align: "center", scrollIndex: 0 },
      { name: "Skills", align: "center", scrollIndex: 0 },
      { name: "Projects", align: "center", scrollIndex: 0 },
      { name: "Contact Me", align: "right", scrollIndex: 0 },
    ];

    const navBar = document.getElementsByClassName("navigation")[0];
    const navList = document.createElement("div");
    const contactBtn = document.createElement("button");

    navBar.appendChild(navList);
    navList.className = "nav-list";

    navLinks.forEach((link) => {
      const navItem = document.createElement("div");
      if (link.align === "center") {
        navItem.textContent = link.name;
        navItem.className = "nav-item";
        navList.appendChild(navItem);
      } else if (link.align === "right") {
        contactBtn.textContent = link.name;
        navBar.appendChild(contactBtn);
      }
    });
  };

  // const mainContent = () => {
  //   const mainInfo = [
  //     { type: "title", text: "Creative Web Developer" },
  //     {
  //       type: "sub-title",
  //       text: "Im a Frontend developer with 3+ years of experience",
  //     },
  //   ];
  //   const mainContainer = document.getElementsByClassName("main")[0];
  // };

  loadNav();
});
