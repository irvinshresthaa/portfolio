document.addEventListener("DOMContentLoaded", () => {
  let showContact = false;

  const loadNav = () => {
    const navLinks = [
      { name: "Irvin Shrestha", align: "left", scrollId: "" },
      { name: "Home", align: "center", scrollId: "mainContainer" },
      { name: "Services", align: "center", scrollId: "servicesContainer" },
      { name: "Skills", align: "center", scrollId: "skillsContainer" },
      { name: "Projects", align: "center", scrollId: "projectsContainer" },
      { name: "Contact", align: "right", scrollId: "" },
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

        navItem.addEventListener("click", () => {
          if (link.scrollId) {
            scrollTo(link.scrollId);
          }
        });

        navList.appendChild(navItem);
      } else if (link.align === "right") {
        const contactBtn = document.createElement("button");
        contactBtn.textContent = link.name;
        contactBtn.className = "contact-btn";

        contactBtn.addEventListener("click", () => {
          const contactModal = document.getElementById("contactModal");
          if (contactModal) {
            contactModal.classList.remove("hidden");
          }
        });

        navBar.appendChild(contactBtn);
      }
    });

    // Close modal logic
    const contactModal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");

    if (closeModal && contactModal) {
      closeModal.addEventListener("click", () => {
        showContact = false;
        contactModal.classList.add("hidden");
      });

      window.addEventListener("click", (e) => {
        if (e.target === contactModal) {
          showContact = false;
          contactModal.classList.add("hidden");
        }
      });
    }
  };

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const viewProjectsBtn = document.getElementById("scrollView");
  viewProjectsBtn.addEventListener("click", () => {
    scrollTo("projectsContainer");
  });

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

  const projectsMapping = () => {
    const projects = [
      {
        name: "AI-Summarizer",
        gitLink: "https://github.com/irvinshresthaa/AI-Summarizer",
        liveLink: "https://irvinshresthaa.github.io/AI-Summarizer/",
        image: "./assets/Ai-Summarizer.png",
      },
      {
        name: "Calculator",
        gitLink: "https://github.com/irvinshresthaa/Calculator-",
        liveLink: "https://irvinshresthaa.github.io/Calculator-/",
        image: "./assets/calculator.png",
      },
      {
        name: "Weather App",
        gitLink: "https://github.com/irvinshresthaa/WeatherApp",
        liveLink: "https://irvinshresthaa.github.io/WeatherApp/",
        image: "./assets/WeatherApp.png",
      },
      {
        name: "Todo List",
        gitLink: "https://github.com/irvinshresthaa/TodoList",
        liveLink: "https://irvinshresthaa.github.io/TodoList/",
        image: "./assets/TodoList.png",
      },
      {
        name: "Sync Dating App",
        gitLink: "https://github.com/irvinshresthaa/Sync-Dating",
        liveLink: "",
        image: "",
      },
      {
        name: "Rock Paper Scissors",
        gitLink:
          "https://github.com/irvinshresthaa/RockPaperScissors/settings/pages",
        liveLink: "https://irvinshresthaa.github.io/RockPaperScissors/",
        image: "./assets/RockPaper.png",
      },
      {
        name: "Designs",
        gitLink: "https://github.com/irvinshresthaa/Deisgns",
        liveLink: "",
        image: "./assets/Design.png",
      },
    ];

    const projectListContainer =
      document.getElementsByClassName("project-list")[0];

    projects.forEach((project) => {
      const projectContainer = document.createElement("div");
      projectContainer.className = "project-container";

      const imageOverlay = document.createElement("div");
      imageOverlay.className = "image-overlay";
      const imageContainer = document.createElement("img");
      imageContainer.src = project.image;
      imageOverlay.appendChild(imageContainer);
      const blackOverlay = document.createElement("div");
      blackOverlay.className = "black-overlay";
      imageOverlay.appendChild(blackOverlay);

      projectContainer.appendChild(imageOverlay);

      const projectTitleContainer = document.createElement("div");
      projectTitleContainer.className = "project-title";
      const projectTitle = document.createElement("span");
      projectTitle.textContent = project.name;
      projectTitleContainer.appendChild(projectTitle);

      projectContainer.appendChild(projectTitleContainer);

      projectContainer.addEventListener("mouseenter", () => {
        projectContainer.classList.add("hovered");
        projectTitleContainer.innerHTML = ""; // Clear title

        const btnGit = document.createElement("a");
        btnGit.href = project.gitLink;
        btnGit.textContent = "GitHub";
        btnGit.className = "project-btn";
        btnGit.target = "_blank";

        if (project.liveLink !== "") {
          const btnLive = document.createElement("a");
          btnLive.href = project.liveLink;
          btnLive.textContent = "Live";
          btnLive.className = "project-btn";
          btnLive.target = "_blank";

          projectTitleContainer.appendChild(btnLive);
        }

        projectTitleContainer.appendChild(btnGit);
      });

      projectContainer.addEventListener("mouseleave", () => {
        projectContainer.classList.remove("hovered");

        projectTitleContainer.innerHTML = ""; // Clear buttons

        const projectTitle = document.createElement("span");
        projectTitle.textContent = project.name;

        projectTitleContainer.appendChild(projectTitle);
      });

      projectListContainer.appendChild(projectContainer);
    });
  };

  const emailJs = () => {
    // Initialize EmailJS
    (function () {
      emailjs.init("xSnwB1TABQhOKUY07"); // Replace with your EmailJS user ID
    })();

    // Handle form submission
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send the email using EmailJS
        emailjs
          .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            user_name: name,
            user_email: email,
            message: message,
          })
          .then(
            function (response) {
              console.log("Message sent successfully", response);
              alert("Your message has been sent successfully!");
              document.getElementById("contactModal").classList.add("hidden"); // Hide modal after sending
            },
            function (error) {
              console.log("Failed to send message", error);
              alert("Something went wrong. Please try again.");
            }
          );

        // Optionally, clear the form after submission
        document.getElementById("contactForm").reset();
      });
  };

  const contactBtnLEtsTalk = document.getElementById("contact");

  contactBtnLEtsTalk.addEventListener("click", () => {
    const contactModal = document.getElementById("contactModal");
    if (contactModal) {
      contactModal.classList.remove("hidden");
    }
  });

  projectsMapping();
  toggleAboutMe();
  loadNav();
});
