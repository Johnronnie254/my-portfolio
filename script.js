document.addEventListener('DOMContentLoaded', () => {
    const bioButtons = document.querySelectorAll('.bio-button');
    const projectButtons = document.querySelectorAll('.project-button');
    const homeButtons = document.querySelectorAll('.home-button');

    bioButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.bio').classList.add('page-visible');
            document.querySelector('.home').classList.remove('page-visible');
            document.querySelector('.projects').classList.remove('page-visible');
        });
    });

    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.bio').classList.remove('page-visible');
            document.querySelector('.home').classList.remove('page-visible');
            document.querySelector('.projects').classList.add('page-visible');
        });
    });

    homeButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.bio').classList.remove('page-visible');
            document.querySelector('.home').classList.add('page-visible');
            document.querySelector('.projects').classList.remove('page-visible');
        });
    });
});
