<script>

// ===============================
// BOTÃO NÃO FUGINDO
// ===============================

const botaoNao = document.getElementById("nao");

let tentativas = 0;


function fugir(){

    tentativas++;


    const largura = window.innerWidth - botaoNao.offsetWidth - 20;
    const altura = window.innerHeight - botaoNao.offsetHeight - 20;


    botaoNao.style.position = "fixed";


    botaoNao.style.left =
    Math.max(10, Math.random() * largura) + "px";


    botaoNao.style.top =
    Math.max(10, Math.random() * altura) + "px";



    // Mensagens engraçadas

    if(tentativas === 3){

        botaoNao.innerHTML = "😂 Errou";

    }


    if(tentativas === 5){

        botaoNao.innerHTML = "🥺 Tenta o SIM";

    }


    if(tentativas === 8){

        botaoNao.innerHTML = "❤️ Você sabe";

    }

}



// Computador

botaoNao.addEventListener(
"mouseover",
fugir
);


// Celular

botaoNao.addEventListener(
"touchstart",
fugir
);


// Clique

botaoNao.addEventListener(
"click",
fugir
);




// ===============================
// BOTÃO SIM
// ===============================


const botaoSim = document.getElementById("sim");


botaoSim.onclick = function(){


    document.querySelector(".botoes").style.display="none";


    document.getElementById("resultado").style.display="block";


    soltarAmor();


};





// ===============================
// CHUVA DE CORAÇÕES
// ===============================


function soltarAmor(){


    const emojis=[

        "❤️",
        "💖",
        "💕",
        "💗",
        "💘",
        "🥰",
        "😊"

    ];



    const quantidade = 80;



    for(let i=0;i<quantidade;i++){


        let emoji = document.createElement("div");


        emoji.className="emoji";


        emoji.innerHTML =
        emojis[
            Math.floor(
                Math.random()*emojis.length
            )
        ];



        emoji.style.left =
        Math.random()*100 + "vw";



        emoji.style.animationDuration =
        (2 + Math.random()*2) + "s";



        emoji.style.animationDelay =
        Math.random()*1.5 + "s";



        emoji.style.fontSize =
        (18 + Math.random()*18) + "px";



        document.body.appendChild(emoji);



        setTimeout(()=>{

            emoji.remove();

        },5000);


    }


}



</script>
