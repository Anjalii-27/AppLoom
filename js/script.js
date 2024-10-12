// Scroll to top button functionality
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll ', function() {
    if (window.scrollY > 500) {
        document.getElementById('scrollBtn').style.display = 'block';
    } else {
        document.getElementById('scrollBtn').style.display = 'none';
    }
});

document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});