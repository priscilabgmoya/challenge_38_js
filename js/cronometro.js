/**
 * Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
 */
const segundos = document.getElementById("segundos"),
    minutos = document.getElementById("minutos"),
    horas = document.getElementById("hora"),
    contenedorPausaContinuar = document.getElementById("contenedorBtnPausarContinuar");
    
let cronometro,
    contadorSegundo = 0,
    contadorMinuto = 0,
    contadorHora = 0;

function iniciarCronometro() {
    cronometro = setInterval(iniciarContador, 1000);
    const btnPausar = document.getElementById("btnPausar");
    btnPausar.removeAttribute("disabled"); 
}
function resetearCronometro() {
    window.location.reload();
}
function pausarCronometro() {
    let btnContinuar = document.createElement("button"); 
    btnContinuar.innerText ="Continuar"; 
    btnContinuar.id= "btnContinuar"
    btnContinuar.classList.add("btn","btn-info", "mx-2"); 
    btnContinuar.onclick = continuarCronometro; 
    contenedorPausaContinuar.appendChild(btnContinuar); 
   clearInterval(cronometro); 
}
function continuarCronometro(){
    let btnContinuar = document.getElementById("btnContinuar");
    contenedorPausaContinuar.removeChild(btnContinuar); 
    cronometro = setInterval(iniciarContador, 1000);
}
function iniciarContador() {
    contadorSegundo++;
    segundos.innerText = modificarTiempo(contadorSegundo);
    if (contadorSegundo == 59) {
        contadorSegundo = 0;
        segundos.innerText = modificarTiempo(contadorSegundo);
        contadorMinuto++;
        minutos.innerText = modificarTiempo(contadorMinuto);

        if (contadorMinuto == 59) {
            contadorMinuto = 0;
            minutos.innerText = modificarTiempo(contadorMinuto);
            contadorHora++;
            horas.innerText = modificarTiempo(contadorHora);
        }
    }
}
function modificarTiempo(times) {
    return times.toString().padStart(2, '0');
}
