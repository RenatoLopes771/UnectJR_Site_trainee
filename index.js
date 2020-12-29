// Lógica da aba dúvidas

function openForm() {
    document.getElementById("popup-perguntas").style.display = "block";
    document.documentElement.style.setProperty("--c", "35%");
    document.documentElement.style.setProperty("--g", "85%");
}
  
function closeForm() {
    document.getElementById("popup-perguntas").style.display = "none";
    document.documentElement.style.setProperty("--c", "100%");
    document.documentElement.style.setProperty("--g", "0%");
} 

function send() {
    // TODO enviar as informações ao servidor
    closeForm();
}