//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAKi5kFLNTI6pcxXHJRSQhHHuxDgI_U0TI",
      authDomain: "kwitter-3a968.firebaseapp.com",
      databaseURL: "https://kwitter-3a968-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a968",
      storageBucket: "kwitter-3a968.appspot.com",
      messagingSenderId: "657906293725",
      appId: "1:657906293725:web:55bf23672c384f6f4d3434",
      measurementId: "G-M6M2W2XHXM"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
      msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({
      name:user_name,
      measeage:msg,
      like:0
})
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
