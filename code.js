function confermaIscrizione() {
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    let email = document.getElementById("email");
    let frequenza = document.getElementById("frequenza");

    let message = 'Grazie per esserti iscritt* alla nostra Newsletter ' + nome.value + '!\n' +
        "\nTi verranno inviate tutte le ultime notizie sul mondo dei libri all'indirizzo " + email.value +
        " con frequenza " + frequenza.value + ".";

    confirm(message);
}

function calcolaTotale() {
    let libri = document.querySelectorAll('input[type=checkbox]:checked');

    let totale = document.getElementById("totaleOrdine");

    if (libri.length == 0)
        return;

    totale.innerText = '';
    let importoTotale = 0;
    for (let i = 0; i < libri.length; i++) {

        let copieLibro = libri[i].name + "Copie";
        let copie = document.getElementsByName(copieLibro);

        let prezzo = parseFloat(libri[i].value) * parseFloat(copie[0].value);
        importoTotale += prezzo;

    }

    totale.innerText = "Totale: " + importoTotale + " euro.";
}