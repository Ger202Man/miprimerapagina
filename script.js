//alert("Hola este es mi Javascript");

//let nombre = "German";

//console.log(nombre)

let Acerca = "Acerca de mi";

let Acerca1 = document.querySelector( ".acerca-de-mi" );
Acerca1.innerHTML = Acerca;
console.log(Acerca1)

let textotitulo = Acerca1.innerText;
console.log(textotitulo);

//if (textotitulo == "Acerca de mi") {
   // Acerca1.innerHTML = "Acerca";
//} else {
//    console.log ("no se cumple"); 
//}

//let nombre = "Apache"
//let ciudad = "Miami"
//let cosa = "Aguacate"

//let parrafo = document.querySelector (".parrafo2");

//function cambiarTexto(nombre,ciudad,cosa) {
    //let contenido = me llamo ${nombre} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    //standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
    //it to make a type specimen book. It has survived not only five centuries, but also the leap 
    //into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
   // the release of ${ciudad} sheets containing Lorem Ipsum passages, and more recently with ${cosa} 
    //publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    //return contenido
//}

//parrafo.innerText = cambiarTexto(nombre,ciudad,cosa);

let menu_responsive = document.querySelector(".checkbtn");

    menu_responsive.onclick = function () {
       navBar = document.querySelector(".menu_n");
       navBar.classList.toggle("active");
    };




const form = document.getElementById("formu");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alerta");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});