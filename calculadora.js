const pantalla = document.getElementById("pantalla");

function valor(value){
    pantalla.value += value;
}

function borrar(){
    pantalla.value = "";
}

function borraruno(){
    pantalla.value = pantalla.value.slice(0, -1);
}

function resultado(){
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = "Error";
    }
}

const calculadora = document.getElementById("calculadora");

let escala = 1;

function zoomIn() {
  if (escala < 1.20)  // Limitar el zoom máximo
  escala += 0.1;
  document.getElementById("calculadora").style.transform = `scale(${escala})`;
}

function zoomOut() {
  if (escala > 0.80) {
    escala -= 0.1;
    document.getElementById("calculadora").style.transform = `scale(${escala})`;
  }
}
