let inputNombre = document.querySelector("input#input-nombre");
let inputApellido = document.querySelector("input#input-apellido");
let inputCorreo = document.querySelector("input#input-correo");
let boton = document.querySelector("#boton-agregar");
let botonBuscar = document.querySelector("#boton-buscar");
let listaUsuarios = document.querySelector("#lista-usuarios");
let listaBuscar = document.querySelector("#lista-buscar");
let selectOpciones = document.querySelector("#select-opciones");
let listaUsuariosDatos = []; //Array

boton.addEventListener("click", () => {
    
    if(inputNombre.value.length > 0 && inputApellido.value.length > 0 && inputCorreo.value.length > 0) {
    let nodo = document.createElement("li");
    nodo.textContent = `${inputNombre.value} ${inputApellido.value}`;
    nodo.className = "animate__animated animate__zoomInLeft list-group-item";
    nodo.addEventListener("click", () => {
        nodo.classList.remove("animate__animated");
        nodo.classList.remove("animate__zoomInLeft");
        nodo.classList.add("animate__animated");
        nodo.classList.add("animate__shakeY");
    });

    listaUsuarios.append(nodo);
    inputNombre.value = "";
    inputApellido.value = "";
    inputCorreo.value = "";

    Swal.fire({
        title: 'CORRECTO',
        text: 'Usuario guardado correctamente',
        icon: 'success',
        timer: 1500
        
      })    

    } else{
        Swal.fire({
            title: 'ERROR',
            text: 'Se necesitan mas datos',
            icon: 'error',
            timer: 1500
          })    
    
    }
});


