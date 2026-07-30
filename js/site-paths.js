(() => {
    const paths = {
        '../1 home_page_final_with_active_nav_social_footer/code.html': 'index.html',
        '../2 services_page_with_updated_nav/code.html': 'services.html',
        '../3 industries_page_with_updated_nav/code.html': 'industries.html',
        '../4 Products/code.html': 'products.html',
        '../4 Products/dynamic-pay.html': 'dynamic-pay.html',
        '../5 blog_page_with_updated_nav/code.html': 'blog.html',
        '../6 about_page_d_y_n_a_m_i_c_core_dna/code.html': 'about.html',
        '../contact_page_with_updated_nav/code.html': 'contact.html',
        '../404_page_neutral_nav_with_animation/code.html': '404.html',
        '../media_2.jpg/': 'images/',
        '../responsive-nav.js': 'js/responsive-nav.js',
        'EFI.png': 'images/EFI.png',
        'Job.jpg': 'images/Job.jpg',
        'James.jpg': 'images/James.jpg'
    };

    const rewrite = (value) => {
        if (!value) return value;
        if (value === 'code.html') return 'products.html';
        return Object.entries(paths).reduce((result, [from, to]) => result.split(from).join(to), value);
    };

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[href], [src]').forEach((element) => {
            ['href', 'src'].forEach((attribute) => {
                if (element.hasAttribute(attribute)) element.setAttribute(attribute, rewrite(element.getAttribute(attribute)));
            });
        });

        document.querySelectorAll('[onclick]').forEach((element) => {
            element.setAttribute('onclick', rewrite(element.getAttribute('onclick')));
        });
    });
})();
