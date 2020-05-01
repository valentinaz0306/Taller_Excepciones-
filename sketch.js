let cuadrados = [];
let circulos = [];
//variable para el numero 
let numero = 1;
let pantalla;
//varaibles para lanzar excepciones 
let mensajeNum;
let mensajeTam = false;
let pintarcirculo = false;

function setup() {
    createCanvas(800, 800);
    pantalla = 0;

}

function draw() {
    background(0);

    switch (pantalla) {

        case 0:
            //boton aumentar
            fill(255, 0, 0);
            rect(490, 358, 50, 50);
            textSize(50);
            fill(255);
            text("+", 500, 392);

            //boton disminuir
            fill(255, 0, 0);
            rect(292, 358, 50, 50);
            textSize(50);
            fill(255);
            text("-", 309, 392);

            //boton continuar
            fill(255, 0, 0);
            rect(285, 450, 257, 50);
            textSize(50);
            fill(255);
            text("Continuar", 300, 490);


            if (numero == 10) {
                fill(255);
                text(numero, 400, 400);
            } else {
                fill(255);
                text(numero, 400, 400);
            }

            if (mensajeNum == true) {
                text("Excedió el límite", 250, 100);
            }
            break;

        case 1:

            pintarFiguras();

            //boton duplicarTam
            fill(255, 0, 0);
            rect(10, 126, 140, 50);
            textSize(20);
            fill(255);
            text("Duplicar Tam", 20, 152);

            //boton añadir
            fill(255, 0, 0);
            rect(170, 126, 140, 50);
            textSize(20);
            fill(255);
            text("Añadir Elemen", 176, 152);

            //boton quitar
            fill(255, 0, 0);
            rect(330, 126, 140, 50);
            textSize(20);
            fill(255);
            text("Quitar Elemen", 341, 152);

            //boton circulo
            fill(255, 0, 0);
            rect(490, 126, 140, 50);
            textSize(20);
            fill(255);
            text("Añadir Circulo", 500, 152);

            
            if (mensajeNum == true) {
                text("Excedió el límite", 250, 100);
            }
            if (mensajeTam == true) {
                text("Tamaño maximo", 250, 100);
            }

            /*textSize(50);
            text('x:' + mouseX + 'y:' + mouseY, mouseX, mouseY);*/
            break;

    }//cierra switch

}// cierra draw

function mousePressed() {

    switch (pantalla) {
        case 0:
            mensajeNum = false;
            //boton menos
            if (mouseX > 292 && mouseX < 340 && mouseY > 360 && mouseY < 408) {

                try {
                    if (numero == 1) {
                        numero = 1;
                        throw new numberException("Numero fuera de rango");
                    } else {
                        numero--;
                    }
                } catch (error) {
                    mensajeNum = true;
                }
            }
            //boton mas
            if (mouseX > 492 && mouseX < 538 && mouseY > 360 && mouseY < 408) {
                try {
                    if (numero == 10) {
                        numero = 10;
                        throw new numberException("Numero fuera de rango");
                    } else {
                        numero++;
                    }
                } catch (error) {
                    mensajeNum = true;
                }
            }
            //boton continuar
            if (mouseX > 285 && mouseX < 541 && mouseY > 453 && mouseY < 497) {
                pantalla++;
                // arreglo para crear cuadrados de acuedo al numero que el usuario elija
                for (let i = 0; i < numero; i++) {
                    cuadrados[i] = new Cuadrado(i * 58);
                }
            }
            break;

        case 1:

            mensajeNum = false;
            mensajeTam = false;

            //DuplicarTam
            if (mouseX > 10 && mouseX < 149 && mouseY > 128 && mouseY < 173) {
                duplicarTam();
            }

            //Añadir
            if (mouseX > 172 && mouseX < 306 && mouseY > 128 && mouseY < 173) {
                añadirElemento();
            }

            //quitar
            if (mouseX > 332 && mouseX < 465 && mouseY > 128 && mouseY < 173) {
                quitarElemento();
            }

            //circulos
            if (mouseX > 490 && mouseX < 626 && mouseY > 128 && mouseY < 173) {
                pintarCirculos();
            }



    }// cierra switch
}// cierra mousep

function añadirElemento() {

    try {

        if (numero == 10) {
            throw new numberException("Numero fuera de rango");
        } else {
            numero++;
            cuadrados.push(new Cuadrado(0));

            if (pintarcirculo == true) {
                circulos.push(new Circulo(150));
            }
        }
    } catch (error) {
        mensajeNum = true;
    }

}

function quitarElemento() {

    try {
        if (numero == 0) {
            throw new numberException("Numero fuera de rango");
        } else {
            numero--;
            cuadrados.pop();

            if (pintarcirculo == true) {
                circulos.pop();
            }
        }
    } catch (error) {
        mensajeNum = true;
    }

}

function pintarCirculos() {

    if (pintarcirculo == false) {

        circulos = cuadrados.map(element => {
            return element = new Circulo(element.getPosx());
        })

        pintarcirculo = true;

    }

}

function pintarFiguras() {

    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].pintar();
        cuadrados[i].movimiento();
    }
    for (let j = 0; j < circulos.length; j++) {
        circulos[j].pintar();
        circulos[j].movimiento();
    }
}

function duplicarTam() {
    try {
        if (cuadrados[cuadrados.length - 1].tamano == 100 && circulos[circulos.length - 1].tamano == 100) {
            throw new tamException("Ya se obtuvo el tamaño maximo");
        } else {
            cuadrados.forEach(element => {
                element.setTamano();

            })
            circulos.forEach(element => {
                element.setTamano();

            })
        }
    } catch (error) {
        mensajeTam = true;
    }
}
