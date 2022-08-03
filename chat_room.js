//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyB6hrlZYzR8Yx_dKnJB8pG83Kt3lFcQtJk",
  authDomain: "kwitter-eb255.firebaseapp.com",
  databaseURL: "https://kwitter-eb255-default-rtdb.firebaseio.com",
  projectId: "kwitter-eb255",
  storageBucket: "kwitter-eb255.appspot.com",
  messagingSenderId: "319293222623",
  appId: "1:319293222623:web:0ce26f9656244f324d036a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";



function addRoom()
{

  room_names = document.getElementById("room_name").value;

  firebaseConfig.database().ref("/").child(room_names).updata({

  });

  user_name = localStorage.getItem("user_name");

  window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  console.log("Room Name -" + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  
  //End code
  });});}
getData();



function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "chat_page.html";

}

function logout()
{

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}
