document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("container").classList.add("hidden");
    document.getElementById("happyCat").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function() {
    alert("Maybe next time!");
});

document.getElementById("clickMe").addEventListener("click", function() {
    document.getElementById("happyCat").classList.add("hidden");
    document.getElementById("dateTime").classList.remove("hidden");
});

document.getElementById("continueDate").addEventListener("click", function() {
    document.getElementById("dateTime").classList.add("hidden");
    document.getElementById("foodChoice").classList.remove("hidden");
});

let selectedFood = null;
document.querySelectorAll(".food-image").forEach(function(img) {
    img.addEventListener("click", function() {
        selectedFood = img.dataset.value;
        document.querySelectorAll(".food-image").forEach(function(img) {
            img.style.opacity = img.dataset.value === selectedFood ? "1" : "0.5";
        });
    });
});

document.getElementById("continueFood").addEventListener("click", function() {
    if (selectedFood) {
        document.getElementById("foodChoice").classList.add("hidden");
        document.getElementById("movieChoice").classList.remove("hidden");
    } else {
        alert("Please select a food.");
    }
});

let selectedMovie = null;
document.querySelectorAll(".movie-image").forEach(function(img) {
    img.addEventListener("click", function() {
        selectedMovie = img.dataset.value;
        document.querySelectorAll(".movie-image").forEach(function(img) {
            img.style.opacity = img.dataset.value === selectedMovie ? "1" : "0.5";
        });
    });
});

document.getElementById("continueMovie").addEventListener("click", function() {
    if (selectedMovie) {
        document.getElementById("movieChoice").classList.add("hidden");
        document.getElementById("excitement").classList.remove("hidden");
    } else {
        alert("Please select a movie.");
    }
});

document.getElementById("continueExcitement").addEventListener("click", function() {
    const date = document.getElementById("datePicker").value;
    document.getElementById("finalDate").textContent = date || "the selected date";
    document.getElementById("excitement").classList.add("hidden");
    document.getElementById("finalMessage").classList.remove("hidden");
});
