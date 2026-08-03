// ハンバーガーメニューの開閉処理
const hamburger = document.querySelector('.hamburger-menu');
const body = document.body;

if (hamburger) {
    hamburger.addEventListener('click', () => {
        body.classList.toggle('menu-open');
    });
}

// メニュー内のリンクをクリックしたらメニューを閉じる処理
const menuLinks = document.querySelectorAll('.sp-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('menu-open');
    });
});