// ===============================
// FAQ
// ===============================

const perguntas = document.querySelectorAll(".faq-item");

perguntas.forEach((item) => {

    const botao = item.querySelector(".faq-question");

    botao.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


// ===============================
// CONTADOR REGRESSIVO (24 horas)
// ===============================

const oferta = new Date().getTime() + (24 * 60 * 60 * 1000);

const contador = document.createElement("div");

contador.id = "contador";

contador.style.position = "fixed";
contador.style.bottom = "20px";
contador.style.right = "20px";
contador.style.background = "#00d9ff";
contador.style.color = "#000";
contador.style.padding = "15px 20px";
contador.style.borderRadius = "10px";
contador.style.fontWeight = "bold";
contador.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
contador.style.zIndex = "9999";

document.body.appendChild(contador);

function atualizarContador(){

    const agora = new Date().getTime();

    const distancia = oferta - agora;

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contador.innerHTML =
    "🔥 Oferta termina em <br><strong>" +
    horas + "h " +
    minutos + "m " +
    segundos + "s</strong>";

    if(distancia < 0){

        contador.innerHTML = "Oferta encerrada.";

    }

}

setInterval(atualizarContador,1000);


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const elementos = document.querySelectorAll("section");

function aparecer(){

    elementos.forEach((el)=>{

        const topo = el.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";

        }

    });

}

elementos.forEach((el)=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "1s";

});

window.addEventListener("scroll",aparecer);

aparecer();


// ===============================
// BOTÕES "COMPRAR"
// ===============================

const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao)=>{

    botao.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("Aqui você colocará o link da Hotmart, Kiwify ou Mercado Pago.");

    });

});