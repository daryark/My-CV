let dayNight = document.getElementById("day-night");
dayNight.addEventListener("click", darkTheme);

function darkTheme() {
    document.body.classList.toggle("dark-theme");
}
