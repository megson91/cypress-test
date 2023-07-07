const imie = "Aicja";

if(imie == "Alicja") {
    pierwszaFunkcja();
} else {
    drugaFunkcja();
}

//Pierwszy sposób

function pierwszaFunkcja(wartosc1, wartosc2) {
    const suma = wartosc1 + wartosc2;
    return console.log("To ja pierwsza funkcja! " + suma)
}
pierwszaFunkcja(10, 20)


function drugaFunkcja() {
    const suma = 10+5;
    return console.log("To ja druga funkcja! " + suma) 
        
}


//Drugi sposób (funkcja strzałkowa)
// const drugaFunkcja = () => {
//     return console.log("To ja druga funkcja!")
// }
// drugaFunkcja();

