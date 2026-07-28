// =============================
// BOTÃO NÃO FUGINDO
// =============================

const nao = document.getElementById("nao");

let tentativas = 0;


function fugir(){

    tentativas++;

    const largura = window.innerWidth - 120;
    const altura = window.innerHeight - 80;


    nao.style.position = "fixed";

    nao.style.left =
    Math.random() * largura + "px";


    nao.style.top =
    Math.random() * altura + "px";


    if(tentativas === 3){

        nao.innerHTML = "😂 Errou";

    }


    if(tentativas === 5){

        nao.innerHTML = "🥺 Clica no SIM";

    }

}


nao.addEventListener("mouseenter", fugir);

nao.addEventListener("click", fugir);



// =============================
// BOTÃO SIM
// =============================


const sim = document.getElementById("sim");


sim.addEventListener("click",()=>{


    criarCorações();


    setTimeout(()=>{


        document
        .getElementById("inicio")
        .classList.remove("ativa");


        document
        .getElementById("encontro")
        .classList.add("ativa");


    },1200);



});




// =============================
// CORAÇÕES LEVES
// =============================


function criarCorações(){


const emojis=[

"❤️",
"💕",
"💖",
"🥰",
"😊"

];



for(let i=0;i<80;i++){


    let coracao=document.createElement("div");


    coracao.className="coracao";


    coracao.innerHTML =
    emojis[
    Math.floor(Math.random()*emojis.length)
    ];



    coracao.style.left =
    Math.random()*100+"vw";



    coracao.style.fontSize =
    (18 + Math.random()*18)+"px";



    coracao.style.animationDuration =
    (2 + Math.random()*2)+"s";



    coracao.style.animationDelay =
    Math.random()+"s";



    document.body.appendChild(coracao);



    setTimeout(()=>{

        coracao.remove();

    },4500);


}


}
