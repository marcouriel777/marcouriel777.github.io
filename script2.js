const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() {
    modal.style.display = 'none';
}

slides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
        openModal(slide.querySelector('img').src);
    });
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

closeBtn.addEventListener('click', closeModal);

showSlide(currentSlide);
