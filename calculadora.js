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