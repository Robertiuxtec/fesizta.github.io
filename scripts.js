function mostrarFormulario(programa) {
  let formularioNumero = programa.replace("Programa", "");
  formularioNumero = parseInt(formularioNumero);

  if (!isNaN(formularioNumero)) {
    const formularioNombre = `formulario${formularioNumero}.html`;
    window.location.href = formularioNombre;
  }
}

function regresar() {
  // Redirigir a la página principal (ajusta la URL según tu estructura)
  window.location.href = "mipagina.html";
}

function imprimir() {
  // Imprimir la página actual
  window.print();
}

function enviar() {
  // Aquí podrías implementar la lógica para generar un PDF y enviarlo por correo.
  // Ten en cuenta que esto generalmente se hace en un servidor debido a restricciones de seguridad.
  // Si tienes un servidor, puedes hacer una solicitud (por ejemplo, con fetch) a una URL que maneje esta lógica.
  // Pero para este ejemplo, simplemente mostraré un mensaje en la consola.
  console.log("Generando PDF y enviando correo...");
}

