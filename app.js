/* Function to store the username into the system and
   redirect the user to the room page.
*/

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);

    window.location = "web-app-room.html";
}