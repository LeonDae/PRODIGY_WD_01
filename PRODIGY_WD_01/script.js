document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Handle submenu toggle for touch devices
    const submenuParents = document.querySelectorAll('.submenu-parent');
    submenuParents.forEach(parent => {
        parent.addEventListener('click', function() {
            const submenu = parent.querySelector('.submenu');
            submenu.classList.toggle('visible');
        });
    });
});
