//YOUR FIREBASE LINKS
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

      room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
   
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"</h4>";
message_with_tag = "<h4 class-'message_h4'>"+ message +"</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

//End code
    } });}); }
getData();

function logout()
{

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send()
{

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});

document.getElementById("msg").value ="";
}

function updataLike(message_id)
{

console.log("clicked on like button -" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updata_Like = Number(like) + 1;
console.log(updata_Like);

firebase.database().ref(room_name).child(message_id).update({
    like : updata_like
});

}

