// Dodavanje X ikonice svakom li elementu
var myNodelist = document.getElementsByTagName("LI");  //Izvlaci sve li elemente
var i;   //Deklarisemo li varijablu
for (i = 0; i < myNodelist.length; i++) {  //For petlja koja prolazi kroz svaki li element
  var span = document.createElement("SPAN");  //Kreiramo span elelement 
  var txt = document.createTextNode("\u00D7");  //Dodajemo X
  span.className = "close";  //Dodavanje class-e span elementu
  span.appendChild(txt);  // Span elementu dodajemo sadrzaj txt varijable
  myNodelist[i].appendChild(span);  //Svakom li elelemntu dodajemo span element
}
// Dodavanje funkcije koja uklanja li element onclick
var close = document.getElementsByClassName("close"); //Izvlacimo span element
var i; //Deklarisemo varijablu i
for (i = 0; i < close.length; i++) { //For petlja koja prolazi kroz svaki close
  close[i].onclick = function() { // Da se za svaki close odradi funkcija onclick
    var div = this.parentElement; //Deklaracija varijable div i njene vrijednsti
    div.style.display = "none"; //Promjena css-a close dugmeta
  }
}

function newElement() { //Deklaracija funckije
  var li = document.createElement("li"); //Kreiramo novi li element
  var inputValue = document.getElementById("myInput").value; //Dodajemo vrijednost inputValue varijabli, a to je vrijednost inputa
  var t = document.createTextNode(inputValue); //Deklarisemo t varijablu i dodajemo joj vrijednost inputValue varijable
  li.appendChild(t); //Novom li elemntu dodajemo vrijednost t varijable, tj. vrijednost inputa
  if (inputValue === '') { //Ako je input prazan a dugme se pritisne
    alert("You must write something!"); // Vrace ovu poruku :"You must write something!" (u alertu)
  } else {
    document.getElementById("myUL").appendChild(li); //Ako postoji unos uzimamo element sa myUL ID-em i dodajemo mu element li sa vrijednoscu inputValue
  }
   document.getElementById("myInput").value = ""; //Resetujemo vrijednost unosa

//Kod ispod dodaje istu span element sa X znakom u svaki li element(pa i u novi) i brise ga onclick [Isti kod kao i na pocetku]
  var span = document.createElement("SPAN");  
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";       
    }
  }
}