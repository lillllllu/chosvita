// Вітання у консолі
console.log('Ласкаво просимо на сайт АРМА!');

// Тут можна додати майбутню інтерактивність 

document.addEventListener('DOMContentLoaded', function() {
    const mapImg = document.getElementById('ukraine-map');
    const regionItems = document.querySelectorAll('.region-item');
    const defaultMap = 'областиукраины.png';
    let activeRegion = null;

    function handleRegionActivation(item) {
        mapImg.src = item.dataset.img;
        regionItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        activeRegion = item;
    }

    function handleRegionDeactivation() {
        mapImg.src = defaultMap;
        if (activeRegion) {
            activeRegion.classList.remove('active');
            activeRegion = null;
        }
    }

    // Обработка событий для десктопов
    regionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            handleRegionActivation(this);
        });
        item.addEventListener('mouseleave', function() {
            handleRegionDeactivation();
        });
    });

    // Обработка событий для мобильных устройств
    regionItems.forEach(item => {
        item.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Предотвращаем стандартное поведение
            if (activeRegion === this) {
                handleRegionDeactivation();
            } else {
                handleRegionActivation(this);
            }
        });
    });

    // Закрытие активного региона при клике вне его
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.region-item')) {
            handleRegionDeactivation();
        }
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