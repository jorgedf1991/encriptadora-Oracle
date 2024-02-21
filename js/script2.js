function encriptarTexto() {
  var inputText = document.getElementById("inputText").value;
  // Aquí implementa la lógica para encriptar el texto
  // Por ahora, simplemente mostraremos el texto original en el área de resultado
  var outputText = inputText;

  // Muestra la sección de resultado
  var outputSection = document.getElementById("outputSection");
  outputSection.style.display = "block";

  // Actualiza el área de resultado
  document.getElementById("outputText").value = outputText;
}
