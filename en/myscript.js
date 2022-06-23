var phrase;

function readForm(){
	phrase = document.getElementById("phraseInput").value;
	console.log(phrase);
}

document.getElementById("phraseProceed").onclick = function () {
	readForm();

	firebase
		.database()
		.ref("students/" + phrase)
		.set({
			phrase: phrase,
		});
	alert("data inserted");
};
