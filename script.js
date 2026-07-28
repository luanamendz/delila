// BOTÃO NÃO FUGINDO

const botaoNao = document.getElementById("nao");

let tentativas = 0;


function fugir(){

    tentativas++;


    const largura =
    window.innerWidth - 120;


    const altura =
    window.innerHeight - 80;


    botaoNao.style.position = "fixed";


    botaoNao.style.left =
    Math.random() * largura + "px";


    botaoNao.style.top =
    Math.random() * altura + "px";



    if(tentativas === 3){

        botaoNao.innerHTML = "😂 Errou";

    }


    if(tentativas === 5){

        botaoNao.innerHTML = "🥺 Tenta o SIM";

    }


    if(tentativas === 8){

        botaoNao.innerHTML = "❤️ Você sabe a resposta";

    }

}



botaoNao.addEventListener(
"mouseover",
fugir
);


botaoNao.addEventListener(
"click",
fugir
);




// BOTÃO SIM


const botaoSim =
document.getElementById("sim");



botaoSim.onclick = function(){


    document
    .querySelector(".botoes")
    .style.display="none";


    document
    .getElementById("resultado")
    .style.display="block";


    soltarAmor();


};





// CORAÇÕES CAINDO LEVES


function soltarAmor(){


const emojis=[

"❤️",
"💖",
"💕",
"💗",
"🥰",
"😊"

];



let quantidade = 80;



for(let i=0;i<quantidade;i++){


    let e =
    document.createElement("div");


    e.className="emoji";


    e.innerHTML =
    emojis[
    Math.floor(
    Math.random()*emojis.length
    )
    ];



    e.style.left =
    Math.random()*100+"vw";



    e.style.animationDuration =
    (2 + Math.random()*2)+"s";



    e.style.animationDelay =
    Math.random()*1.5+"s";



    e.style.fontSize =
    (18 + Math.random()*15)+"px";



    document.body.appendChild(e);



    setTimeout(()=>{


        e.remove();


    },5000);



}


}
