let heroi = " igor"
let nivel = "20000"

console.log("nome do meu heroi:" +heroi)
console.log("o meu level é:" +nivel)

if(nivel <=1000 ){
    nivel = "ferro"
    console.log("O heroi "+heroi+ " esta no nível " +nivel )
}

else if(nivel >= 1001 && nivel < 2000){
    nivel = "prata"
    console.log("O heroi "+heroi+ " esta no nível " +nivel )
}
else if(nivel >= 2001 && nivel <= 5000){
     nivel = "Ouro"
    console.log("O heroi "+heroi+ " esta no nível " +nivel )
}
else if(nivel >= 5001 && nivel < 8000){
    nivel = "Platina/diamante"
    console.log("O heroi "+heroi+ " esta no nível " +nivel )
}
else if(nivel >= 8001 && nivel < 9000){
    nivel = "Ascendente"
    console.log("O heroi "+heroi+ " esta no nível " +nivel )
}
else if(nivel >= 9001 && nivel < 10000){
    nivel = "imortal"
    console.log("O heroi "+heroi+ " esta no nível " +nivel )
}
else if(nivel >= 10000){
    nivel = "radiante"
    console.log("O heroi "+heroi+ " esta no nível " +nivel )
}



