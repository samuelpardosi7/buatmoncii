let selectedDate = '';
let selectedTime = '';
let selectedFood = '';
let selectedMovie = '';
let excitementLevel = 50; // Nilai default untuk slider

function showPage(pageId) {
    // Validasi sebelum melanjutkan ke page4
    if (pageId === 'page5' && !selectedFood) {
        alert('Please select a food option before continuing.');
        return;
    }
    
    // Validasi sebelum melanjutkan ke page5
    if (pageId === 'page6' && !selectedMovie) {
        alert('Please select a movie option before continuing.');
        return;
    }

    // Validasi sebelum melanjutkan ke page6
    if (pageId === 'page7' && (!selectedDate || !selectedTime)) {
        alert('Please select a date and time before continuing.');
        return;
    }

    // Menyembunyikan semua halaman
    document.querySelectorAll('.container > div').forEach(div => div.classList.add('hidden'));
    const newPage = document.getElementById(pageId);
    newPage.classList.remove('hidden');
    newPage.classList.add('bounce');
    setTimeout(() => newPage.classList.remove('bounce'), 1000);
    
    // Jika mencapai page7, tampilkan ringkasan
    if (pageId === 'page7') {
        displayResults(); // Memanggil fungsi displayResults() saat halaman terakhir
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

function displayResults() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    dateTimeDisplay.innerHTML = `
        <h2>Summary of Your Date Plan:</h2>
        <ul>
            <li><strong>Date:</strong> ${selectedDate || 'Not selected yet'}</li>
            <li><strong>Time:</strong> ${selectedTime || 'Not selected yet'}</li>
            <li><strong>Food Choice:</strong> ${selectedFood || 'Not selected yet'}</li>
            <li><strong>Movie Choice:</strong> ${selectedMovie || 'Not selected yet'}</li>
            <li><strong>Excitement Level:</strong> ${excitementLevel}%</li>
        </ul>
        <p>We're excited for your date! Have a great time!</p>
        <p><strong>Please screenshot this and send to me! :D</strong></p>
    `;
}

document.getElementById('dateInput').addEventListener('change', (event) => {
    selectedDate = event.target.value;
});

document.getElementById('timeInput').addEventListener('change', (event) => {
    selectedTime = event.target.value;
});

document.getElementById('excitementSlider').addEventListener('input', (event) => {
    excitementLevel = event.target.value;
});

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
