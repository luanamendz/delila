// ============================
// Fundo com corações subindo
// ============================

const fundo = document.querySelector(".hearts");

const coracoes = ["🤍","💖","💕","💗","💘","❤️"];

setInterval(() => {

    const heart = document.createElement("span");

    heart.innerHTML =
        coracoes[Math.floor(Math.random() * coracoes.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 8) + "s";

    fundo.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}, 500);

// ============================
// Botão NÃO fugindo
// ============================

const botaoNao = document.getElementById("nao");

let tentativas = 0;

function fugir() {

    tentativas++;

    const largura = window.innerWidth - botaoNao.offsetWidth - 20;
    const altura = window.innerHeight - botaoNao.offsetHeight - 20;

    botaoNao.style.position = "fixed";
    botaoNao.style.left = Math.random() * largura + "px";
    botaoNao.style.top = Math.random() * altura + "px";

    if (tentativas === 3) {
        botaoNao.innerHTML = "😂 Nem tenta";
    }

    if (tentativas === 5) {
        botaoNao.innerHTML = "🥺 Vai, clica no SIM";
    }

    if (tentativas === 8) {
        botaoNao.innerHTML = "❤️ Eu sei que você quer";
    }

    if (tentativas === 12) {
        botaoNao.innerHTML = "😝 Desisto nunca!";
    }
}

botaoNao.addEventListener("mouseenter", fugir);
botaoNao.addEventListener("click", fugir);

// ============================
// Clique no SIM
// ============================

const botaoSim = document.getElementById("sim");

botaoSim.addEventListener("click", () => {

    chuva();

    setTimeout(() => {

        document
            .getElementById("inicio")
            .classList.remove("ativa");

        document
            .getElementById("encontro")
            .classList.add("ativa");

    }, 2200);

});

// ============================
// Chuva de amor
// ============================

function chuva() {

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "💘",
        "💗",
        "🥰",
        "😍",
        "😘",
        "😊",
        "💞"
    ];

    for (let i = 0; i < 400; i++) {

        const item = document.createElement("div");

        item.className = "chuva";

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.left = Math.random() * 100 + "vw";

        item.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        item.style.animationDelay =
            Math.random() * 2 + "s";

        item.style.fontSize =
            (18 + Math.random() * 25) + "px";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 7000);

    }

    explosao();

}

// ============================
// Explosão no centro
// ============================

function explosao() {

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "💘",
        "🥰"
    ];

    for (let i = 0; i < 120; i++) {

        const item = document.createElement("div");

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = "50%";
        item.style.top = "50%";
        item.style.pointerEvents = "none";
        item.style.fontSize =
            (18 + Math.random() * 30) + "px";
        item.style.zIndex = "9999";

        const angulo = Math.random() * Math.PI * 2;
        const distancia = 150 + Math.random() * 350;

        const x = Math.cos(angulo) * distancia;
        const y = Math.sin(angulo) * distancia;

        item.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px) scale(1.4)`,
                    opacity: 0
                }
            ],
            {
                duration: 1800,
                easing: "ease-out"
            }
        );

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 1800);

    }

}

// ============================
// Confete extra a cada clique
// ============================

document.addEventListener("click", e => {

    if (e.target.id !== "sim") return;

    for (let i = 0; i < 60; i++) {

        const c = document.createElement("div");

        c.className = "chuva";
        c.innerHTML = "✨";

        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration =
            (2 + Math.random() * 2) + "s";
        c.style.fontSize =
            (10 + Math.random() * 20) + "px";

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 5000);

    }

});
