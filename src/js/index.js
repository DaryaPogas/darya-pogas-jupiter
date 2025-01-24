//footer
const today = new Date();
const currentYear = today.getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML = `\u00A9 ${currentYear} Darya Pogas`;


//skills section
const skills = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Git', 'End-to-End Testing', 'Cloud Computing', 'Cypress'];
const skillsList = document.querySelector('#skills ul');
for (let i=0; i< skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}


//Contact me form
const messageForm = document.getElementById('message__form');
messageForm.addEventListener('submit', function (event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const text = event.target.text.value; 

    console.log('Your Name', name)
    console.log ('Your Email', email)
    console.log ('Your Message', text)

    const messageSection = document.getElementById("messages__list");
    const messageList = messageSection.querySelector('ul');

    if (messageList.children.length === 0) {
      messageSection.style.display = 'block';
    }

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<strong>${name}</strong> (<a href="mailto:${email}">${email}</a>)<br>
      ${text}
      <button type="button" class="remove">Remove</button>`;
    messageList.appendChild(newMessage);
    
    const removeButton = newMessage.querySelector(".remove");
    removeButton.addEventListener("click", function () {
      messageList.removeChild(newMessage);

      if(messageList.children.length === 0){
        messageSection.style.display = 'none'
      }
    });
    messageForm.reset()
});
//hide message section if empty
const messageSection = document.getElementById("messages__list");
const messageList = messageSection.querySelector("ul");
if (messageList.children.length === 0) {
  messageSection.style.display = "none";
}


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
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open'); 
});
