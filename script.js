let dayNight = document.getElementById("day-night");
dayNight.addEventListener("click", darkTheme);

function darkTheme() {
    document.body.classList.toggle("dark-theme");
}


let uaEn = document.getElementById("ua-en");
uaEn.addEventListener("click", changeLang);

function changeLang() {
    let i = alert("i");
    document.body.classList.toggle("ua-lang");
}