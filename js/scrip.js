const reemplazos = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const notificacion = document.querySelector(".notificacion");
const buttonCopiar = document.querySelector(".copiarText");
const reemplazosEncriptado = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

function encriptarCodigo() {
  let capturarText = document.querySelector("#inputText");
  let resultado = document.querySelector(".outputSection-box");
  let outputSection = document.querySelector("#outputSection");
  let textoEncriptador = "";

  if (capturarText.value == "") {
    notificacion.innerHTML = "No has ingresado ningún Texto.";
    buttonCopiar.style.display = "none";
    console.log(notificacion);
  } else {
    for (let i = 0; i < capturarText.value.length; i++) {
      const letraActual = capturarText.value[i];
      textoEncriptador += reemplazos[letraActual] || letraActual;
    }
     buttonCopiar.style.display = "block";
  }

  outputSection.style.display = "block";
  resultado.innerHTML = textoEncriptador;
  capturarText.value = "";
}

function desencriptarCodigo() {
  let capturarText = document.querySelector("#inputText");
  let resultado = document.querySelector(".outputSection-box");
  let textoDesencriptado = capturarText.value; 

  if (capturarText.value == "") {
    notificacion.innerHTML = "No has ingresado ningún Texto.";
    buttonCopiar.style.display = "none";
  } else {
    for (let clave in reemplazosEncriptado) {
      if (reemplazosEncriptado.hasOwnProperty(clave)) {
        const expresionRegular = new RegExp(clave, "g");
        textoDesencriptado = textoDesencriptado.replace(
          expresionRegular,
          reemplazosEncriptado[clave]
        );
      }
    }
    console.log(textoDesencriptado);
     buttonCopiar.style.display = "block";
  }

  resultado.innerHTML = textoDesencriptado;
  capturarText.value = "";
}

function copiar() {
  let pElement = document.querySelector(".resultado");

  try {
    navigator.clipboard.writeText(pElement.textContent);
    console.log("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar el texto al portapapeles", err);
  }
}
