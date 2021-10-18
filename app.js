const firebaseConfig = {
    apiKey: "AIzaSyABBONcZWGCTWizpQ8Fp2VIIobCACHlTcQ",
    authDomain: "let-s-chat-app-319fd.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-319fd-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-319fd",
    storageBucket: "let-s-chat-app-319fd.appspot.com",
    messagingSenderId: "335903057718",
    appId: "1:335903057718:web:8c0c5b4e7cd9379a32f597",
    measurementId: "G-QTS9KYVNKP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Function to store the username into the system and
   redirect the user to the room page.
*/

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        user_name: user_name,
        purpose: "adding user"
    })

    window.location = "web-app-room.html";
}
