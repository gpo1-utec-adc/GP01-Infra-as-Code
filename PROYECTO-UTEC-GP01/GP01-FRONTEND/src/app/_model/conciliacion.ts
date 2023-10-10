export class Conciliacion{
    _id: number;
    nombre: string;
    codigoComercio: string;
    tipoOperacion: string;
    fechaOperacion: string;
    horaOperacion: string;
    numeroReferencia: string;
    emisor: string;
    fechaProceso: string;
    importeBruto: number;
    comEmisor: number;
    comMerchant:  number;
    comTotal: number;
    ivg: number;
    importeNeto: number;
    codigoMonCodigoMon: number;
    tarjetaMask: number;
    ruc: string;
    autorizacion: number;
    codVisanet: number;
    fechaAbono: number;

    constructor(id: number, nombre: string, codigoComercio: string, tipoOperacion: string, 
        fechaOperacion: string, horaOperacion: string,  numeroReferencia: string, emisor: string, fechaProceso: string,
        importeBruto: number, comEmisor: number, comMerchant: number, comTotal: number,ivg: number, importeNeto: number,
        codigoMonCodigoMon: number, tarjetaMask: number, ruc: string, autorizacion: number,codVisanet: number, fechaAbono: number
        ){
        this._id = id;
        this.nombre = nombre;
        this.codigoComercio = codigoComercio;
        this.tipoOperacion = tipoOperacion;
        this.fechaOperacion = fechaOperacion;
        this.horaOperacion = horaOperacion;
        this.numeroReferencia = numeroReferencia;
        this.emisor = emisor;
        this.fechaProceso = fechaProceso;
        this.importeBruto = importeBruto;
        this.comEmisor = comEmisor;
        this.comMerchant = comMerchant;
        this.comTotal = comTotal;
        this.ivg = ivg;
        this.importeNeto = importeNeto;
        this.codigoMonCodigoMon = codigoMonCodigoMon;
        this.tarjetaMask = tarjetaMask;
        this.ruc = ruc;
        this.autorizacion = autorizacion;
        this.codVisanet = codVisanet;
        this.fechaAbono = fechaAbono;
   }  
}