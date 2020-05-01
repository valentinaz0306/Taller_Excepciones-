class Figura {

    constructor() {
        this.tamano = 50;
    }
    pintar() {
    }
    movimiento() {
    }
    setTamano() {
        if (this.tamano < 100) {
            this.tamano = this.tamano * 2;
        }

    }
}


