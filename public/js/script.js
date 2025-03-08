// Navbar

window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger

const hamburgerBtn = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburgerBtn.addEventListener('click', () => {
    // menambahkan class bila tidak ada
    // menghapus class kalau sudah ada
    hamburgerBtn.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})