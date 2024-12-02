

function Agregar(value){
    const boton = value
    console.log(boton)
    const pantalla = document.getElementById("pantalla").value+=value; //esto concatena los valores que metamos

}

function less(){
    const pantalla = document.getElementById("pantalla");
    const currentValue = pantalla.value;
    pantalla.value = currentValue.slice(0, -1);
}

function Limpiar(){
    document.getElementById("pantalla").value = ""; 
}

function calcular() {
    try {
        const res = eval(document.getElementById("pantalla").value); //la funcion eval() enaliza la expresion de cadena y devuelve su valor
        document.getElementById("pantalla").value=res;
    } catch(error){
        document.getElementById("pantalla").value = "Error";
    }
}

