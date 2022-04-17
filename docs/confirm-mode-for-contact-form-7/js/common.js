(() => {

    function nav(html) {
        if (html) nav.html = html;
        if (!nav.html) return;
        if (!nav.sidebar) {
            const sidebar = document.querySelector('body > aside');
            if (sidebar) {
                sidebar.insertAdjacentHTML('beforeend', nav.html);
                nav.sidebar = true;
            }
        }
        if (!nav.footer) {
            const footer = document.querySelector('body > footer');
            if (footer) {
                footer.insertAdjacentHTML('afterbegin', nav.html);
                nav.footer = true;
            }
        }
        if (nav.footer && nav.sidebar) ad();
    }
    nav.html = '';
    nav.footer = false;
    nav.sidebar = false;

    fetch('parts/header.html')
        .then(resp => resp.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });

    fetch('parts/footer.html')
        .then(resp => resp.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
            nav();
        });

    fetch('parts/sidebar.html')
        .then(resp => resp.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
            nav();
        });

    fetch('parts/nav.html')
        .then(resp => resp.text())
        .then(html => nav(html));

    function ad() {
        if (ad.ok) return;
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1549609470845206';
        script.crossOrigin = 'anonymous';
        script.async = true;
        document.body.appendChild(script);
        ad.ok = true;
    }
    ad.ok = false;

})();
