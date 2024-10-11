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
    document.getElementById('page4').
