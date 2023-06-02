
/*
Autor: Daniel Rivas
Fecha: 30/05/2023
*/
describe("Conjunto de pruebas para BackOffice - ebiGO - v1.0.0", () => {

    it("Inicio de sesión", () => {
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
        cy.viewport(1250, 700);
        cy.get('img').should("be.visible");
        cy.get('.mb-1 > .form-control').type("drivas@ebigo.com.gt");
        cy.get('.form-group.mb-4 > .form-control').type("Ebi2022*");
        cy.get('.btn').click();
        cy.get('.nav > :nth-child(1) > .nav-link').click();
    });

    //CERRAR SESIÓN NO SE PUEDE AUTOMATIZAR

    it("Recuperación de contraseña", () => {
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
        cy.get('u').click();
        cy.get('.form-control').type("drivas@ebigo.com.gt");
        cy.get('.btn').click();
        //SE DEBE AGREGAR MANUALMENTE EL CÓDIGO QUE SE ENVIÓ AL CORREO
    });

    it("Probar métricas de flujo de dinero y flujo de efectivo", () => {
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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
        cy.get('#new-Nombre').type("Prueba");
        cy.get('#new-Ubicación').type("Cypress Automatización");
        cy.get('.btn').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowEdit').click();
        cy.get('.btn-info').click();
        cy.get(':nth-child(1) > .text-center > .buttonRowDisable').click();
        cy.get('.swal2-deny').click();
    });

    it("Validar módulo prueba de tarifa", () => {
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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

    it.only("Validar parqueos", () => {
        //NO TODOS LOS DATOS SE PUEDEN PROBAR PORQUE SE NECESITA INTERACCIÓN HUMANA
        //AGREGANDO DIFERENTES IMÁGENES ETC
        cy.visit('https://dev.bowtietech.pro/dev/Ebigo/#/');
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

});
