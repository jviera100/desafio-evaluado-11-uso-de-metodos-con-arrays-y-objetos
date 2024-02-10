$(document).ready(function () {
});
// Tooltip initialization

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(document).ready(function () {
    // Tooltip initialization
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Evento click
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });

    // Selectores de etiqueta
    $("h3#ingredientes, h3#preparacion").dblclick(function () 
    {
        $(this).css("color", "red");
    });

    // Selectores de clase carusel ocultar/mostrar
    $("h2").click(function () {         // click en elemento
        $("#carusel-section").toggle();     // ocultar/mostrar el carrusel
    });
});
