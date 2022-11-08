const darkModeToggle = document.getElementById('darkMode');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
});