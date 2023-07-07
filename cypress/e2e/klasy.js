class Sukces {
    koncowyTekst() {
        return console.log("Dziękujemy za skorzystanie z naszego oprogramowania")
    }
   
}

class Obliczenia extends Sukces {
    get tekst() {
        return "Twoje obliczenie to: "
    }
    get komunikat() {
        return "Twoja liczba jest mniejsza od 10!"
    }

    dodawanie() {
        return 2+6
    }

    mnozenie() {
        return 4*5
    }

    koncowyRezultat(koncowaWartosc) {
        console.log(this.tekst + " " + koncowaWartosc)
        if(koncowaWartosc < 10) {
            console.log(this.komunikat)
        }
    }
}






const wykonajObliczenie = new Obliczenia();
console.log(wykonajObliczenie.koncowyTekst())




