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

var user_name = localStorage.getItem("user_name", user_name);

document.getElementById("un_intro").innerHTML = "<h3>Welcome " + user_name + "!</h3>";

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;

            row = "<h3 class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>" + Room_names + "</h3><hr>";

            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirect(name) {
    localStorage.setItem("room_name", name);

    window.location = "web-app-page.html";
}

function addRoom() {
    var room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        room_name: room_name,
        purpose: "adding room"
    })

    localStorage.setItem("room_name", room_name);

    window.location = "web-app-page.html";
}

function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location = "index.html";
}
