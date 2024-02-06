// DZ 2:
// 1)
const array = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28]
const numbers_1 = []
const numbers_2 = []

for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        numbers_1.push(array[i])
    } else if(array[i] % 2 !== 0){
        numbers_2.push(array[i])
    }
}
console.log(numbers_1);
console.log(numbers_2);
// 2)
const IMAX = {
    films : {
        bladeRunner2049 : {
            жанр: "киберпанк, научная фантастика, реальность",
            датаПремьеры: "23.01.2024",
            продолжительность: "2 часа",
            ценаБилета: "5 рублей",
            измерение: "3D"
        },
        fightingClub : {
            жанр: "саморазрушение, общественные принципы и нормы, реальность",
            датаПремьеры: "23.01.2024",
            продолжительность: "2 часа",
            ценаБилета: "1 шт. мыла",
            измерение: "3D"
        }
    },
    cartoons : {
        cyberpunkEdgerunners : {
            жанр: "тёмное будущее, общественные принципы и нормы, реальность, хороший конец",
            датаПремьеры: "23.01.2024",
            продолжительность: "12 серий",
            ценаБилета: "10 EDI",
            измерение: "2D"
        },
        overlord : {
            жанр: "прикольный",
            датаПремьеры: "23.01.2024",
            продолжительность: "50 часа",
            ценаБилета: "1 кость",
            измерение: "2D"
        }
    }
}

console.log("IMAX cinema:");
console.dir(IMAX);
// 3)
const unswer = parseInt(prompt("Введите число, чтобы получить его в римском формате, до 15."))

if(unswer <= 15 ){
    switch(unswer){
        case 1:
            alert("I")
            break
        case 2:
            alert("II")
            break
        case 3:
            alert("III")
            break
        case 4:
            alert("IV")
            break
        case 5:
            alert("V")
            break
        case 6:
            alert("VI")
        case 7:
            alert("VII")
            break
        case 8:
            alert("VII")
            break
        case 9:
            alert("IX" + "GDE GZHYGR!?")
            break
        case 10:
            alert("X")
            break
    }
} else{
    alert("ERROR_")
    console.warn("ERROR:");
}