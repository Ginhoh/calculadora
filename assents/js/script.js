
/*function acao(x){
    teste = document.getElementById(`${x}`)
    arquivo = teste.textContent
    console.log(arquivo)
  
}*/
function elementor(x){
    bt = document.getElementById(`${x}`)
    escolhido = bt.textContent
    r = document.getElementById('res')
   // console.log(n1+n5)
   // console.log(Number(n1)+Number(n5))
   // console.log(Number(n1+n9))
    r.innerHTML += escolhido
    
}
function resposta(){
    r = document.getElementById('res')
    versionNum = eval(r.textContent)
    //r.innerHTML = 'Tudo funcionando perfeitamente'
    r.innerHTML = versionNum
}
function limpar(){
    r = document.getElementById('res')
    r.innerHTML = ''
}
function tecla(){elementor('um')}
/*Documentação dia 16/05
Consegui fazer exibir no console o texto do botão (no caso o número) e transformar em número
Consegui também juntar os númeors e somar, os exemplos estão no console.log
*/ 

/*Documentação dia 27/05
Consegui fazer a visualização de todas as operações, porém, ainda não conseguir exibir o resultado
Será que consigo fazer com que um HTML vire uma operação?
*/
/*Documentação dia 30=05 
Eu não consegui, pesquisei, e descobri que precisava usar uma função chamada eval()
ela executa comandos dentro de strings
*/
