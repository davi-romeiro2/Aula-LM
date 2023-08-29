//posição do mascote
let yMascote = 360;
let xMascote = 70;
let meusPontos = 0;

let colisao = false;

function verificaColisao() {

    for (let i = 0; i < imagensCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], 
        comprimentoCarros, alturaCarros, xMascote + 17, yMascote + 17, 60)

        if (colisao) {

            yMascote = 360;
            xMascote = 70;
    
            if (meusPontos > 0){
                meusPontos -=1
            }
        }
    }

    print('Colisao acontecendo', colisao);
}

function mostrarMascote() {

    image(imagemDoMascote, xMascote, yMascote, 40, 40);

}

function incluirPontos() {

    text(meusPontos, 20, 25)
    fill(color(255,0,0))
    textSize(21)

}

function pontuar() {

    if (yMascote < 0) {
        yMascote = 360
        meusPontos++
        
    }

}

function movimentoMascote() {

    if (keyIsDown(UP_ARROW)) {

        yMascote -=4;

    }

    if (keyIsDown(DOWN_ARROW)) {

        yMascote +=4;

    }

    if (keyIsDown(LEFT_ARROW)) {

        xMascote -=4;

    }

    if (keyIsDown(RIGHT_ARROW)) {

        xMascote +=4;

    }

}
