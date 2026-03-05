function randomPassword() {
    
    let tamanhoSenha = 8;
    let senha = "";
    let caracteres = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%&*()?;."
    
    for (let i = 0; i < tamanhoSenha; i++) {
        let numerosAleatorios = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.substring(numerosAleatorios, numerosAleatorios + 1);
    }

    document.getElementById("password").textContent = senha;
    
}

const botao = document.getElementById("botao1");

botao.addEventListener("click", randomPassword);
