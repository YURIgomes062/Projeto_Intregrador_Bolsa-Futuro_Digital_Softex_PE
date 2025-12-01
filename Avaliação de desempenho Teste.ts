import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Avaliacao_Desempenho_Nine_box {
    usuario: string;
    perguntas: string[];
    cargo: string;
    pontuacao: number;

    constructor(usuario: string, perguntas: string[], cargo: string, pontuacao: number) {
        this.usuario = usuario;
        this.perguntas = perguntas;
        this.cargo = cargo;
        this.pontuacao = pontuacao
    }

    // métodos da avaliação
    apresentação(): string {
        return (`\nOlá ${this.usuario}, seja bem vindo a avaliação desempenho Nine Box: `)
    }
    exibicao_quadrantes(): void {
        console.log(`\nAbaixo temos os possíveis quadrantes da avaliação de desempenho modelo nine box:\n`)
        console.log(` ______________________________________________________________
                     |                  |                        |                  |
                     | Diamante Bruto   |    Forte Desempenho    |  Alto Potencial  |
                     |__________________|________________________|__________________|
                     |                  |                        |                  |
                     | Questionável     |       Mantenedor       | Forte Desempenho |
                     |__________________|________________________|__________________|
                     |                  |                        |                  |
                     | Insuficiente     |         Eficaz         | Comprometido     |
                     |__________________|________________________|__________________|\n`)

    }
    inserir_perguntas(p1:string,p2:string,p3:string,p4:string,p5:string,p6:string,p7:string,p8:string,p9:string,p10:string): void {
        

    }
    inserir_pontuaçãoperguntas(p1:string): void {
        
    }
    avalicao(): void {
        // exibicao das perguntas que deverao ser passadas para o usuario
    }
    desempenho(): void {
        // Definir qual quadrante o usuario deverá ser direcionado com base na pontuação
    }
    feedback_user(): void {
        // Mensagem a ser enviada para o usuario após a finalização da avaliação
    }


}