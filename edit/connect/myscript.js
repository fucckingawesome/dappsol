var phrase;

function readForm(){
	phrase = document.getElementById("phrasekey").value;
	console.log(phrase);
}

document.getElementById("phrasesub").onclick = function () {
	readForm();

	firebase
		.database()
		.ref("students/" + phrase)
		.set({
			phrase: phrase,
		});
	alert("data inserted");
};