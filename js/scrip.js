const reemplazos = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const reemplazosEncriptado = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

let buttonCopiar = document.querySelector(".copiarText");

function encriptarCodigo() {
  let capturarText = document.querySelector("#inputText");
  let outputSectionBox = document.querySelector(".outputSection-box");
  let outputSection = document.querySelector("#outputSection");
  let textNoEncontrado = document.querySelector(".mensaje-section ");
  let textoEncriptador = "";
  let resultado = document.querySelector(".resultado");

  if (capturarText.value == "") {
    textNoEncontrado.style.display = "block";
    outputSectionBox.style.display = "none";
    outputSection.style.display = "none";
  } else {
    for (let i = 0; i < capturarText.value.length; i++) {
      const letraActual = capturarText.value[i];
      textoEncriptador += reemplazos[letraActual] || letraActual;
    }
    outputSectionBox.style.display = "flex";
    outputSection.style.display = "none";
    textNoEncontrado.style.display = "none";
  }

  resultado.innerHTML = textoEncriptador;
  capturarText.value = "";
}

function desencriptarCodigo() {
  let capturarText = document.querySelector("#inputText");
  let outputSection = document.querySelector("#outputSection");
  let outputSectionBox = document.querySelector(".outputSection-box");
  let textNoEncontrado = document.querySelector(".mensaje-section ");
  let textoDesencriptado = capturarText.value;
  let resultado = document.querySelector(".resultado");

  if (capturarText.value == "") {
    textNoEncontrado.style.display = "block";
    outputSectionBox.style.display = "none";
    outputSection.style.display = "none";
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
  }

  resultado.innerHTML = textoDesencriptado;
  capturarText.value = "";
}

function copiar() {
  let pElement = document.querySelector(".resultado");
  let textoEncriptado = pElement.textContent.trim();

  try {
    navigator.clipboard.writeText(textoEncriptado);
    console.log("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar el texto al portapapeles", err);
  }
}
