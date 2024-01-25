alert('Bem vindo(a) ao jogo do Número Secreto'); 

let numeroSecreto  = 10; 
let chuteUsuario;
let tentativas = 1;

// Enquanto chute não for igual ao numero secreto
while (chuteUsuario != numeroSecreto) {
    chuteUsuario = prompt('Insira o número secreto: ');
    //se chute for igual ao numero secreto 
    if (numeroSecreto == chuteUsuario){
        alert(`Parabéns, parece que você acertou o número secreto com ${tentativas} tentativas!`);
    } else{
        if (chuteUsuario > numeroSecreto){
            alert(`você digitou ${chuteUsuario}, O numero secreto é menor!`);
        } else{
                alert(`você digitou ${chuteUsuario}, O numero secreto é maior!`);
        }
    }
}