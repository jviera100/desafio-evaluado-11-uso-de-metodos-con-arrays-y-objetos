document.addEventListener('DOMContentLoaded', function() {
    var radiologia = [
        {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
        {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
        {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
        {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
        {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
    ];

    var traumatologia = [
        {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
        {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
        {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
        {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
        {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
        {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
        {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
    ];

    var dental = [
        {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
        {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
        {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
        {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
        {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
        {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
    ];

    // Requerimiento 1: Agregar las nuevas horas al arreglo de Traumatología y mostrar en la página HTML
    traumatologia.push(
        {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
        {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
        {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
        {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
        {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
    );

    document.write('<h3>Consultas Médicas de Traumatología</h3>');
    traumatologia.forEach(consulta => {
        document.write(`<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`);
    });

    // Requerimiento 2: Eliminar el primer y último elemento del arreglo de Radiología y mostrar en la página HTML
    radiologia.shift();
    radiologia.pop();

    document.write('<h3>Consultas Médicas de Radiología</h3>');
    radiologia.forEach(consulta => {
        document.write(`<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`);
    });

    // Requerimiento 3: Imprimir en la página HTML la lista de consultas médicas de Dental
    document.write('<h3>Consultas Médicas de Dental</h3>');
    dental.forEach(consulta => {
        document.write(`<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`);
    });

    // Requerimiento 4: Imprimir un listado total de todos los pacientes que se atendieron en el centro médico
    document.write('<h3>Listado de Pacientes Atendidos</h3>');
    const pacientesAtendidos = radiologia.concat(traumatologia, dental).map(consulta => consulta.paciente);
    pacientesAtendidos.forEach(paciente => {
        document.write(`<p>${paciente}</p>`);
    });

    // Requerimiento 5: Filtrar pacientes de ISAPRE en la lista de consultas médicas de Dental
    const pacientesIsapreDental = dental.filter(consulta => consulta.prevision === 'ISAPRE');
    document.write('<h3>Pacientes de ISAPRE en Dental</h3>');
    pacientesIsapreDental.forEach(consulta => {
        document.write(`<p>${consulta.paciente} - ${consulta.prevision}</p>`);
    });

    // Requerimiento 6: Filtrar pacientes de FONASA en la lista de consultas médicas de Traumatología
    const pacientesFonasaTraumatologia = traumatologia.filter(consulta => consulta.prevision === 'FONASA');
    document.write('<h3>Pacientes de FONASA en Traumatología</h3>');
    pacientesFonasaTraumatologia.forEach(consulta => {
        document.write(`<p>${consulta.paciente} - ${consulta.prevision}</p>`);
    });

    // Imprimir cantidad de atenciones por especialidad
    document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
    document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
    document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);
});
