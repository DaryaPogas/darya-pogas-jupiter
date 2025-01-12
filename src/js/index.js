const today = new Date();
const currentYear = today.getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML = `\u00A9 ${currentYear} Darya Pogas`;

const skills = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Git', 'End-to-End Testing', 'Cloud Computing', 'Cypress'];
const skillsList = document.querySelector('#skills ul');
for (let i=0; i< skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}
