document.addEventListener("DOMContentLoaded", function () {
    const textoCavalo = document.getElementById('cavalo');
    const descricao = document.getElementById('descricao');
    const descricaoHabilidades = document.getElementById("descricaoHabilidades");

    const texto2 = `O mundo não está mais o mesmo, após as guerras, os soldados estão estagnados, os saqueadores têm sua maior sorte, os sagrados estão tendo que ajudar a maioria das vítimas dos danos colaterais. Porém estes são os problemas no grande escopo: vocês precisam de dinheiro, rápido, muito dinheiro (ou você é um soldado com sede por sangue e só quer matar e ferir outras criaturas — seu psicopata — ), e o jeito mais rápido que vocês conhecem de se adquirir ouro é aventurando, pegando recompensas através de pessoas desesperadas.`;

    const texto = `Seu herói escolhido decidirá que caminho durante esta jornada árdua você progredirá sobre. Complete esta missão e será banhado em riquezas, honras e virtudes e um pouco mais de tudo que quiser, porque apesar de tudo, você matará um dragão. Isto não é uma tarefa para os do coração fraco e de mente abalável, é para aqueles de peito de ferro e de alma espirituada. Desejo-te sorte, aventureiro, que seus caminhos sejam bons e tuas lutas mais ainda.`;

    let isTyping = false;
    let currentTimeouts = [];
    let etapaAtual = 0; // 0 = cavalo, 1 = descrição final

    function typeWriterEffect(element, text, speed = 30, callback) {
        if (isTyping) return;
        isTyping = true;
        let i = 0;
        element.innerHTML = "";

        function write() {
            if (i < text.length) {
                const char = text.charAt(i);
                element.innerHTML += char;
                if (char === ".") element.innerHTML += "<br><br>";
                i++;
                currentTimeouts.push(setTimeout(write, speed));
            } else {
                isTyping = false;
                if (callback) callback();
            }
        }

        write();
    }

    function skipTypewriter(element, text, callback) {
        if (!isTyping) return;
        currentTimeouts.forEach(clearTimeout);
        currentTimeouts = [];
        element.innerHTML = text.replaceAll(".", ".<br><br>");
        isTyping = false;
        if (callback) callback();
    }

    // Pula o texto atual (cavalo ou descrição)
    window.pularTexto = function () {
        if (etapaAtual === 0) {
            skipTypewriter(textoCavalo, texto2, () => {
                etapaAtual = 1;
                typeWriterEffect(descricao, texto, 30);
            });
        } else if (etapaAtual === 1) {
            skipTypewriter(descricao, texto);
        } else {
            // Caso um herói esteja sendo exibido
            skipTypewriter(descricao, descricao.innerText);
        }
    };

    function mostrarDescricaoHabilidade(texto) {
        descricaoHabilidades.innerText = texto;
    }

    function limparDescricaoHabilidade() {
        descricaoHabilidades.innerText = "";
    }

    // Tornar as funções globais
    window.mostrarDescricaoHabilidade = mostrarDescricaoHabilidade;
    window.limparDescricaoHabilidade = limparDescricaoHabilidade;

    // Inicia com texto do cavalo
    document.getElementById("pularTexto").addEventListener("click", pularTexto);

    typeWriterEffect(textoCavalo, texto2, 30, () => {
        etapaAtual = 1;
        typeWriterEffect(descricao, texto, 30);
    });

    // Botões dos heróis
    window.showSicario = function (img) {
        let imagem = document.getElementById('imagemCentral');
        imagem.setAttribute("src", img);
        if (isTyping) return;
        const sicarioTexto = "Sicário, um assassino de aluguel, o pior dos piores, quer alguém morto pelo preço mais barato possível? Esse é o seu cara. Só não espere muito dele. Ele faz o que é mandado e acaba com mais dinheiro do que você pagou a ele (ele pode ter te roubado).";
        typeWriterEffect(descricao, sicarioTexto, 30);
    };
    
    window.showSoldado = function (img) {
        let imagem = document.getElementById('imagemCentral');
        imagem.setAttribute("src", img);
        if (isTyping) return;
        const soldadoTexto = "Soldado, máquinas feitas de carne e aço ou apenas aço, treinadas para o combate desde sua criação. Motores irrefreáveis por qualquer coisa em seu caminho. Utilizados em guerra e outros conflitos, mas agora que não há nenhum dos dois, eles ansiam e esperam para dilacerar algo sem serem punidos.";
        typeWriterEffect(descricao, soldadoTexto, 30);
    };
    
    window.showSagrado = function (img) {
        let imagem = document.getElementById('imagemCentral');
        imagem.setAttribute("src", img);
        if (isTyping) return;
        const sagradoTexto = "Sagrado... seres de fé e poder, chamados por forças divinas ou ancestrais. Sua missão: proteger, curar, punir. Não são santos perfeitos, mas estão acima dos mortais comuns. Sua presença é bênção e ameaça.";
        typeWriterEffect(descricao, sagradoTexto, 30);
    };
    
});
