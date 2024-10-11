let selectedFood = '';
let selectedMovie = '';

function goToPage2(answer) {
    if (answer === 'no') {
        alert("That's okay, maybe another time!");
        return;
    }
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function goToPage3() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
}

function goToPage4() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    if (!date || !time) {
        alert("Please select a date and time!");
        return;
    }
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
}

function selectFood(food) {
    selectedFood = food;
    document.getElementById('selectedFood').textContent = `You selected: ${selectedFood}`;
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'block';
}

function selectMovie(movie) {
    selectedMovie = movie;
    document.getElementById('selectedMovie').textContent = `You selected: ${selectedMovie}`;
    document.getElementById('page5').style.display = 'none';
    document.getElementById('page6').style.display = 'block';
}

function showSummary() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    const excitementLevel = document.getElementById('excitementLevel').value;
    
    document.getElementById('page6').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
    
    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = `
        <p>Date: ${date} at ${time}</p>
        <p>Food: ${selectedFood}</p>
        <p>Movie: ${selectedMovie}</p>
        <p>Excitement Level: ${excitementLevel}/10</p>
    `;
}

// Update excitement value display
document.getElementById('excitementLevel').addEventListener('input', function() {
    document.getElementById('excitementValue').textContent = this.value;
});
