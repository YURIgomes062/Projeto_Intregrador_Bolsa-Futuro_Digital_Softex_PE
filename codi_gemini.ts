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

    apresentação(): void { // Mudei para void
        // Mudei de return para console.log para aparecer na tela imediatamente
        console.log(`\nOlá ${this.cargo} ${this.usuario}, seja bem vindo a avaliação desempenho Nine Box: `);
    }

    exibicao_quadrantes(): void {
        console.log(`\nAbaixo temos os possíveis quadrantes da avaliação de desempenho modelo nine box:\n`);
        // ... (seu desenho dos quadrantes continua igual) ...
    }

    perguntas(): void {
        console.log(`\nOlá, por favor, responda as perguntas da avaliação de desempenho\n`);
        console.log(`Escolha de 1 a 10 para responder as perguntas, quanto mais próximo de 10, mais você concorda👍:\n`);

        // Dica: Use Number() ou parseInt() com tratamento de erro, mas assim funciona para teste básico
        let p1 = parseInt(prompt(`1. Facilidade para aprender? `));
        let p2 = parseInt(prompt(`2. Enxerga panorama geral? `));
        let p3 = parseInt(prompt(`3. Apto para liderança? `));
        let p4 = parseInt(prompt(`4. Ambiciosa? `));
        let p5 = parseInt(prompt(`5. Determinada? `));
        let p6 = parseInt(prompt(`6. Apto para responsabilidades? `));
        let p7 = parseInt(prompt(`7. Tarefas desafiadoras? `));
        let p8 = parseInt(prompt(`8. Adaptação a mudanças? `));
        let p9 = parseInt(prompt(`9. Aceita feedbacks? `));
        let p10 = parseInt(prompt(`10. Evoluiu em 3 meses? `));
        
        this.pontuacao = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10;
        console.log(`\n--> Sua pontuação total foi: ${this.pontuacao}\n`); // Feedback visual útil
    }

    pontuacao_perguntas(): void {
        // CORREÇÃO LÓGICA: Garanta que todos os números estejam cobertos
        if (this.pontuacao <= 10) {
            this.quadrante = "Insuficiente";
            console.log(`Você foi qualificado como Insuficiente`);
             // ... desenhos ...
        } else if (this.pontuacao > 10 && this.pontuacao <= 20) {
            this.quadrante = "Questionável";
            console.log(`Você foi qualificado como Questionável`);
             // ... desenhos ...
        } else if (this.pontuacao > 20 && this.pontuacao <= 30) {
            this.quadrante = "Eficaz";
            console.log(`Você foi qualificado como Eficaz`);
             // ... desenhos ...
        } else if (this.pontuacao > 30 && this.pontuacao <= 40) {
            this.quadrante = "Comprometido";
            console.log(`\nVocê foi qualificado como Comprometido\n`);
             // ... desenhos ...
        } else if (this.pontuacao > 40 && this.pontuacao <= 50) {
            this.quadrante = "Mantenedor";
            console.log(`\nVocê foi qualificado como Mantenedor\n`);
             // ... desenhos ...
        } else if (this.pontuacao > 50 && this.pontuacao <= 60) {
            this.quadrante = "Forte Desempenho";
            console.log(`\nVocê foi qualificado como Forte Desempenho\n`);
             // ... desenhos ...
        } else if (this.pontuacao > 60 && this.pontuacao <= 70) {
            this.quadrante = "Diamante Bruto";
            console.log(`\nVocê foi qualificado como Diamante Bruto\n`);
             // ... desenhos ...
        } else if (this.pontuacao > 70 && this.pontuacao <= 85) { // <--- AJUSTADO DE 80 PARA 85
            this.quadrante = "Grande Desempenho";
            console.log(`\nVocê foi qualificado como Grande Desempenho\n`);
             // ... desenhos ...
        } else if (this.pontuacao > 85) {
            this.quadrante = "Alto desempenho";
            console.log(`\nVocê foi qualificado como Alto Desempenho! Parabéns!\n`);
        } else {
            console.log(`\nErro: Pontuação inválida (${this.pontuacao}). Faça o teste novamente!\n`);
        }
    }
    
    // ... restante dos métodos
}

// Execução
const matheus = new Avaliacao_Desempenho_Nine_box("Matheus", "Gerente", 0, "N/A");

matheus.apresentação(); // Agora vai imprimir por causa do console.log dentro do método
matheus.perguntas();    // Vai pausar aqui esperando você digitar os números
matheus.pontuacao_perguntas(); // Só executa depois que você terminar de responder