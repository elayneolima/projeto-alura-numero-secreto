alert('Bem vindo(a) ao jogo do Número Secreto'); 

let numeroSecreto  = 10; 
let chuteUsuario;
let tentativas = 1;

// Enquanto chute não for igual ao numero secreto
while (chuteUsuario != numeroSecreto) {
    chuteUsuario = prompt('Insira o número secreto: ');
    //se chute for igual ao numero secreto 
    if (numeroSecreto == chuteUsuario){
        break    
    // se chute for diferente do numero secreto
    } else{
        if (chuteUsuario > numeroSecreto){
            alert(`você digitou ${chuteUsuario}, O numero secreto é menor!`);
        } else{
                alert(`você digitou ${chuteUsuario}, O numero secreto é maior!`);
        }

        tentativas++
    } 
}


if(tentativas > 1){
    alert(`Parabéns, parece que você acertou o número secreto com ${tentativas} tentativas!`);
}else{
    alert(`Parabéns, parece que você acertou o número secreto com ${tentativas} tentativa!`);
}
