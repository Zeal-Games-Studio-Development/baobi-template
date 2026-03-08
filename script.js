// === BACK TO TOP ===
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    var btn = document.getElementById("myBtn");
    if (!btn) return;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// === STICKY HEADER SHADOW ON SCROLL ===
window.addEventListener('scroll', function () {
    var header = document.getElementById('siteHeader');
    if (!header) return;
    if (window.scrollY > 60) {
        header.style.boxShadow = '0 4px 18px rgba(0,0,0,0.18)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// === ACTIVE NAV ON SCROLL ===
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section[id], footer[id]');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function setActiveNav() {
        var scrollPos = window.scrollY + 100;
        var current = '';

        sections.forEach(function(sec) {
            if (sec.offsetTop <= scrollPos) {
                current = sec.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.parentElement.classList.remove('active');
            var href = link.getAttribute('href');
            if (href && href === '#' + current) {
                link.parentElement.classList.add('active');
            }
            // Default: highlight TRANG CHỦ if at top
            if (window.scrollY < 100) {
                navLinks[0].parentElement.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
    setActiveNav();

    // === SMOOTH SCROLL FOR ANCHORS ===
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerH = document.getElementById('siteHeader').offsetHeight;
                var offsetTop = target.getBoundingClientRect().top + window.scrollY - headerH - 5;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });

                // Close mobile menu
                var navCollapse = document.getElementById('mainNav');
                if (navCollapse && navCollapse.classList.contains('show')) {
                    navCollapse.classList.remove('show');
                }
            }
        });
    });
});
