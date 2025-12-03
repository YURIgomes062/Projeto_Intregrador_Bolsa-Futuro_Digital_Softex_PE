type cargo = "TI" | "gestor" | "RH" | "contador" // etc...
type usuario = "gestor" | "colaborador"// etc...

class Funcionario{
    name:string;
    position:string;
    department:string
    permission:string
    constructor(name:string,position:string,department:string,permission:string){
        this.name = name;
        this.position = position;
        this.department = department;
        this.permission = permission;
    }
}
class Avaliacao_Desempenho_Nine_box {
    public usuario: string; // classe 1
    public pontuacao: number; // classe 2
    public cargo: string;// classe 1
    public quadrante?: string;// classe 2
    
    constructor(usuario: string, cargo: string, pontuacao: number, quadrante: string) {
        this.usuario = usuario;
        this.cargo = cargo;
        this.pontuacao = pontuacao;
        this.quadrante = quadrante;
    }
}