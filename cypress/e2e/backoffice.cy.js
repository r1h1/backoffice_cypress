/*
Autor: Daniel Rivas
Fecha: 30/05/2023
*/

//URL A LA QUE SE EJECUTARÁ EL CONJUNTO DE PRUEBAS
var urlAProbar = 'https://dev.bowtietech.pro/Ebigo/#/';

describe("Conjunto de pruebas para BackOffice - ebiGO - v1.0.0", () => {

    it("Inicio de sesión", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get('.nav > :nth-child(1) > .nav-link').click();
    });

    //CERRAR SESIÓN NO SE PUEDE AUTOMATIZAR

    it("Recuperación de contraseña", () => {
        cy.visit(urlAProbar);
        cy.get('u').click();
        cy.get('.form-control').type("drivas@ebigo.com.gt");
        cy.get('.btn').click();
        //SE DEBE AGREGAR MANUALMENTE EL CÓDIGO QUE SE ENVIÓ AL CORREO
    });

    it("Probar métricas de flujo de dinero y flujo de efectivo", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get('.nav > :nth-child(1) > .nav-link').click();
        cy.get('#flujo').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#ngb-nav-5').click();
    });

    it("Validar opciones de administrador", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#ngb-nav-5').click();
        //EXPORTA A EXCEL
        cy.get('thead > div > .btn').click();
        cy.get('.swal2-popup').contains("Finalizado");
        cy.get(':nth-child(1) > .text-right > .buttonRowEdit').click();
        cy.get('[icon="fas fa-users"] > .justify-content-center > .col-lg-12 > [aria-current="[object Object]"] > app-title-cards > .animate__animated > .titleCards').click();
        cy.get('.editButton').click();
        cy.get(':nth-child(20) > .form-check-label').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.btn-secundary').click();
        cy.get(':nth-child(1) > .text-right > .buttonRowDisable').click();
    });

    it("Validar locales", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#ngb-nav-6').click();
        cy.get('.btn').click();
        cy.get('.swal2-popup').contains("Datos no válidos o faltantes");
        cy.get('.swal2-confirm').click();
        cy.get('[icon="fas fa-pencil-ruler"] > .animate__animated > .titleCards').click();
        cy.get('#new-Nombre').type(prompt("Nombre Local"));
        cy.get('#new-Ubicación').type(prompt("Ubicación Local"));
        cy.get('.btn').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowEdit').click();
        cy.get('.btn-info').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowDisable').click();
        cy.get('.swal2-deny').click();
    });

    it("Validar módulo prueba de tarifa", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#ngb-nav-8').click();
        cy.get('div.text-center > .text-center').click();
        cy.get('.swal2-confirm').click();
        //VALIDAR MANUALMENTE LAS TARIFAS
    });

    it("Validar horarios", () => {
        //NO TODOS LOS DATOS SE PUEDEN PROBAR PORQUE SE NECESITA INTERACCIÓN HUMANA
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#ngb-nav-9').click();
        cy.get('#save-btn').click();
        cy.get('.swal2-popup').contains("Guardado");
        cy.get('#ngb-nav-9').click();
    });

    it("Validar facturación", () => {
        //NO TODOS LOS DATOS SE PUEDEN PROBAR PORQUE SE NECESITA INTERACCIÓN HUMANA
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#ngb-nav-10').click();
        cy.get('#save-btn').click();
        cy.get('.swal2-container').contains("Datos faltantes o incorrectos. Validar que los datos sean correctos.");
        cy.get('#ngb-nav-10').click();
        cy.get('#ngb-nav-9').click();
        cy.get('#ngb-nav-10').click();
    });

    it("Validar archivos", () => {
        //NO TODOS LOS DATOS SE PUEDEN PROBAR PORQUE SE NECESITA INTERACCIÓN HUMANA
        //AGREGANDO DIFERENTES IMÁGENES ETC
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#ngb-nav-11').click();
        cy.get('.btn').click();
        cy.get('.swal2-popup').contains("No se seleccionaron archivos");
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(3) > .nav-link').click();
    });

    //CORTESÍAS SE DEBEN PROBAR DE MANERA MANUAL

    //PRUEBA EN LOS MODULOS DE CORTESÍA
    it("Pruebas de cortesías", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.text-center > .btn').click();
        cy.get('#swal2-title').contains("Datos faltantes o incorrectos");
        cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
        cy.get('.swal2-popup').contains("Finalizado");
        cy.get('#ngb-nav-6').click();
        cy.get('.d-grid > .btn').click();
        cy.get('.swal2-popup').contains("Datos faltantes o incorrectos");
        cy.get('.swal2-confirm').click();
        cy.get('.btn-primary').click();
        cy.get('.d-flex > .btn').click();
        cy.get('.swal2-popup').contains("Datos incorrectos o faltantes.");
        cy.get(':nth-child(1) > :nth-child(5) > .buttonRowEdit > .fas').click();
        cy.get('.d-flex > .m-1').click();
        cy.get('.btn-close').click();
        cy.get('.btn-primary').click();
        cy.get(':nth-child(1) > :nth-child(5) > .buttonRowEdit > .fas').click();
        cy.get('.ng-submitted > .d-flex > :nth-child(1)').click();
        cy.get(':nth-child(1) > :nth-child(5) > .buttonRowDelete').click();
        cy.get('#new-Nombre').type(prompt("Nombre antena estacionaria"));
        cy.get('#new-Mac').type(prompt("MAC antena estacionaria"));
        cy.get('#new-Antena').type(prompt("UUID antena estacionaria"));
        cy.get('.d-flex > .btn').click();
        cy.get('.btn-close').click();
    });

    it("Validar módulo parqueo y aplicación de cortesías", () => {
        //NO TODOS LOS DATOS SE PUEDEN PROBAR PORQUE SE NECESITA INTERACCIÓN HUMANA
        //AGREGANDO DIFERENTES IMÁGENES ETC
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowDelete').click();
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-confirm').click();
        cy.get('#swal2-title').contains("Debe seleccionar una fecha de salida valida");
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowDelete').click();
        cy.get('.swal2-cancel').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowDelete').click();
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowDelete').click();
        cy.get('.swal2-deny').click();
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowEdit').click();
        cy.get(':nth-child(1) > .row > .list-group-item').click();
        cy.get('.swal2-confirm').click();
        cy.get('.btn-close').click();
    });


    it("Validar Ver parqueos mensuales", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get('#ngb-nav-2').click();
        cy.get(':nth-child(1) > :nth-child(10) > .buttonRowDelete').click();
        cy.get('#swal2-title').contains("¿Está seguro que desea eliminar esta suscripción?");
        cy.get('.swal2-deny').click();
        cy.get(':nth-child(1) > :nth-child(10) > .buttonRowDelete').click();
        cy.get('#swal2-title').contains("¿Está seguro que desea eliminar esta suscripción?");
        cy.get('.swal2-confirm').click();
        cy.get('.swal2-popup').contains("Finalizado");
        cy.get('#ngb-nav-3').click();
        cy.get('#ngb-nav-2').click();
    });

    it("Validar crear parqueos mensuales", () => {

        let numeroTelefonoBuscar = "45024363";
        let cobroParqueoMensual = "0";

        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get('#ngb-nav-3').click();
        cy.get('.text-center > .btn').click();
        cy.get('#swal2-title').contains("Hacen falta datos o son inválidos.");
        cy.get('.swal2-confirm').click();
        cy.get('.col-xl-6 > .input-group > button').click();
        cy.get('.input-group-sm > .inputClass').type(numeroTelefonoBuscar);

        //SE USA MÉTODO ONCHANGE PARA BUSCAR EL NUMERO DE TELÉFONO
        cy.get('.input-group-sm > .inputClass').trigger('change', { force: true });
        cy.get('.position-absolute').click();
        cy.get('.position-absolute').click();
        cy.get('.swal2-popup').contains("Seleccionado");
        cy.get(':nth-child(2) > .opcionActivo > :nth-child(1) > label').click();

        //HACER CLICK EN TODOS LOS DIAS PARA SU ENTRADA
        cy.get('.col-xl-12 > .opcionActivo > :nth-child(1) > label').click();
        cy.get('.col-xl-12 > .opcionActivo > :nth-child(2) > label').click();
        cy.get(':nth-child(3) > label').click();
        cy.get(':nth-child(4) > label').click();
        cy.get(':nth-child(5) > label').click();
        cy.get(':nth-child(6) > label').click();
        cy.get(':nth-child(7) > label').click();
        cy.get('.form-select').select("20");
        cy.get('.relative > .form-control').type(cobroParqueoMensual);
        cy.get(':nth-child(7) > .opcionActivo > :nth-child(1) > label').click();
        cy.get('.text-center > .btn').click();

        //CON FECHA Y CON COBRO RECURRENTE

        cy.get('.col-xl-6 > .input-group > button').click();
        cy.get('.input-group-sm > .inputClass').type(numeroTelefonoBuscar);

        //SE USA MÉTODO ONCHANGE PARA BUSCAR EL NUMERO DE TELÉFONO
        cy.get('.input-group-sm > .inputClass').trigger('change', { force: true });
        cy.get('.position-absolute').click();
        cy.get('.position-absolute').click();
        cy.get('.swal2-popup').contains("Seleccionado");
        cy.get(':nth-child(2) > .opcionActivo > :nth-child(2) > label').click();

        //HACER CLICK EN TODOS LOS DIAS PARA SU ENTRADA
        cy.get('.col-xl-12 > .opcionActivo > :nth-child(1) > label').click();
        cy.get('.col-xl-12 > .opcionActivo > :nth-child(2) > label').click();
        cy.get(':nth-child(3) > label').click();
        cy.get(':nth-child(4) > label').click();
        cy.get(':nth-child(5) > label').click();
        cy.get(':nth-child(6) > label').click();
        cy.get(':nth-child(7) > label').click();
        cy.get('.form-select').select("20");
        cy.get('.relative > .form-control').type(cobroParqueoMensual);
        cy.get(':nth-child(7) > .opcionActivo > .m-1 > label').click();
        cy.get('.text-center > .btn').click();
    });

    it("Validar Antenas de Parqueo", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get('.active > .nav-link').click();
        cy.get('#ngb-nav-4').click();
        cy.get('.form-check-label').click();
        cy.get('.form-check-label').click();
        cy.get('.btn').click();
        cy.get('#swal2-title').contains("¡Cuidado!");
        cy.get(':nth-child(1) > :nth-child(9) > .buttonRowEdit').click();
        cy.get('.row > .d-flex > :nth-child(2)').click();
        cy.get('#ngb-nav-3').click();
        cy.get('#ngb-nav-4').click();
        cy.get(':nth-child(1) > :nth-child(9) > .buttonRowQR').click();
    });

    it("Validar enviar mensajes opción soporte", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(6) > .nav-link').click();
        cy.get('#new-Asunto').type("Pruebas Automatizadas");
        cy.get('.ng-dirty > .inputClass').type("Pruebas Automatizadas");
        cy.get('.btn').click();
        cy.get('.swal2-popup').contains("Se ha enviado su petición");
        cy.get('.swal2-confirm').click();
        cy.get('.nav > :nth-child(1) > .nav-link').click();
    });

    it("Validar enviar mensajes opción soporte", () => {
        cy.visit(urlAProbar);
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get(':nth-child(6) > .nav-link').click();
        cy.get('#ngb-nav-6').click();
        cy.get('#new-Teléfono').type("45024363");
        cy.get('#new-Teléfono').click();
        cy.get('.nav > :nth-child(1) > .nav-link').click();
    });

    it("PRUEBAS FINALIZADAS CON ÉXITO", ()=>{
        alert("Pruebas completadas con éxito");
    });

});
