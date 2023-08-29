/*let xCarro_01 = 599;
let xCarro_02 = 599;
let xCarro_03 = 599;*/
let xCarros = [700,700,700,700,700,700] 
let yCarros = [40, 98, 150, 210, 260, 320]
let velocidadeCarros = [18.4, 4, 12.14, 10.6, 17, 10.9]

let comprimentoCarros = 55;
let alturaCarros = 35;

function mostrarCarros() {

    for (let i = 0; i < imagensCarros.length; i++) {
        
        image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
        
    }

    // image(imagemCarro01, xCarro_01, 50, comprimentoCarros, alturaCarros);
    // image(imagemCarro02, xCarro_02, 150, 40, 30);
    // image(imagemCarro03, xCarro_03, 105, 40, 30);

}

function movimentoCarro() {

    for(let i = 0; i < imagensCarros.length; i++) {
        
        xCarros[i] -= velocidadeCarros[i];

        if (xCarros[i] < -50) {
            xCarros[i] = 700 
        }
        
    }

}