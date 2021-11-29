interface Pessoa {
  cpf: string;
  nome: string;
  dataDeNascimento: Date;
}

class Funcionario implements Pessoa {
  cpf: string;
  nome: string;
  dataDeNascimento: Date;
  salario: number;
}

class Cliente implements Pessoa {
  cpf: string;
  nome: string;
  dataDeNascimento: Date;
}

class Publicacao {
  private id: string;
  private tipo: string;
}

class Emprestimo {
  private id: string;
  private publicacao: Publicacao;
  private cliente: Cliente;
  private funcionario: Funcionario;
  private dataDeInicio: Date;
  private dataDeTermino: Date;
}

class Reserva {
  private id: string;
  private publicacao: Publicacao;
  private cliente: Cliente;
  private funcionario: Funcionario;
  private data: Date;
}
