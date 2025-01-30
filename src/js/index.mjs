//footer
const today = new Date();
const currentYear = today.getFullYear();
const footer = document.querySelector("footer");
footer.innerHTML = `\u00A9 ${currentYear} Darya Pogas`;

//skills section
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "GitHub",
  "Git",
  "End-to-End Testing",
  "Cloud Computing",
  "Cypress",
];
const skillsList = document.querySelector("#skills ul");
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

// Contact me form
const messageForm = document.getElementById("message__form");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const text = event.target.text.value.trim();


  console.log("Your Name", name);
  console.log("Your Email", email);
  console.log("Your Message", text);

  const messageSection = document.getElementById("messages__list");
  const messageList = messageSection.querySelector("ul");

  
  if (messageList.children.length === 0) {
    messageSection.style.display = "block";
  }

  
  const newMessage = document.createElement("li");

  
  const nameElement = document.createElement("div");
  nameElement.innerHTML = `<strong>${name}</strong>`;

  const emailElement = document.createElement("div");
  emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;

  const textElement = document.createElement("div");
  textElement.textContent = text;
  textElement.classList.add("message-text");

  
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-btn");

  
  removeButton.addEventListener("click", function () {
    newMessage.remove();
    toggleMessageSection();
  });

 
  newMessage.appendChild(nameElement);
  newMessage.appendChild(emailElement);
  newMessage.appendChild(textElement);
  newMessage.appendChild(removeButton);

  
  messageList.appendChild(newMessage);


  messageForm.reset();

 
  toggleMessageSection();
});


function toggleMessageSection() {
  const messageSection = document.getElementById("messages__list");
  const messageList = messageSection.querySelector("ul");

  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}
toggleMessageSection();


// Sidepanel animation
window.addEventListener("load", () => {
  const sidepanel = document.querySelector(".sidepanel");
  const text = document.querySelector(".sidepanel__text span");

  sidepanel.classList.add("visible");

  divider.classList.add("visible");

  setTimeout(() => {
    text.style.opacity = 1;
  }, 500);
});

// hamburger menu for mobile screen
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});



//* * * * * * * * F * E * T * C * H * * * * * * * * * * * * 

// import fetch from "node-fetch";

// Create a fetch request to the GitHub API
fetch(`https://api.github.com/users/DaryaPogas/repos`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then((repositories) => {
    console.log('repositories:', repositories);
    displayRepositories (repositories);
  })
  .catch((error) => {
    console.error('An error occurred', error);
    displayError(error)
  });


const projectSection = document.getElementById('projects')
const projectList = projectSection.querySelector('ul');

function displayRepositories(repositories){
    projectList.innerHTML = '';
    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      let link = document.createElement("a");

      link.textContent = repositories[i].name;
      link.href = repositories[i].html_url;
      link.target = "_blank";

      //project.innerHTML = repositories[i].name;
      project.appendChild(link);
      projectList.appendChild(project);
    }
}

function displayError (error){
  const errorMessage = document.createElement('p');
  errorMessage.textContent = `Error: ${error.message}`
  projectSection.appendChild(errorMessage)
}
