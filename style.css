let selectedFood = '';
let selectedMovie = '';

function showPage(pageId) {
    document.querySelectorAll('.container > div').forEach(div => div.classList.add('hidden'));
    const newPage = document.getElementById(pageId);
    newPage.classList.remove('hidden');
    newPage.classList.add('bounce');
    setTimeout(() => newPage.classList.remove('bounce'), 1000);
    
    if (pageId === 'page7') {
        displayDateTime();
    }
}

function showNoAnimation() {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
}

function selectFood(element, food) {
    document.querySelectorAll('.food-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedFood = food;
    element.classList.add('bounce');
    setTimeout(() => element.classList.remove('bounce'), 1000);
}

function selectMovie(element, movie) {
    document.querySelectorAll('.movie-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedMovie = movie;
    element.classList.add('bounce');
    setTimeout(() => element.classList.remove('bounce'), 1000);
}

function displayDateTime() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    const displayElement = document.getElementById('dateTimeDisplay');
    displayElement.textContent = `on ${date} at ${time}`;
    displayElement.classList.add('bounce');
    setTimeout(() => displayElement.classList.remove('bounce'), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('excitementSlider');
    if (slider) {
        slider.addEventListener('input', () => {
            const value = slider.value;
            const hue = (value / 100) * 120; // 0 to 120 (red to green)
            slider.style.background = `hsl(${hue}, 100%, 50%)`;
        });
    }
});

function addFloatingHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '24px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(addFloatingHearts, 300);
