const imiona = ["Jaś", "Krzyś", "Ola", "Tomasz", "Ala-srala"];
const imiona2 =["Maja", "Milena", "Seba", "Brajanek"];

//1. Weryfikacja długości tablicy
//console.log(imiona.length > 2)

//2. Dostawanie się do elementów tablicy -> INDEKSY ZACZYNAJĄ SIĘ OD WARTOŚCI 0
//console.log(imiona[2])

//3. Nadpisywanie elementu w tablicy
// imiona[0] = "Twoja stara";
// console.log(imiona)

//4. Dodawanie elementu do tablicy
// console.log(imiona.length)
// imiona.push("To kopara")
// console.log(imiona.length)
// console.log(imiona)

//5. Usuwanie elementu z końca tablicy
// imiona.pop();
// console.log(imiona)

//6. Usuwanie elementu z początku tablicy
// imiona.shift();
//console.log(imiona)

//7. Dodawanie elementu na początku tablicy
// imiona.unshift("Janinka");
// console.log(imiona)

//8. Usuwanie konkretnego elementu z tablicy
// const indexElement = imiona.indexOf("Ola")
// imiona.splice(indexElement, 1)
// console.log(imiona)

//9. Przerobienie tablicy na String
// const string = imiona.join(" hehe ");
// console.log(string);

//10. Odwracanie elementów tablicy
// imiona.reverse();
// console.log(imiona) 

//11. Sortowanie tablicy

// imiona.sort().reverse();
// console.log(imiona)

//12. Mapowanie elementów w tablicy

// imiona.map(imie => {
//     if(imie.length > 5) {
//         console.log("Imie: " + imie + " ma więcej niż 5 znaków")
//     } else {
//         console.log("Imie: " + imie + " ma mniej niż 5 znaków")
//     }
// })

//13. Łączenie tablic
const imiona3 = imiona.concat(imiona2);
console.log(imiona3)
