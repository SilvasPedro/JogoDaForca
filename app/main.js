const palavrasSecretas = ["IDEIA", "CARRO", "JANELA", "LIVRO"];
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let contadorErros = 0;
const palavraContainer = document.getElementById("palavra-container");


//Math.random(): Gera o número aleatório.
// * palavrasSecretas.length: Ajusta o alcance do número para o tamanho do nosso array.
// Math.floor(): Garante que teremos um índice inteiro (0, 1, 2, etc.).
const palavra = palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)];

const adicionarTracos = () => {
    for (let i = 0; i < palavra.length; i++) {
        const traco = document.createElement("span");
        traco.textContent = '_';
        traco.classList.add("traco");
        palavraContainer.appendChild(traco);
    }
}

const criarTeclado = () => {
    for (let i = 0; i < alfabeto.length; i++) {
        const botao = document.createElement("button");
        botao.textContent = alfabeto[i];
        botao.classList.add("botao");
        document.getElementById("teclado").appendChild(botao);
        botao.addEventListener('click', () => {
            const letra = botao.textContent;
            botao.disabled = true;
            if (palavra.includes(letra)) {
                for (let i = 0; i < palavra.length; i++) {
                    if (palavra[i] === letra) {
                        document.querySelectorAll(".traco")[i].textContent = letra;
                    }
                }
            } else {
                contadorErros++;
                document.getElementById("erros").textContent = contadorErros;
                document.getElementById("letras-erradas").textContent += letra;
            }

            if (contadorErros === 6) {
                document.getElementById("mensagem-final").textContent = "Você perdeu! A palavra era: " + palavra;
                const botaoTentarNovamente = document.createElement("button");
                botaoTentarNovamente.textContent = "Tentar novamente";
                botaoTentarNovamente.classList.add("botaoTentarNovamente");
                document.getElementById("teclado").appendChild(botaoTentarNovamente);
                document.querySelectorAll(".botao").forEach(botao => {
                    botao.disabled = true;
                })
                botaoTentarNovamente.addEventListener('click', () => {
                    location.reload();
                });
            }

            if (!palavraContainer.textContent.includes('_')) {
                document.getElementById("mensagem-final").textContent = "Você ganhou!";
                const botaoVenceu = document.createElement("button");
                botaoVenceu.textContent = "Jogar novamente";
                botaoVenceu.classList.add("botaoVenceu");
                document.getElementById("teclado").appendChild(botaoVenceu);
                document.querySelectorAll(".botao").forEach(botao => {
                    botao.disabled = true;
                })
                botaoVenceu.addEventListener('click', () => {
                    location.reload();
                });
            }
        });
    }
}



adicionarTracos();
criarTeclado();