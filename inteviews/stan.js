//Mobile-menu-
//get access to:
const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu");
// const menuCancelButton = document.querySelector(".menu-cancel");

// //addEventListener for clicking action
// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.add("active");
// });

// menuCancelButton.addEventListener("click", () => {
//   navMenu.classList.remove("active");
// });

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Details-popup-window
const projectContainer = document.querySelector(".work-section");
const modalContainer = document.querySelector(".overlay");
const mainModalContainer = document.querySelector(".modal-window");
const wholeCont = document.querySelector(".background-blur");

const projects = [
  {
    featuredImage: "./desktop/1 Snapshoot Portfolio,png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "javascript"],
    modalName: "Tonic",
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
  {
    featuredImage: "./images/Snapshoot_one.png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modalName: "Toni",
    technologies: ["HTML", "CSS", "javascript"],
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
  {
    featuredImage: "./images/Snapshoot_two.png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "javascript"],
    modalName: "Toni",
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
  {
    featuredImage: "./images/Snapshoot_three.png",
    name: "Tonic",
    information: ["Canopy", "Back End Dev", "2015"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "javascript"],
    modalName: "Toni",
    demo: "https://sammy3000.github.io/",
    source: "https://github.com/Sammy3000/Sammy3000.github.io",
  },
];

// Render mobile portfolio
projects.forEach((project, index) => {
  let tech = "";
  project.technologies.forEach((techno) => {
    tech += `
    <li class="btn">
     ${techno}
    </li>`;
  });

  let info = "";
  project.information.forEach((infoItem) => {
    info += `<li class="canopy">
     ${infoItem}
    </li>`;
  });

  const eachProject = `

  <div class="project-card">
  <img
    class="snapshot-portfolio-img"
    src=${project.featuredImage}
    alt="snapshot-portfolio"
  />

  <div class="project-text">
    <h2 class="project-title">
    ${project.name}</h2>
    <div class="counter">
    ${info}
    </div>

    <div class="primary-text">
    ${project.description}
    </div>
    <div class="languages">
      <ul class="programming-languages">
      ${tech}
      </ul>
    </div>
    <div class="text-see-project">
      <a class="see-project-button" id=${index} href="#">See Project</a>
    </div>
  </div>
</div>

  `;
  projectContainer.innerHTML += eachProject;
});

// Render Desktop
const desktopProjects = [
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
  {
    name: "Multi Post Stories",
    technologies: ["Facebook", "Fullstack Dev", "2015"],
    information:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    desktopImages: "./images/Snapshoot_five.png",
  },
];

desktopProjects.forEach((desktopProject, desktopIndex) => {
  console.log(desktopProject);
  let technology = "";
  desktopProject.technologies.forEach((techItem) => {
    technology += ` <li class="canopy">${techItem}</li>`;
  });
  let language = "";
  desktopProject.languages.forEach((lang) => {
    language += `<li class="programming-languages"><span>${lang}</span></li>`;
  });

  const eachDesktopProject = `
  <div class="project-card">
//add images
  <div class="project-text">
    <h2 class="project-title">
    <div class="counter">
    ${desktopProject.desktopImages}
    </div>
    ${desktopProject.name}</h2>
    <div class="counter">
    ${technology}
    </div>

    <div class="primary-text">
    ${desktopProject.information}
    </div>
    <div class="languages">
      <ul class="programming-languages">
      ${language}
      </ul>
    </div>
    <div class="text-see-project">
      <a class="see-project-button" id=${desktopIndex} href="#">See Project</a>
    </div>
  </div>
</div>
`;
  projectContainer.innerHTML += eachDesktopProject;
});

const projectButtons = document.querySelectorAll(".text-see-project");

const modalContent = (project) => {
  let technologie = "";
  project.technologies.forEach((lang) => {
    technologie += `<li class="programming-languages"><span>${lang}</span></li>`;
  });
  let info = "";
  project.information.forEach((infoItem) => {
    info += `<li class="canopy">
     ${infoItem}
    </li>`;
  });

  const popup = `
  <div class="modal-content">
  <div class="modal-header">
    <h2 class="modal-name">${project.modalName}
  </h2>
  </div>
  <div class="modal-canopy">
      <ul class="modal-canopy-text">
        ${info}
      </ul>
    </div>

    <img
    class="modal-snapshot-portfolio-img"
    src="desktop/1 Snapshoot Portfolio.png"
    alt="snapshot-portfolio"
    />

    <img
      class="desktop-snapshot-portfolio-img"
      src=${project}
      alt="snapshot-portfolio"
    />

    <div class="modal-supporting-text">
      <div class="paragraph">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the releorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum han printer took a galley of
          type and scrambled it 1960s with the releawn printer took a galley
          of type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the relea
        </p>
      </div>
      <div class="tech-buttons">
      <div class="languages">
      <ul class="programming-languages">
      ${technologie}
      </ul>
    </div>
            <div class="modal-button">
              <a href="${project.demo}" class="modal-btn"
                ><span>See Demo</span>
                <img src="images/Icon.png" alt="live" width="10" height="10"
              /></a>
              <a href="${project.source}" class="modal-btn"
                ><span>See Source</span>
                <img
                  src="images/github-vector.png"
                  alt="github link"
                  width="10"
                  height="10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  
  `;
  modalContainer.innerHTML = popup;
  mainModalContainer.style.visibility= "visible";
  mainModalContainer.style.display = "block";
  wholeCont.style.display = "none";
};

projectButtons.forEach((projectBtn) => {
  projectBtn.addEventListener("click", (e) => {
    const getBtnId = e.target.getAttribute("id");
    console.log(projects[getBtnId]);
    const projectObj = projects[getBtnId];
    modalContent(projectObj);
  });
});
const closeModalButton = document.querySelector(".close-modal");

closeModalButton.addEventListener("click", () => {
  mainModalContainer.style.display = "none";
  wholeCont.style.display = "block";
});
