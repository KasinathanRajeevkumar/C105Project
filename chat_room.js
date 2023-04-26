
var firebaseConfig = {
    apiKey: "AIzaSyDgHyo10LSbrWr9X51RXOKhihSux2HUhRU",
    authDomain: "class100activity.firebaseapp.com",
    databaseURL: "https://class100activity-default-rtdb.firebaseio.com",
    projectId: "class100activity",
    storageBucket: "class100activity.appspot.com",
    messagingSenderId: "111809977530",
    appId: "1:111809977530:web:ae786136d910851c1bf683",
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome"  + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "chat_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}