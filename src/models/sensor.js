class Sensor {
    constructor() {
        this.fechaGeneracion = new Date().toGMTString();
        this.IdDispositivo = (Math.round(Math.random() * 100)) + 1;
        this.temperatura = (Math.round(Math.random() * 100)) + 1;
        this.humedad = (Math.round(Math.random() * 100));
    }
}


module.exports = {
    Sensor,
};
