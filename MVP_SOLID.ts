type cargo = "TI" | "gestor" | "RH" | "contador" // etc...
type usuario = "gestor" | "colaborador"// etc...


interface Icolaborador{
    department:string;
    name:string;
    permission:usuario;
    position:cargo;
    
}

class Funcionario implements Icolaborador{
    name:string;        // nome
    position:cargo;   // cargo
    department:string; // departamento
    permission:usuario; // nível de permissão do usuario
    constructor(name:string,position:cargo,department:string,permission:usuario){
        this.name = name;
        this.position = position;
        this.department = department;
        this.permission = permission;
    }
}
// concluido
//-----------------------------= Lógica classe concluida =------------------------------------\\
// n concluido


function Avaliacao_Desempenho_Nine_box(user:Funcionario){
    if(user.permission == "gestor"){
        // Perguntas a serem feitas para o gestor sobre o colaborador...
        
    }
    else if(user.permission == "colaborador"){
        // perguntas a serem respondidas pelo colaborador para auto avaliação...
    }
}