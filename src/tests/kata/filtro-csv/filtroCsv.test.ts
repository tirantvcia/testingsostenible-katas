/*
Criterios de aceptación

    Es válido que algunos campos estén vacíos, apareciendo dos comas seguidas o una coma final.
    El número de factura no puede estar repetido, si lo estuviese eliminaremos todas las líneas con repetición.
    Los impuestos IVA e IGIC son excluyentes, es decir, sólo puede aplicarse uno de los dos. Si alguna línea tiene contenido en ambos campos debe quedarse fuera.
    Los campos CIF y NIF son excluyentes, sólo se puede usar uno de ellos.
    El neto es el resultado de aplicar al bruto el correspondiente impuesto. Si algún neto no está bien calculado la línea se queda fuera.
    */

import { invoiceCsvFilter } from "../../../core/kata/filtro-csv/invoiceCsvFilter";

/*
Listado de pruebas
 Un fichero con una sola factura donde todo es correcto, debería producir como salida la misma línea
 Un fichero con una sola factura donde IVA e IGIC están rellenos, debería eliminar la línea
 Un fichero con una sola factura donde el neto está mal calculado, debería ser eliminada
 Un fichero con una sola factura donde CIF y NIF están rellenos, debería eliminar la línea
 Si el número de factura se repite en varias líneas, se eliminan todas ellas (sin dejar ninguna línea).
 Una lista vacía producirá una lista vacía de salida
 Un fichero de una sola línea es incorrecto porque no tiene cabecera
 */
describe("CSV Filter", () => {
    it("fichero con una sola factura con iva indicado donde todo es correcto, debería producir como salida la misma línea", () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
        const csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header, invoiceLine]);
    });
    it("fichero con una sola factura con igic indicado donde todo es correcto, debería producir como salida la misma línea", () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,790,,21,ACER Laptop,B76430134,';
        const csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header, invoiceLine]);
    });
    it("Un fichero vacio, devolvera un fichero vacio", () => {
        // const header = '';
        //const invoiceLine = '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
        const csvFilter = invoiceCsvFilter([]);
        expect(csvFilter).toEqual([]);
    });
    it("Un fichero de una sola línea es incorrecto porque no tiene cabecera", () => {
        // const header = '';
        const invoiceLine = '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
        const csvFilter = invoiceCsvFilter([invoiceLine]);
        expect(csvFilter).toEqual([]);
    });
    it('Un fichero con una sola factura donde IVA e IGIC están rellenos, debería eliminar la línea', () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,790,21,23,ACER Laptop,B76430134,';
        const csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header]);
    })
    it("fichero con una sola factura con igic o el iva no es numerico, debería eliminar la línea", () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        var invoiceLine = '1,02/05/2021,1000,790,21e,,ACER Laptop,B76430134,';
        var csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header]);
        invoiceLine = '1,02/05/2021,1000,790,,21e,ACER Laptop,B76430134,';
        csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header]);

    });

    it('Un fichero con una sola factura con iva donde el neto está mal calculado, debería ser eliminada', () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,60,21,,ACER Laptop,B76430134,';
        const csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header]);
    })

    it('Un fichero con una sola factura con igic donde el neto está mal calculado, debería ser eliminada', () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,60,,21,ACER Laptop,B76430134,';
        const csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header]);
    })
    it('Un fichero con una sola factura donde CIF y NIF están rellenos, debería eliminar la línea', () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,63478309F';
        const csvFilter = invoiceCsvFilter([header, invoiceLine]);
        expect(csvFilter).toEqual([header]);
    })


    it("Si el número de factura se repite en varias líneas, se eliminan todas ellas (sin dejar ninguna línea)", () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine1 = '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
        const invoiceLine2 = '1,02/05/2021,1000,790,21,,xaomi Laptop,B76430134,';
        const invoiceLine3 = '1,02/05/2021,1000,790,21,,bq Laptop,B76430134,';
        const invoiceLine4 = '2,02/05/2021,1000,790,21,,bq Laptop,B76430134,';
        var csvFilter = invoiceCsvFilter([header, invoiceLine1, invoiceLine2, invoiceLine3, invoiceLine4]);
        expect(csvFilter).toEqual([header, invoiceLine4]);
    });

    it("Si alguna linea está mal según casos anteriores, se elimina", () => {
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine1 = '1,02/05/2021,1000,790,21,21,ACER Laptop,B76430134,';
        const invoiceLine2 = '2,02/05/2021,1000,790,21e,,xaomi Laptop,B76430134,';
        const invoiceLine3 = '3,02/05/2021,1000,90,21,,bq Laptop,B76430134,';
        const invoiceLine4 = '4,02/05/2021,1000,790,21,,bq Laptop,B76430134,63478309F';
        const invoiceLine5 = '5,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
        const invoiceLine6 = '6,02/05/2021,1000,790,,21,ACER Laptop,B76430134,';
        var csvFilter = invoiceCsvFilter([header, invoiceLine1, invoiceLine2, invoiceLine3, invoiceLine4, invoiceLine5, invoiceLine6]);
        expect(csvFilter).toEqual([header, invoiceLine5, invoiceLine6]);
    });

});


