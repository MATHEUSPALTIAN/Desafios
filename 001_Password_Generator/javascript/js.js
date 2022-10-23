let numero_input = document.getElementById("ival");
let inputnum = document.getElementById("rangedonum");
let checkbox_maisculo = document. getElementById('maiusculo');
let checkbox_miniscula = document. getElementById('minuscula');
let checkbox_numeros = document. getElementById('numeros');
let checkbox_simbolos = document. getElementById('simbolos');
let força = document.getElementById('forcadasenha');
let passwordsenha = document.getElementById('senhagerada');
let copiar = document.getElementById('icopy');

passwordsenha = senha3

 async function copy(){
    try {
        await navigator.clipboard.writeText(novasenha)
        console.log('Page URL copied to clipboard');
        
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
}

function mudarNum(){
    numero_input.innerHTML = Number(inputnum.value)
}
/* SCRIPT PARA GERAR SENHA */

senha = []
senha3 = ''
cont = 0
function password(){
    let passwordsenha = document.getElementById('isenha');
    let num_quant = (Number(inputnum.value))
    cont = 0
    senha3 = ''
    senha = []
    for ( let i = 0; i < num_quant; i++ ) {

        const number = Math.floor(Math.random()*10);

        /* LETRAS MINUSCULAS */

        let num_letra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let letra = num_letra[(Math.floor(Math.random() * num_letra.length))];

        /* LETRAS MAISCULAS */
        let num_letraM = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let letraM = num_letraM[(Math.floor(Math.random() * num_letraM.length))];

        
        /* SINAIS */

        let array = ["!","%","?","&","@","£","$","#"];

        let array2 = array[Math.floor(Math.random()*(array.length))];

        let objeto = []
        if (checkbox_maisculo.checked == true){
            objeto.push(letraM);
        }
        if (checkbox_miniscula.checked == true){
            objeto.push(letra);
        }
        if (checkbox_numeros.checked == true){
            objeto.push(number);
        }
        if (checkbox_simbolos.checked == true){
            objeto.push(array2);
        }
        senha2 = objeto[Math.floor(Math.random()*(objeto.length))];
        senha.push(senha2)


    }

    if (checkbox_maisculo.checked == true){
        cont = cont + 1 ;
    }
    if (checkbox_miniscula.checked == true){
        cont = cont + 1 ;
    }
    if (checkbox_numeros.checked == true){
        cont = cont + 1 ;
    }
    if (checkbox_simbolos.checked == true){
        cont = cont + 1 ;
    }

    for ( let i = 0; i < senha.length; i++ ){
        senha3 += senha[i] 
    }
    if (checkbox_maisculo.checked ==false && checkbox_miniscula.checked == false && checkbox_numeros.checked == false & checkbox_simbolos.checked == false){
        passwordsenha.innerHTML = '';
        passwordsenha.innerHTML = 'Nenhuma opção selecionada'
        senha3 = ''
        senha = []
    }else{
        passwordsenha.innerHTML = '';
        passwordsenha.innerHTML = senha3;
        novasenha = senha3        
        if (cont== 4 && senha.length >=12){
                força.innerHTML = 'SuperForte 🦸🏽‍♂️'
            } 
        else if (cont >= 3  && senha.length >=8){
                força.innerHTML = 'Forte 💪'
        } 
        else if (cont >= 2  &&  senha3.length >=8){
                força.innerHTML = 'Média 🥴'
        } 
        else if (cont >= 1  && senha3.length >= 5)
            {
                força.innerHTML = 'Fraca 🤕'}
                
        else{
            força.innerHTML = 'SuperFraca 🤢'
        }
 
    }}


     
    
    
