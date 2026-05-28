const nomeCompleto = "Samara Vauna Seabra";
const cidadeCursoUniversidade = "Sao Paulo / ADS - Mackenzie";

function mostrarSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    const diasDaSemana = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];

    let saudacao = "Boa Noite";

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom Dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa Tarde";
    }

    alert(
        nomeCompleto + "\n" +
        cidadeCursoUniversidade + "\n" +
        saudacao + "! Hoje é " + diasDaSemana[agora.getDay()] + "."
    );
}

window.addEventListener("load", mostrarSaudacao);
