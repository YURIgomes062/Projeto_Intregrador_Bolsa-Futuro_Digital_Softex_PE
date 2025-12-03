const prompt = require('prompt-sync')();

class Avaliacao_Desempenho_Nine_box {
    public usuario: string;
    public pontuacao: number;
    public cargo: string;
    public quadrante?: string;
    constructor(usuario: string, cargo: string, pontuacao: number, quadrante: string) {
        this.usuario = usuario;
        this.cargo = cargo;
        this.pontuacao = pontuacao;
        this.quadrante = quadrante;
    }
    // métodos da avaliação
    apresentação(): string {
        return (`\nOlá ${this.cargo} ${this.usuario}, seja bem vindo a avaliação desempenho Nine Box: `)
    }
    exibicao_quadrantes(): void {
        console.log(`\nAbaixo temos os possíveis quadrantes da avaliação de desempenho modelo nine box:\n`)
        console.log(` ______________________________________________________________
                     |                  |                        |                  | 
                     | Diamante Bruto   |    Grande Desempenho   |  Alto Potencial  |
                     |__________________|________________________|__________________|
                     |                  |                        |                  |
                     | Questionável     |       Mantenedor       | Forte Desempenho |
                     |__________________|________________________|__________________|
                     |                  |                        |                  |
                     | Insuficiente     |         Eficaz         | Comprometido     |
                     |__________________|________________________|__________________|\n`)

        /* cada pergunta valerá 12  pontos...
          ______________________________________________________________
         |                  |                        |                  |  
         | Diamante Bruto   |   Grande Desempenho    |  Alto Potencial  |
         |________70p_______|__________80p___________|_______85p+_______|
         |                  |                        |                  |
         | Questionável     |       Mantenedor       | Forte Desempenho |
         |_______20p________|__________50p___________|___60p____________|
         |                  |                        |                  |
         | Insuficiente     |         Eficaz         | Comprometido     |
         |_____10p__________|___________30p__________|____40p___________|*/

    }
    perguntas(): void {
        console.log(`\nOlá, por favor, responda as perguntas da avaliação de desempenho\n`)

        let p1 = parseInt(prompt(`Você considera ter facilidade para aprender coisas novas?`))
        let p2 = parseInt(prompt(`Você se considera uma pessoa que enxerga todo o panorama geral, invés do trabalho imediato?`))
        let p3 = parseInt(prompt(`Você se considera apto para exercer papéis de liderança?`)) // pergunta voltada a cargos de liderança
        let p4 = parseInt(prompt(`Você se considera uma pessoa ambiciosa a conquistar cargos maiores?`))
        let p5 = parseInt(prompt(`Você se considera uma pessoa determinada com suas tarefas?`))
        let p6 = parseInt(prompt(`Você se considera apto para exercer suas responsabilidades na empresa?`))
        let p7 = parseInt(prompt(`Você considera as suas tarefas atuais muito desafiadoras?`))
        let p8 = parseInt(prompt(`Você se considera uma pessoa de facil adaptação a mudanças?`))
        let p9 = parseInt(prompt(`Você considera ser válido os feedbacks passados pelo gestor?`))
        let p10 = parseInt(prompt(`Você considera ter evoluido profissionalmente, no período de 3 meses atrás para hoje?`))
        this.pontuacao = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10
    }
    pontuação_perguntas(): void {
        if (this.pontuacao <= 10) {                               // menor que 10
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

        } else if (this.pontuacao > 10 && this.pontuacao <= 20) { // maior que 10 e menor ou igual a 20
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

        } else if (this.pontuacao > 20 && this.pontuacao <= 30) { // maior que 20 e menor ou igual a 30
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

        } else if (this.pontuacao > 30 && this.pontuacao <= 40) { // maior que 30 e menor ou igual a 40
            this.quadrante = "Comprometido"
            console.log(`\nVocê foi qualificado como Comprometido\n`)
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
        } else if (this.pontuacao > 40 && this.pontuacao <= 50) { //  maior que 40 e menor ou igual a 50
            this.quadrante = "Mantenedor"
            console.log(`\nVocê foi qualificado como Mantenedor\n`)
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
        } else if (this.pontuacao > 50 && this.pontuacao <= 60) { // maior que 50 e menor ou igual a 60
            this.quadrante = "Forte Desempenho"
            console.log(`\nVocê foi qualificado como Forte Desempenho\n`)
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
        } else if (this.pontuacao > 60 && this.pontuacao <= 70) { // maior que 60 e menor ou igual a 70
            this.quadrante = "Diamante Bruto"
            console.log(`\nVocê foi qualificado como Diamante Bruto\n`)
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
        } else if (this.pontuacao > 70 && this.pontuacao <= 80) { // maior que 70 e menor ou igual a 80
            this.quadrante = "Grande Desempenho "
            console.log(`\nVocê foi qualificado como Grande Desempenho\n`)
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
        } else if (this.pontuacao > 85) {                         // maior que 85
            this.quadrante = "Alto desempenho"
        } else {
            
            return console.log(`\nErro, por favor, faça o teste novamente!\n`)
        }
    }
    quadrante_(): void {
        // Definir qual quadrante o usuario deverá ser direcionado com base na pontuação
    }
    feedback_user(): void {
        // Mensagem a ser enviada para o usuario após a finalização da avaliação
    }


}
const matheus = new Avaliacao_Desempenho_Nine_box("matheus", "Gerente", 0, "forte desempenho")
matheus.apresentação();
matheus.perguntas();
matheus.pontuação_perguntas();
matheus.quadrante_();
matheus.feedback_user();