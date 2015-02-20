var container = document.querySelector('.container')
function toggleVissilbe(target) {
  container.querySelector('.visible').removeAttribute('class', 'visible')
  container.querySelector(target).setAttribute('class', 'visible')
}

function Reken(optie) {
 	getal1 = parseFloat(document.reken.getal1.value);
 	getal2 = parseFloat(document.reken.getal2.value);
 	if (isNaN(getal1)) getal1 = 0;
 	if (isNaN(getal2)) getal2 = 0;

 	if (optie == "+") uitkomst = getal1 + getal2;
 	if (optie == "-") uitkomst = getal1 - getal2;
 	if (optie == "x") uitkomst = getal1 * getal2;
 	if (optie == "/") uitkomst = getal1 / getal2;
 	document.reken.uitkomst.value = uitkomst;
 	document.reken.getal1.focus();}

function Schonen() {
	document.reken.reset();
	document.reken.getal1.focus();}


function laatZien(divID) {
				var item = document.getElementById(divID);
				var item1 = document.getElementById('euroOmzetter');
				var item2 = document.getElementById('dollarOmzetter');
				if (item == item1) {
					item1.className = 'zichtbaar';
					item2.className = 'verstopt';
				}
				if (item == item2) {
					item1.className = 'verstopt';
					item2.className = 'zichtbaar';
				}
			}
			function dollarOmzetter() {
				var euro1 = document.form1.dollarvooreuro.value;
				var dollar1 = document.form1.aantaldollar.value;
				var resultaat1 = parseFloat(dollar1) / parseFloat(euro1);
				if (isNaN(euro1) || isNaN(euro2)) {
					alert('Je moet een cijfer invullen!')
				}
				else{
				alert ('Voor ' + dollar1 + ' dollar ontvang je ' + resultaat1.toFixed(2) + ' euro');
				}
			}
			function euroOmzetter() {
				var dollar2 = document.form2.eurovoordollar.value;
				var euro2 = document.form2.aantaleuro.value;
				var resultaat2 = parseFloat(euro2) / parseFloat(dollar2);
				alert ('Voor ' + euro2 + ' euro ontvang je ' + resultaat2.toFixed(2) + ' dollar');
			}					











function laatZien(divID) {
				var item = document.getElementById(divID);
				var item1 = document.getElementById('euroOmzetter');
				var item2 = document.getElementById('dollarOmzetter');
				if (item == item1) {
					item1.className = 'zichtbaar';
					item2.className = 'verstopt';
				}
				if (item == item2) {
					item1.className = 'verstopt';
					item2.className = 'zichtbaar';
				}
			}
			function dollarOmzetter() {
				var euro1 = document.form1.dollarvooreuro.value;
				var dollar1 = document.form1.aantaldollar.value;
				var resultaat1 = parseFloat(dollar1) / parseFloat(euro1);
				if (isNaN(euro1) || isNaN(euro2)) {
					alert('Je moet een cijfer invullen!')
				}
				else{
				alert ('Voor ' + dollar1 + ' dollar ontvang je ' + resultaat1.toFixed(2) + ' euro');
				}
			}
			function euroOmzetter() {
				var dollar2 = document.form2.eurovoordollar.value;
				var euro2 = document.form2.aantaleuro.value;
				var resultaat2 = parseFloat(euro2) / parseFloat(dollar2);
				alert ('Voor ' + euro2 + ' euro ontvang je ' + resultaat2.toFixed(2) + ' dollar');
			}				


function Bereken() {
    //haal de waardes uit de HTML
    var hoeveelVoorEuro = document.getElementById("hoeveelVoorEuro").value;
    var input = document.getElementById("inputNumber").value;
    var mijnTekst = "U krijgt:";
    var output; //we maken deze variabele aan om het antwoord in op te slaan

    //als 'van euro naar dollar'..  doe je de ene berekening
    //hier haal je ook weer de waarde uit de HTML met 
    //de code document.mijnForm.EuroDollar.checked
    if (document.mijnForm.EuroDollar.checked) {
        output = hoeveelVoorEuro * input;
        
        //hier voeg je ook nog text toe aan het einde "Dollar"
        //dus oorspronkelijke mijnTekst = "U krijgt:" 
        //en daar voeg je nog wat aan toe 
        mijnTekst += output + " Dollar";
    } 

    //als 'van dollar naar euro'... doe je een andere berekening
    if (document.mijnForm.DollarEuro.checked) {
        output = 1/input * hoeveelVoorEuro ;
        
        //hier voeg je ook nog text toe aan het einde "Euro"
        mijnTekst += output + " Euro";
    }    

    alert(mijnTekst);
    
}

    