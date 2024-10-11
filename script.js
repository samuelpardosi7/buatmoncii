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
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'block';
}

function selectMovie(movie) {
    selectedMovie = movie;
    document.getElementById('page5').style.display = 'none';
    document.getElementById('page6').style.display = 'block';
}

function showSummary() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    const excitementLevel = document.getElementById('excitementLevel').value;

    document.getElementById('summary').innerHTML = `
        <h2>Summary</h2>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Favorite Food: ${selectedFood}</p>
        <p>Favorite Movie: ${selectedMovie}</p>
        <p>Excitement Level: ${excitementLevel}</p>
    `;
    document.getElementById('page6').style.display = 'block';
}
