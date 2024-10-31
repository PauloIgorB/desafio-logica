let nome = "Paulo"
let xp = 0
let rank

if (xp <= 1000){
    rank = "ferro"
}
if (xp > 1000 && xp <= 2000){
    rank = "bronze"
}
if (xp > 2000 && xp <= 5000){
    rank = "prata"
}
if (xp > 5000 && xp <= 7000){
    rank = "ouro"
}
if (xp > 7000 && xp <= 8000){
    rank = "platina"
}
if (xp > 8000 && xp <= 9000){
    rank = "ascendente"
}
if (xp > 9000 && xp <= 10000){
    rank = "imortal"
}
if (xp > 10000){
    rank = "radiante"
}

console.log("O herói, " + nome + ", está no rank " + rank)