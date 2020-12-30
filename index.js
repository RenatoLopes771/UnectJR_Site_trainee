// Lógica da aba dúvidas

function openForm() {
    document.getElementById("popup-perguntas").style.display = "block";
    document.getElementById("duvidas").style.display = "none";
    document.documentElement.style.setProperty("--c", "35%");
    document.documentElement.style.setProperty("--g", "85%");
}
  
function closeForm() {
    document.getElementById("popup-perguntas").style.display = "none";
    document.getElementById("duvidas").style.display = "block";
    document.documentElement.style.setProperty("--c", "100%");
    document.documentElement.style.setProperty("--g", "0%");
} 

// Lógica slideshow

function slideButton() {

    if (x == 1) {
        document.getElementById("img1").style.display = "none"; // avengers
        document.getElementById("img2").style.display = "block"; // team
        document.getElementById("button-left").style.display = "block";
        document.getElementById("button-right").style.display = "none";
    } else {
        document.getElementById("img1").style.display = "block"; // avengers
        document.getElementById("img2").style.display = "none"; // team
        document.getElementById("button-left").style.display = "none";
        document.getElementById("button-right").style.display = "block";
    }

    x = x * -1;
}

function send() {
    // TODO enviar as informações ao servidor
    closeForm();
}

x = 1;