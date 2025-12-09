document.addEventListener('DOMContentLoaded', function () {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    // Si déjà accepté → on cache le bandeau
    if (localStorage.getItem('iso1CookiesAccepted') === '1') {
        banner.style.display = 'none';
        return;
    }

    var acceptBtn = document.getElementById('cookie-accept');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function () {
            localStorage.setItem('iso1CookiesAccepted', '1');
            banner.style.display = 'none';
        });
    }
});
