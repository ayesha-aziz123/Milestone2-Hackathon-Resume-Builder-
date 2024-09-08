const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none' || !skillsList.style.display) {
        skillsList.style.display = 'block';
    } else {
        skillsList.style.display = 'none';
    }
});
