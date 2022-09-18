var carta1 = {
    nome: 'Agumon',
    imagem: 'https://img1.ak.crunchyroll.com/i/spire2/b4ed5c39551ba895e7e0bbbed9973ead1632510609_full.png',
    atributos: {
        ataque: 7,
        defesa: 4,
        poder: 8,
    }
}
var carta2 = {
    nome: 'Gabumon',
    imagem:'https://pbs.twimg.com/media/Eb4BFzkXsAAFjog.jpg',
    atributos: {
        ataque: 6,
        defesa: 6,
        poder: 7,
    }
}
var carta3 = {
    nome: 'DemiDevimon',
    imagem:'https://www.bogleech.com/digimon/demidevimonanime.png',
    atributos: {
        ataque: 4,
        defesa: 5,
        poder: 3,
    }
}
var carta4 = {
    nome: 'Angemon',
    imagem:'https://pm1.narvii.com/6230/8bac53a591a6d24911353b56d3dc9b58f9ccf84d_hq.jpg',
    atributos: {
        ataque: 9,
        defesa: 9,
        poder: 9,
    }
}
var carta5 = {
    nome: 'Renamon',
    imagem:'https://i.pinimg.com/736x/67/f7/f6/67f7f6374fae8605426937a3bca6fc33--digimon.jpg',
    atributos: {
        ataque: 5,
        defesa: 3,
        poder: 5
    }
}
var carta6 = {
    nome:'Leomon',
    imagem: 'https://geeksinaction.com.br/wp-content/uploads/2021/09/digimon-adventure-reboot-leomon-anime-752x440.jpg',
    atributos:{
        ataque: 10,
        defesa: 5,
        poder: 2,
    }

}
var cartas = [carta1, carta2, carta3, carta4, carta5,carta6]
var cartaJogador
var cartaMaquina


function escolherCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 4)
    let numeroCartaJogador = parseInt(Math.random() * 4)

    cartaMaquina = cartas[numeroCartaMaquina]
    cartaJogador = cartas[numeroCartaJogador]

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 4)
    }
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    
    exibirCartaJogador()
   

}



function obtemAtributoSelecionado(){
let radioSelecionado = document.getElementsByName('atributo')
for(let i = 0; i < radioSelecionado.length; i++){
    if(radioSelecionado[i].checked){
        return radioSelecionado[i].value
    }
}
}



function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado()
    let res = document.getElementById('resultado')
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina){
       htmlres = '<p class= "resultado-final">Venceu!!!</p>'
    }else if(valorCartaJogador < valorCartaMaquina){
        htmlres = '<p class= "resultado-final">Perdeu!!!</p>'
    }else{
        htmlres = '<p class= "resultado-final">Empatou!!!</p>'
    }
    res.innerHTML = htmlres

    document.getElementById('btnJogar').disabled = true

    exibirCartaMaquina()
}

function exibirCartaJogador(){
    let divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.background = `url(${cartaJogador.imagem})`
    let moldura =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'
    let tagHtml = "<div id= 'opcoes' class='carta-status'>"
    let opcoesTexto = ''
    let  nome = `<p class='carta-subtitle'> ${cartaJogador.nome}</p>`
    for (let atributos in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value= " + atributos + " >" + atributos + " " + cartaJogador.atributos[atributos] + "<br>"
    }

    divCartaJogador.innerHTML = moldura + nome +tagHtml + opcoesTexto + '</div>'
}

function exibirCartaMaquina(){
    let divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style.background = `url(${cartaMaquina.imagem})`
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;"></div>'
    let tagHtml = "<div id= 'opcoes' class='carta-status'>"
    let opcoesTexto = ''
    let nome = `<p class= 'carta-subtitle'>${cartaMaquina.nome}</p>`

    for(let atributos in cartaMaquina.atributos){
        opcoesTexto+= "<p name='atributo' value= " + atributos + " >" + atributos + " " + cartaMaquina.atributos[atributos] + "</p>"
    }

    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + '</div>'
}