document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const spMenu = document.querySelector('.sp-menu');

    if (hamburger && spMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            spMenu.classList.toggle('active');
        });
    }
});