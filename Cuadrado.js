class Cuadrado extends Figura {
    constructor(x) {
        super();
        this.posy = 400;
        this.posx = 150 + x;
        this.vel = 5;
    }

    pintar() {
        fill(0, 0, 255);
        rect(this.posx, this.posy, this.tamano, this.tamano);
    }
    movimiento() {

        if (this.posx + this.vel > 0) {
            this.posx = this.posx + this.vel
        }
        if (this.posx >= 775) {
            this.vel = this.vel * -1;
        }
        if (this.posx <= 25) {
            this.vel = this.vel * -1;
        }

    }

    getPosx() {
        return this.posx;
    }


}

