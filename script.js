
let jogadores = [
    {
        nome: "zé da manga",
        status: true,
    },
    {
        nome:  "carlos",
        status: false,
    }
]
for(let i = 0; i < jogadores.length; i++){
    if (jogadores[i].status == true){
          console.log(`${jogadores[i].nome} esta ativo`)
    }
}
for(let i = 0; i < jogadores.length; i++){
    if (jogadores[i].status == false){
        console.log(`${jogadores[i].nome} esta inativo`) 
    }
}
