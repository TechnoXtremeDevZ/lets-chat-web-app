function getData() {
    firebase.database().ref("/" + room_name).on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(
            function (childSnapshot) {
                childKey = childSnapshot.key;
                if (childKey != "purpose") {
                    firebase_message_id = childKey;

                    childData = childSnapshot.val();
                    message_data = childData;
                    console.log(message_data);
                    name = message_data["user_name"];
                    like = message_data["like"];
                    message = message_data["msg"];

                    name_tag = "<h4>" + name + "<img width='60' height='60' src='tick.png' /></h4>";
                    message_tag = "<h4>" + message + "</h4>";
                    button_tag = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLikes(this.id)'>";
                    span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span></button><hr>";

                    row = name_tag + message_tag + button_tag + span_tag;
                    document.getElementById("output").innerHTML += row;
                }
            })
    }
    )
}
getData();

function updateLikes(btnid) {
    likes = document.getElementById(btnid).value;
    updatedLikes = Number(likes) + 1;

    firebase.database().ref("/" + room_name).child(btnid).update({
        like: updatedLikes
    })
}