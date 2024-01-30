class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataques = {
        mago: 'usou magia',
        guerreiro: 'usou espada',
        monge: 'usou artes marciais',
        ninja: 'usou shuriken'
      };
  
      const ataque = ataques[this.tipo] || 'usou um ataque indefinido';
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  