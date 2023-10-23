
 class CriandoPersonagem{
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }
    atacar(){
      let ataque;
      if(this.tipo === "guerreiro"){
        ataque = "Usou sua espada";
      }
      else if(this.tipo === "mago"){
        ataque = "Usou sua magia";
      }
      else if (this.tipo === "monge"){
        ataque = "Usou artes marciais";
      }
      else if(this.tipo === "ninja" ){
        ataque = "Usou shurikens";
      }
      else {
        ataque = "Sem ataque";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
    let nome = prompt("Digite o nome do personagem:");
    let idade = prompt("Digite a idade do personagem:");
    let tipo = prompt("Digite o tipo do personagem (guerreiro, mago, monge, ninja):");
    
    let heroi1 = new CriandoPersonagem(nome, idade, tipo);
    heroi1.atacar();

}