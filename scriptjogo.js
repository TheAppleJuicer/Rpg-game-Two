function showSicario() {
    return document.getElementById("descricao").textContent = ("Sicário, um assassino de aluguel, o pior dos piores, quer alguém morto pelo preço mais barato possível? Esse é o seu cara, só não espere muito dele, ele faz o que é mandado e acaba com mais dinheiro do que você pagou ele (ele pode ter te roubado)");
}
function showSoldado() {
    return document.getElementById("descricao").textContent = ("Soldado, máquinas feitas de carne e aço ou apenas aço treinadas para o combate desde sua criação, motores irrefreáveis por qualquer coisa em seu caminho, utilizados em guerra e outros conflitos, mas agora que não há nenhum dos dois, eles ansiam e esperam para dilacerar algo sem serem punidos.");
}
document.addEventListener("DOMContentLoaded", function () {
    const textoCaixa = document.getElementById('descricao');
    const texto = `Seu herói escolhido decidirá que caminho durante esta jornada árdua você progredirá
    sobre. Complete esta missão e será banhado em riquezas, honras e virtudes e um pouco mais de tudo
    que quiser, porque apesar de tudo, você matará um dragão. Isto não é uma tarefa para os do coração
    fraco e de mente abalável, é para aqueles de peito de ferro e de alma espirituada. 
    Desejo-te sorte, aventureiro, que seus caminhos sejam bons e tuas lutas mais ainda.`;

    let index = 0;

    function typeWriterEffect() {
        if (index < texto.length) {
            textoCaixa.innerHTML += texto.charAt(index);
            if (texto.charAt(index) === ".") textoCaixa.innerHTML += "<br><br>"; // Adds space after sentences
            index++;
            setTimeout(typeWriterEffect, 50);
        }
        if (index >= texto.length) {
            clearTimeout(typeWriterEffect);
        }
    }

    const textoCavalo = document.getElementById('cavalo');
    const texto2 = `O mundo não está mais o mesmo, após as guerras, os soldados estão estagnados, os saqueadores tem sua maior sorte, os sagrados estão tendo que ajudar a maioria das vítimas dos danos colaterais, porém estes são os problemas no grande escopos, vocês precisam de dinheiro, rápido, muito dinheiro (ou você é um soldado com sede por sangue e só quer matar e ferir outras criaturas - seu psicopata - ) e o jeito mais rápido que vocês conhcem de se adquirir ouro é aventurando, pegando recompensas através de pessoas desesperadas.`;

    let i = 0;

    function typeWriterEffect2() {
        if (i < texto2.length) { 
            textoCavalo.innerHTML += texto2.charAt(i);
            if (texto2.charAt(i) === ".") textoCavalo.innerHTML += "<br></br>"; {
                i++;
                setTimeout(typeWriterEffect2, 50);
;
            }
           
        }
    }
   

    typeWriterEffect();
    typeWriterEffect2();
    
});


