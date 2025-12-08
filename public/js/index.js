function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

window.showPage = showPage;

function showServiceDetail(serviceType) {

    html += `
        <div style="text-align: center; margin-top: 3rem;">
            <a href="mailto:contact@peek8.com?subject=${encodeURIComponent(service.title)} Inquiry" class="btn btn-primary">Contact Us</a>
        </div>
    `;

    document.getElementById('service-detail-content').innerHTML = html;
    showPage('service-detail');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('onclick')) return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

