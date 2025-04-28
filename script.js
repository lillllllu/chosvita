// Вітання у консолі
console.log('Ласкаво просимо на сайт АРМА!');

// Тут можна додати майбутню інтерактивність 

document.addEventListener('DOMContentLoaded', function() {
    const mapImg = document.getElementById('ukraine-map');
    const regionItems = document.querySelectorAll('.region-item');
    const defaultMap = 'областиукраины.png';

    regionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            mapImg.src = this.dataset.img;
            regionItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
        item.addEventListener('mouseleave', function() {
            mapImg.src = defaultMap;
            this.classList.remove('active');
        });
    });

    // Плавная прокрутка для всех ссылок в навигации
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 30,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 