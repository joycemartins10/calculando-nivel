function saldoVitorias ( vitorias , derrotas ) {
      return vitorias - derrotas ;
     
}

let resultado = saldoVitorias ( 150 , 50 ) 

  
switch (nivel){

    case ( nivel <= 10 ):
         console.log (" ferro ") 
          break;
     
    case ( nivel >= 11 <= 20 ):
          console.log (" bronze ") 
           break;  

    case ( nivel >= 21 <= 50 ):
          console.log (" prata ")   
           break;
           
    case ( nivel >= 51 <= 80 ):
          console.log (" ouro ")  
           break;
           
    case ( nivel >= 81 <= 90 ):
          console.log (" diamante ")  
           break;  

    case ( nivel >= 91 <= 100 ):
          console.log (" lendário ") 
           break;
           
    case ( nivel >= 101 ):
          console.log (" imortal ") 
          break;
      
          console.log (" O herói tem de saldo" + saldoVitorias + " e está no nível " + nivel )
        
}
