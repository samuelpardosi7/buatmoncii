let selectedFood = '';
let selectedMovie = '';

function showPage(pageId) {
    document.querySelectorAll('.container > div').forEach(div => div.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    if (pageId === 'page7') {
        displayDateTime();
    }
}

function showNoAnimation() {
    document.body.style.backgroundColor = '#ffcccc';
    setTimeout(() => {
        document.body.style.backgroundColor = '#f0f0f0';
    }, 300);
}

function selectFood(element, food) {
    document.querySelectorAll('.food-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedFood = food;
}

function selectMovie(element, movie) {
    document.querySelectorAll('.movie-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedMovie = movie;
}

function displayDateTime() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    document.getElementById('dateTimeDisplay').textContent = `on ${date} at ${time}`;
}
