
//na função setup definimos as configurações de largura e altura
function setup() {

    createCanvas(700, 400);

}

//na função de desenho definimos o que sera exibido
function draw() {

    background(imagemDaEstrada);
    //O image permite manipular o objeto no eixo X e Y como tambem no W e H
    mostrarMascote();
    mostrarCarros();
    movimentoCarro(); 
    movimentoMascote();
    incluirPontos();
    verificaColisao();
    pontuar();
    // rect(xCarros[5], yCarros[5], comprimentoCarros, alturaCarros);
    // circle(xMascote + 19, yMascote + 17,30) 
}

