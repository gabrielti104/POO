class Animal {
    //criar os atributos
    constructor(tipo,nome,som,idade){
        this.tipo = tipo
        this.nome = nome
        this.som = som
        this.idade = idade
    }

    //criar o método latir
    latir(){
        console.log(this.nome+" está "+this.som)
    }

    fazerNiver(novaIdade){
        this.idade += novaIdade
        console.log(' 0 '+this.nome+' fez aniversário de '+this.idade+' anos ')
    }
}
//instanciando a classe
let zeca = new Animal('cachorro','zeca','auau',12)

zeca.latir()
zeca.fazerNiver(1)