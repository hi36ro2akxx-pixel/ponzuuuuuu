document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const spMenu = document.querySelector('.sp-menu');
    const closeBtn = document.querySelector('.close-btn');
    const spMenuLinks = document.querySelectorAll('.sp-menu-list a, .sp-menu-contact-btn');

    // ハンバーガーを押して開閉
    if (hamburger && spMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            spMenu.classList.toggle('active');
        });
    }

    // ×ボタンを押して閉じる
    if (closeBtn && spMenu) {
        closeBtn.addEventListener('click', function() {
            hamburger.classList.remove('active');
            spMenu.classList.remove('active');
        });
    }

    // メニュー内のリンクを押したら閉じる
    spMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            spMenu.classList.remove('active');
        });
    });
});