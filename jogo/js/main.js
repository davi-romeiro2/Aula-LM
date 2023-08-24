
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
    pontuar();
}

