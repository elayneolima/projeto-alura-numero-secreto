alert('Bem vindo(a) ao jogo do Número Secreto'); 

let numeroSecreto  = 10; 
let chuteUsuario;


while (chuteUsuario != numeroSecreto) {
    chuteUsuario = prompt('Insira o número secreto: ');
    if (numeroSecreto == chuteUsuario){
        alert('Parabéns, parece que você acertou!');
    } else{
        if (chuteUsuario > numeroSecreto){
            alert(`você digitou ${chuteUsuario}, O numero secreto é menor!`);
        } else{
                alert(`você digitou ${chuteUsuario}, O numero secreto é maior!`);
             }
    }

}

