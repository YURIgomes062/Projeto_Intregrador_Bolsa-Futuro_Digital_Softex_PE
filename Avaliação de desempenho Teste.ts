import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Avaliacao_Desempenho_Nine_box {
    usuario: string;
    perguntas: number[];
    pontuacao: number;
    cargo: string;
    quadrante: string;
    constructor(usuario: string, perguntas: number[], cargo: string, pontuacao: number, quadrante: string) {
        this.usuario = usuario;
        this.perguntas = perguntas;
        this.cargo = cargo;
        this.pontuacao = pontuacao;
        this.quadrante = quadrante;
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

        /* cada pergunta valerá 10 pontos...
          ______________________________________________________________
         |                  |                        |                  |  
         | Diamante Bruto   |    Forte Desempenho    |  Alto Potencial  |
         |________70p_______|__________85p___________|_______90p+_______|
         |                  |                        |                  |
         | Questionável     |       Mantenedor       | Forte Desempenho |
         |_______25p________|__________55p___________|___65p____________|
         |                  |                        |                  |
         | Insuficiente     |         Eficaz         | Comprometido     |
         |_____15p__________|___________35p__________|____45p___________|*/

    }
    perguntass(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void {
        console.log(`\nOlá, por favor, responda as perguntas da avaliação de desempenho\n`)

        p1 = parseInt(prompt(`Você considera ter facilidade para aprender coisas novas?`))
        p2 = parseInt(prompt(`Você se considera uma pessoa que enxerga todo o panorama geral, invés do trabalho imediato?`))
        p3 = parseInt(prompt(`Você se considera apto para exercer papéis de liderança?`)) // pergunta voltada a cargos de liderança
        p4 = parseInt(prompt(`Você se considera uma pessoa ambiciosa a conquistar cargos maiores?`))
        p5 = parseInt(prompt(`Você se considera uma pessoa determinada com suas tarefas?`))
        p6 = parseInt(prompt(`Você se considera apto para exercer suas responsabilidades na empresa?`))
        p7 = parseInt(prompt(`Você considera as suas tarefas atuais muito desafiadoras?`))
        p8 = parseInt(prompt(`Você se considera uma pessoa de facil adaptação a mudanças?`))
        p9 = parseInt(prompt(`Você considera ser válido os feedbacks passados pelo gestor?`))
        p10 = parseInt(prompt(`Você considera ter evoluido profissionalmente, no período de 3 meses atrás para hoje?`))
        this.pontuacao = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10
    }
    pontuação_perguntas(): void {
        if (this.pontuacao <= 15) {                               // menor que 15
            this.quadrante = "Insuficiente"
            console.log(`Você foi qualificado como Insuficiente`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |      Aqui        |                        |                  |
                        |__________________|________________________|__________________|\n`)

        } else if (this.pontuacao > 15 && this.pontuacao <= 25) { // maior que 15 e menor ou igual a 25
            this.quadrante = "Questionável"
            console.log(`Você foi qualificado como Questionável`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |       Aqui       |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|\n`)
                        
        } else if (this.pontuacao > 25 && this.pontuacao <= 35) { // maior que 25 e menor ou igual a 35
            this.quadrante = "Eficaz"
            console.log(`Você foi qualificado como Eficaz`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |          Aqui          |                  |
                        |__________________|________________________|__________________|\n`)
                        
        } else if (this.pontuacao > 35 && this.pontuacao <= 45) { // maior que 35 e menor ou igual a 45
            this.quadrante = "Comprometido"
            console.log(`Você foi qualificado como Comprometido`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |       Aqui       |
                        |__________________|________________________|__________________|\n`)
        } else if (this.pontuacao > 45 && this.pontuacao <= 55) { //  maior que 45 e menor ou igual a 55
            this.quadrante = "Mantenedor"
            console.log(`Você foi qualificado como Mantenedor`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |          Aqui          |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|\n`)
        } else if (this.pontuacao > 55 && this.pontuacao <= 65) { // maior que 55 e menor ou igual a 65
            this.quadrante = "Forte Desempenho"
            console.log(`Você foi qualificado como Forte Desempenho`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |       Aqui       |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|\n`)
        } else if (this.pontuacao > 65 && this.pontuacao <= 70) { // maior que 65 e menor ou igual a 70
            this.quadrante = "Diamante Bruto"
            console.log(`Você foi qualificado como Diamante Bruto`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |      Aqui        |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|\n`)
        } else if (this.pontuacao > 70 && this.pontuacao <= 89) { // maior que 70 e menor ou igual a 89
            this.quadrante = "Forte Desempenho"
             console.log(`Você foi qualificado como Forte Desempenho`)
            console.log(`_______________________________________________________________
                        |                  |                        |                  | 
                        |                  |          Aqui          |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|
                        |                  |                        |                  |
                        |                  |                        |                  |
                        |__________________|________________________|__________________|\n`)
        } else if (this.pontuacao > 89) {                         // maior que 88
            this.quadrante = "Alto desempenho"
        } else{
            return console.log(`Erro, por favor, faça o teste novamente!`)
        }
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