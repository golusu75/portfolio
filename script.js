// script.js

// Smooth scroll to section on navigation link click
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project filtering
const projectFilter = document.getElementById('projectFilter');
const projectList = document.getElementById('projectList');

projectFilter.addEventListener('input', () => {
    const filterValue = projectFilter.value.toLowerCase();
    const projects = projectList.querySelectorAll('.project');

    projects.forEach(project => {
        const projectName = project.querySelector('h3').textContent.toLowerCase();
        if (projectName.includes(filterValue)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
});
