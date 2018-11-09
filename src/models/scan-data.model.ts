export class ScanData{
    info: string; //cadena de caracteres que devuelve la lectura QR
    tipo: string;

    constructor (texto:string){
        this.info = texto;
        this.tipo = "nodefinido";
        if(texto.startsWith("http")){
            this.tipo = "web";
        }
        if(texto.startsWith("geo")){
            this.tipo = "mapa";
        }       
    }

}